import { useLandscapeContext } from "@/app/landscape/layout";
import { Icon } from "../icons";
import { ToolsData } from "@/type/tools-type";
import { cx } from "cva";
import { useState } from "react";

export default function GridCard({
  categories,
  title,
}: {
  categories: ToolsData["domains"][0]["categories"];
  title: string;
}) {
  const { activeTags } = useLandscapeContext();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col w-full border-b last:border-b-0 border-[#C9C3B9] ">
      <div className=" p-6 w-full text-[27px] flex items-center gap-2">
        <div className="size-4  rounded-full bg-black" />
        <p className="heading-2xl">{title} </p>
        <Icon name="infoBlack" className="cursor-pointer size-5" />
      </div>
      <div className="grid grid-cols-3">
        {categories.map((category, index) => {
          const hasDevTag = activeTags.includes("all")
            ? true
            : category.tools.some((tool) =>
                tool.tags?.some((tag) => activeTags.includes(tag))
              );
          return (
            <div
              key={category.name}
              className={cx("border-[#C9C3B9] border border-t-0 border-l-0", {
                "border-r-0 ": index % 3 === 2,
                "border-b-0 ":
                  index >= categories.length - (categories.length % 3 || 3),
              })}
            >
              <div
                className={cx(
                  "text-lg py-4 px-6 border-y border-[#C9C3B9]  flex justify-between items-center",
                  {
                    "border-t-0 ": index > 2,
                  }
                )}
              >
                <p className="ml-8 heading-xl">{category.name} </p>
                <p className="font-inter text-sm font-normal leading-[130%] text-black/30">
                  {category.tools.length}
                </p>
              </div>
              <div className="grid grid-cols-4 auto-rows-auto items-stretch gap-px">
                {category.tools
                  .slice(0, expanded ? category.tools.length : 11)
                  .map((tool) => (
                    <div
                      key={tool.name}
                      className="text-sm flex-1 outline outline-[#C9C3B9] h-[120px]  "
                    >
                      <div
                        className={cx(
                          "items-center flex flex-col gap-2 transition-all duration-300 px-2 py-4",
                          {
                            "opacity-30": !hasDevTag,
                          }
                        )}
                      >
                        {tool.icon_url ? (
                          <img
                            src={tool.icon_url}
                            alt={tool.name}
                            className="w-12 h-12 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              const div = document.createElement("div");
                              div.className = "w-12 h-12 bg-gray-300";
                              target.parentNode?.replaceChild(div, target);
                            }}
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-300" />
                        )}
                        <p className="uppercase font-dm-mono text-xs leading-[150%] text-center tracking-[1.54px] line-clamp-2 overflow-hidden text-ellipsis">
                          {tool.name}
                        </p>
                      </div>
                    </div>
                  ))}
                {category.tools.length > 12 && (
                  <button
                    className="body text-sm cursor-pointer flex-1 items-center justify-center flex outline outline-[#C9C3B9] h-[120px] px-2 py-4"
                    onClick={() => setExpanded(!expanded)}
                  >
                    <p className="text-center">
                      {expanded ? "Collapse" : "Expand"}
                      {!expanded && (
                        <>
                          <br />
                          <span className="text-xs">
                            [{category.tools.length - 11}]
                          </span>
                        </>
                      )}
                    </p>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
