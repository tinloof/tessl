import React from "react";
import Cards from "./cards";
import { footerSocialLinks } from "@/constant/moc-data";
import { Icon, IconName } from "@/components/shared/icons";
import LinkList from "./link-list";

export default function Footer() {
  return (
    <div className=" bg-black flex flex-col w-full items-center justify-between ">
      <div className="flex  items-center w-full justify-between gap-10 max-w-[1440px] mx-auto p-12">
        <Cards
          title="Don’t miss out"
          caption="The drop"
          description="Sign up to be notified when we post."
          label="Subscribe"
          variant="newsletter"
        />
        <Cards
          title="Discord"
          description=" Come and join the discussion."
          caption="JOIN US ON"
          label="Subscribe"
          variant="discord"
        />
      </div>
      <div className="relative w-full h-full min-h-screen text-white flex items-stretch">
        <img
          src="/footer-bg.png"
          alt="footer-bg"
          className="object-cover object-center absolute top-0 left-0 w-full h-full "
        />
        <section className="max-w-[1440px] w-full mx-auto px-12 flex justify-between flex-col items-start relative py-28 z-10">
          <LinkList />
          <div className="flex flex-col items-start justify-end gap-16">
            <div className="flex items-center justify-between gap-4">
              {footerSocialLinks.map((item) => (
                <a href={item.href} key={item.id}>
                  <Icon className="size-6" name={item.icon as IconName} />
                </a>
              ))}
            </div>
            {/* Add font here */}
            <div className="uppercase body-xs">
              © 2025 AI Native Development
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
