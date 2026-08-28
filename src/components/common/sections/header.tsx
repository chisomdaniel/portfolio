import Link from "next/link";
import { GridLine } from "@/components/common/page-grid";

export default function Header() {
  return (
    <GridLine>
      <header className="flex font-medium justify-between items-center shrink-0 py-6 px-14 text-foreground text-[16px]">
        <Link href="/">
          <h1 className="text-5xl font-bold">
            D<span className="text-primary">.</span>
          </h1>
        </Link>

        <ul className="hidden xl:flex absolute left-1/2 -translate-x-1/2 gap-6">
          <Link className="text-primary" href="/">
            <li>HOME</li>
          </Link>
          <Link className="hover:text-primary" href="/about">
            <li>ABOUT</li>
          </Link>
          <Link className="hover:text-primary" href="/contact">
            <li>CONTACT</li>
          </Link>
          <Link className="hover:text-primary" href="/projects">
            <li>PROJECTS</li>
          </Link>
          <Link className="hover:text-primary" href="/blog">
            <li>BLOG</li>
          </Link>
        </ul>
        <div className="flex gap-2 items-center">
          <div className="hidden md:flex md:gap-2 shrink-0 items-center">
            <a
              className="border font-medium px-4 py-2 text-primary text-center border-green-a bg-green-light-a hover:bg-primary/8"
              href="https://daniel.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              daniel.dev
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
          >
            <span className="w-7.75 h-0.75 bg-background rounded-full"></span>
            <span className="w-7.75 h-0.75 bg-background rounded-full"></span>
            <span className="w-7.75 h-0.75 bg-background rounded-full"></span>
          </div>
        </div>
      </header>
    </GridLine>
  );
}
