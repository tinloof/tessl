import React from "react";
import { footerSocialLinks } from "@/constant/moc-data";
import { Icon, IconName } from "@/components/shared/icons";

export default function Footer() {
  return (
    <section className="relative w-full bg-black text-white">
      <img
        src="/footer-bg.png"
        alt="footer-bg"
        className="object-cover object-center absolute top-0 left-0 w-full h-full "
      />
      <div className="max-w-[1440px] w-full mx-auto px-12 flex gap-12 flex-col items-start relative py-16 z-10">
        <div className="flex items-center justify-between gap-4">
          {footerSocialLinks.map((item) => (
            <a href={item.href} key={item.id}>
              <Icon className="size-6" name={item.icon as IconName} />
            </a>
          ))}
        </div>
        <div className="uppercase body-xs">© 2025 AI Native Development</div>
      </div>
    </section>
  );
}
