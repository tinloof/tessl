"use client";

import { Icon, IconName } from "@/components/shared/icons";
import Tags from "@/components/shared/tags";
import { info, Tabs, tags } from "@/constant/moc-data";
import { cx } from "cva";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function LandscapeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const tagsWithAll = [
    {
      id: "all",
      name: "Show all",
      color: undefined,
    },
    ...tags,
  ];
  const [activeTag, setActiveTag] = useState(tagsWithAll[0].id.toString());

  return (
    <div className="px-12 max-w-[1440px] min-h-[calc(100vh-355px)] mx-auto flex flex-col gap-12 mb-12">
      <section className="flex justify-between w-full items-end">
        <div className="flex flex-col gap-6">
          <h1 className="text-[64px] tracking-[-1.28px]">Landscape</h1>
          <p className="text-sm leading-[150%]">
            Your Guide to the AI Development Ecosystem
          </p>
        </div>
        <div className="flex gap-12 items-start justify-end">
          {info.map((item) => (
            <div key={item.id} className="flex flex-col text-xs leading-[150%]">
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
        <div className="max-w-[1036px] w-full flex gap-1 flex-wrap items-center justify-start">
          {tagsWithAll.map((tag) => (
            <Tags
              key={tag.id}
              name={tag.name}
              color={tag.color}
              active={activeTag === tag.id.toString()}
              onClick={() => setActiveTag(tag.id.toString())}
            />
          ))}
        </div>
        <div className="rounded-[64px] border border-black flex items-center overflow-hidden">
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

              <p>{tab.name}</p>
            </Link>
          ))}
        </div>
      </section>
      {children}
    </div>
  );
}
