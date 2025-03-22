import React from "react";
import Logo from "./logo";
import { navLinks } from "../../../constant/moc-data";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" items-center justify-between pt-9 body-sm max-w-[1240px] mx-auto hidden lg:flex">
      <Logo />
      <div className="flex items-center justify-end gap-4">
        <ul className="menuItem flex items-center justify-center gap-4">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:underline">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
