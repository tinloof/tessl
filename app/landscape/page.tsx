"use client";

import GridCard from "@/components/shared/cards/grid-card";
import { useLandscapeContext } from "./layout";

export default function Landscape() {
  const { toolsData } = useLandscapeContext();
  return (
    <section className="border border-[#C9C3B9] rounded-lg">
      {toolsData?.domains.map((item) => (
        <GridCard
          key={item.name}
          categories={item.categories}
          title={item.name}
        />
      ))}
    </section>
  );
}
