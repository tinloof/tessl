"use client";
import CatalogCard from "@/components/shared/cards/catalog-car";
import { useGlobaleContext } from "@/components/globale/globale-context";

export default function Catalog() {
  const { toolsData, activeTags } = useGlobaleContext();

  return (
    <div className="grid grid-cols-3 gap-px border border-[#C9C3B9] rounded-lg overflow-hidden">
      {toolsData?.domains.map((domain) =>
        domain.categories.map((category) => {
          const filteredTools = activeTags.includes("all")
            ? category.tools
            : category.tools.filter((tool) =>
                tool.tags?.some((tag) => activeTags.includes(tag))
              );

          return filteredTools.map((tool) => (
            <CatalogCard key={tool.name} tool={tool} />
          ));
        })
      )}
    </div>
  );
}
