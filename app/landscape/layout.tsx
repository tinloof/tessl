"use client";

import { Icon, IconName } from "@/components/shared/icons";
import Tags from "@/components/shared/tags";
import { info, Tabs } from "@/constant/moc-data";
import { ToolsData } from "@/type/tools-type";
import { cx } from "cva";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type LandscapeContextType = {
  activeTags: string[];
  toolsData: ToolsData | undefined;
};

export const LandscapeContext = createContext<LandscapeContextType | undefined>(
  undefined
);

export function useLandscapeContext() {
  const context = useContext(LandscapeContext);
  if (context === undefined) {
    throw new Error(
      "useLandscapeContext must be used within a LandscapeProvider"
    );
  }
  return context;
}

export default function LandscapeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data } = useSWR<ToolsData>("/tools-data.json", fetcher);

  const uniqueTags = data?.domains
    .flatMap((domain) => domain.categories)
    .flatMap((category) => category.tools)
    .flatMap((tool) => tool.tags || [])
    .filter((tag, index, self) => self.indexOf(tag) === index)
    .map((name) => ({
      id: name,
      name: name,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }));

  const tagsWithAll = [
    {
      id: "all",
      name: "Show all",
      color: undefined,
    },
    ...(uniqueTags || []),
  ];

  const [activeTags, setActiveTags] = useState([tagsWithAll[0].id.toString()]);
  const handleTagClick = (tagId: string) => {
    if (tagId === "all") {
      setActiveTags(["all"]);
      return;
    }

    setActiveTags((prev) => {
      const withoutAll = prev.filter((tag) => tag !== "all");

      if (withoutAll.includes(tagId)) {
        const newTags = withoutAll.filter((tag) => tag !== tagId);
        return newTags.length === 0 ? ["all"] : newTags;
      } else {
        return [...withoutAll, tagId];
      }
    });
  };
  const contextValue: LandscapeContextType = {
    activeTags,
    toolsData: data,
  };

  return (
    <div className="max-w-[1240px] min-h-[calc(100vh-355px)] mx-auto flex flex-col gap-12 my-12">
      <section className="flex justify-between w-full items-end">
        <div className="flex flex-col gap-6">
          <h1 className="heading">Landscape</h1>
          <p className="body">Your Guide to the AI Development Ecosystem</p>
        </div>
        <div className="flex gap-12 items-start justify-end">
          {info.map((item) => (
            <div key={item.id} className="body-sm">
              <div className="text-[#999999] ">{item.title}</div>
              <div>{item.description}</div>
              {item.label && (
                <div className="flex gap-1 items-center">
                  <Icon name={item.icon as IconName} />
                  <div className="underline">{item.label}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="flex justify-between w-full items-end gap-12">
        <div className=" w-full flex gap-1 flex-wrap items-center justify-start">
          {tagsWithAll.map((tag) => (
            <Tags
              key={tag.id}
              name={tag.name}
              color={tag.color}
              active={activeTags.includes(tag.id.toString())}
              onClick={() => handleTagClick(tag.id.toString())}
            />
          ))}
        </div>
        <div className="rounded-[64px] shrink-0 border border-black flex items-center overflow-hidden">
          {Tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={cx(
                "flex items-center gap-1 px-4 py-2 nth-[2]:border-x transition-all duration-300 border-black",
                {
                  "bg-black text-white": pathname === tab.href,
                }
              )}
            >
              <Icon
                name={
                  `${tab.icon}${
                    pathname === tab.href ? "White" : "Black"
                  }` as IconName
                }
              />

              <p className="label-sm">{tab.name}</p>
            </Link>
          ))}
        </div>
      </section>
      <LandscapeContext.Provider value={contextValue}>
        {children}
      </LandscapeContext.Provider>
    </div>
  );
}
