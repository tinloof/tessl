import { footerLinks } from "@/constant/moc-data";
import React from "react";

export default function LinkList() {
  return (
    <div className="flex items-start justify-between gap-52">
      {footerLinks.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start justify-start gap-4"
        >
          <h3 className="text-[#9F9F9F] uppercase leading-[120%] tracking-[0.1em] font-semibold">
            {item.title}
          </h3>
          {item.links.map((link) => (
            <a href={link.href} key={link.id} className="body-xs uppercase">
              {link.label}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
