import React from "react";
import { Button } from "../button";

const tags = [
  {
    id: 1,
    name: "Codgen",
  },
  {
    id: 2,
    name: "Devops",
  },
  {
    id: 3,
    name: "Devloper",
  },
];
export default function CatalogCard() {
  return (
    <div className="outline outline-[#C9C3B9] p-6">
      <div className="w-[448px] h-[427px] flex flex-col gap-6">
        <div>
          <p className="uppercase body-xs text-[#999999]">Tags</p>
          <div className="flex gap-4 ">
            {tags.map((tag) => (
              <p key={tag.id} className=" uppercase body-xs">
                {tag.name}
              </p>
            ))}
          </div>
        </div>
        <Button variant="primary" className="w-fit mt-6">
          View website
        </Button>
      </div>
    </div>
  );
}
