"use client";

import type React from "react";

import { Icon, type IconName } from "@/components/shared/icons";
import Tags from "@/components/shared/tags";
import { info, Tabs } from "@/constant/moc-data";
import initialToolsData from "@/public/tools-data.json";
import type { ToolsData } from "@/type/tools-type";
import { cx } from "cva";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Search from "../shared/search";
import { getConsistentColor } from "@/util/get-consistent-color";
import { GlobaleContext, type GlobaleContextType } from "./globale-context";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<ToolsData>(
    initialToolsData as unknown as ToolsData
  );
  const [activeTags, setActiveTags] = useState(["all"]);
  const [isMounted, setIsMounted] = useState(false);

  // Client-side only code
  useEffect(() => {
    setIsMounted(true);

    // Get search param from URL on initial load
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const search = urlParams.get("search") || "";
      setSearchTerm(search);
    }
  }, []);

  // Handle search term changes
  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm && isMounted) {
        try {
          const response = await fetch("/tools-data.json");
          const newData = await response.json();
          setData(newData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [searchTerm, isMounted]);

  // Update search handler to be passed to Search component
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const uniqueTags = data?.domains
    .flatMap((domain) => domain.categories)
    .flatMap((category) => category.tools)
    .flatMap((tool) => tool.tags || [])
    .filter((tag, index, self) => self.indexOf(tag) === index)
    .map((name) => ({
      id: name,
      name: name,
      color: getConsistentColor(name),
    }));

  const tagsWithAll = [
    {
      id: "all",
      name: "Show all",
      color: undefined,
    },
    ...(uniqueTags || []),
  ];

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

  const filteredData = searchTerm
    ? {
        ...data,
        domains:
          data?.domains
            .map((domain) => ({
              ...domain,
              categories: domain.categories
                .map((category) => ({
                  ...category,
                  tools: category.tools.filter(
                    (tool) =>
                      tool.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      tool.description
                        ?.toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      tool.tags?.some((tag) =>
                        tag.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                  ),
                }))
                .filter((category) => category.tools.length > 0),
            }))
            .filter((domain) => domain.categories.length > 0) || [],
      }
    : data;

  const contextValue: GlobaleContextType = {
    activeTags,
    toolsData: filteredData,
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
        <div className="w-full flex gap-1 flex-wrap items-center justify-start">
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
        <div className="flex shrink-0 flex-col justify-between gap-2 items-center">
          {(pathname === "/catalog" || pathname === "/list") && (
            <Search onSearch={handleSearch} initialValue={searchTerm} />
          )}
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
                    `${tab.icon}${pathname === tab.href ? "White" : "Black"}` as IconName
                  }
                />
                <p className="label-sm">{tab.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <GlobaleContext.Provider value={contextValue}>
        {children}
      </GlobaleContext.Provider>
    </div>
  );
}
