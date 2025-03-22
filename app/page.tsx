"use client";

import GridCard from "@/components/shared/cards/grid-card";
import { useGlobaleContext } from "@/components/globale/globale-context";

export default function Home() {
  const { toolsData } = useGlobaleContext();
  return (
    <section className="border border-[#C9C3B9] rounded-lg p-4 lg:p-0">
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
