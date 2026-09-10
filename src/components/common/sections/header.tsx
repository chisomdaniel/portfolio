"use client";
import Link from "next/link";
import { GridLine } from "@/components/common/page-grid";
import { motion } from "motion/react";
import { navItemVariants } from "@/providers/motion";
import MobileNav from "../mobile-nav";
import { useState } from "react";
import { Links } from "@/data/links.data";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const mainRoute = segments[1] ? `/${segments[1]}` : "/";

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(mainRoute);

  return (
    <>
      <MobileNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <GridLine>
        <header className="flex font-medium justify-between items-center shrink-0 py-5 px-10 xl:py-6 xl:px-14 text-foreground text-[16px]">
          <motion.div variants={navItemVariants}>
            <Link href="/">
              <h1 className="text-5xl font-bold">
                D<span className="text-primary">.</span>
              </h1>
            </Link>
          </motion.div>

          {/* desktop nav bar */}
          <motion.ul
            variants={navItemVariants}
            className="hidden xl:flex absolute left-1/2 -translate-x-1/2 gap-6"
          >
            {Links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className={cn(
                  "hover:text-primary",
                  isActive === link.link && "text-primary",
                )}
                onClick={() => setIsActive(link.link)}
              >
                <li>{link.name.toUpperCase()}</li>
              </Link>
            ))}
          </motion.ul>
          <motion.div
            variants={navItemVariants}
            className="flex gap-2 items-center"
          >
            <div className="hidden md:flex md:gap-2 shrink-0 items-center">
              <a
                className="border font-medium px-4 py-2 text-primary text-center border-green-a bg-green-light-a hover:bg-primary/8"
                href="https://ccdaniel.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                ccdaniel.tech
              </a>
              <Link
                className="px-4 py-2 w-28 text-center text-wrap bg-primary hover:bg-primary/8 border border-primary hover:border-green-a hover:text-primary text-black"
                href="/contact"
              >
                <span className="font-semibold">
                  LET&apos;S <br />
                  TALK
                </span>
              </Link>
            </div>

            {/* for tablet and mobile */}
            <div
              tabIndex={0}
              className="xl:hidden w-11.25 h-10.75 py-2.5 flex flex-col justify-between items-center cursor-pointer bg-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="w-7.75 h-0.75 bg-background rounded-full"></span>
              <span className="w-7.75 h-0.75 bg-background rounded-full"></span>
              <span className="w-7.75 h-0.75 bg-background rounded-full"></span>
            </div>
          </motion.div>
        </header>
      </GridLine>
    </>
  );
}
