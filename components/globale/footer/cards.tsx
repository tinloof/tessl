import { Button } from "@/components/shared/button";
import { cx } from "cva";

export default function Cards({
  title,
  caption,
  description,
  label,
  variant,
}: {
  title: string;
  caption: string;
  description: string;
  label: string;
  variant: "discord" | "newsletter";
}) {
  return (
    <div
      className={cx(
        "flex flex-col items-start gap-16 justify-between relative flex-1   py-12 px-10 rounded-[5px]",
        {
          "text-white": variant === "discord",
          "text-black": variant === "newsletter",
        }
      )}
      style={{
        backgroundColor: variant === "discord" ? "#5865F2" : "#ED9079",
      }}
    >
      <img
        src="/footer-card-bg.png"
        alt="footer-card"
        className="object-cover object-center absolute top-0 left-0 w-full h-full"
      />
      <div className="flex flex-col items-start gap-4 justify-start z-20">
        <p className="uppercase">{caption}</p>
        <h3 className="text-[44px] leading-[39.6px] tracking-[-0.88px]">
          {title}
        </h3>
        <p>{description}</p>
      </div>
      <div className="flex items-center justify-start gap-4 z-20">
        {variant === "newsletter" && (
          <input
            className="px-4 body-lg h-14 outline-none border border-black w-[270px] placeholder:text-black"
            placeholder="Your email address"
          />
        )}
        <Button variant="primary" size="medium">
          {label}
        </Button>
      </div>
    </div>
  );
}
