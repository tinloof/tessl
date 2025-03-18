import React from "react";
import Logo from "./logo";
import { navLinks } from "../../../constant/moc-data";
import { Icon } from "@/components/shared/icons";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-12 body-sm max-w-[1440px] mx-auto">
      <Logo />
      <div className="flex items-center justify-end gap-4">
        <ul className="flex items-center justify-center gap-4">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:underline">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <Icon name="searchBlack" className="size-[27px]" />
      </div>
    </header>
  );
}
