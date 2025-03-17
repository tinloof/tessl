import { cx } from "cva";

export default function Tags({
  name,
  color,
  active,
}: {
  name: string;
  color: string;
  active?: boolean;
}) {
  return (
    <div
      className={cx(
        "flex gap-1 button-text-xs items-center justify-center py-1.75 px-4 rounded-full border border-black",
        {
          "bg-black text-white": active,
          "bg-transparent text-black ": !active,
        }
      )}
    >
      <span
        className="shrink-0 rounded-full size-3"
        style={{ backgroundColor: color ? color : "grey" }}
      />
      {name}
    </div>
  );
}
