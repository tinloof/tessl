import GridCard from "@/components/shared/cards/grid-card";
import { gridData } from "@/constant/moc-views";
export default function Landscape() {
  return (
    <section className="border border-[#C9C3B9] rounded-lg">
      {gridData.map((item) => (
        <GridCard
          key={item.id}
          categories={item.categories}
          title={item.title}
        />
      ))}
    </section>
  );
}
