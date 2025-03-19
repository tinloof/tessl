import React from "react";
import { Icon } from "../icons";
import { Category } from "@/constant/moc-views";
export default function GridCard({
  categories,
  title,
}: {
  categories: Category[];
  title: string;
}) {
  return (
    <div className="flex flex-col w-full border-b last:border-b-0 border-[#C9C3B9]">
      <div className="border-b border-[#C9C3B9] p-6 w-full text-[27px] flex items-center gap-2">
        <div className="size-4 rounded-full bg-black" />
        <p>{title}</p>
        <Icon name="infoBlack" className="cursor-pointer" />
      </div>
      <div className="grid grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="border-r border-[#C9C3B9] last:border-r-0"
          >
            <div className="text-lg py-4 px-6 border-b border-[#C9C3B9] flex justify-between items-center">
              <p className="ml-8">{category.title}</p>
              <p>{category.tools.length}</p>
            </div>
            <div className="grid grid-cols-4 auto-rows-auto items-stretch gap-px">
              {category.tools.map((tool) => (
                <div
                  key={tool}
                  className="text-sm items-center flex-1 outline outline-[#C9C3B9] h-[120px] px-2 py-4 flex flex-col"
                >
                  <div className="w-full h-14 bg-gray-300" />
                  <p className="uppercase text-center text-xs leading-[130%] tracking-[1.32px]">
                    {tool}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
