"use client";
import { Links } from "@/data/links.data";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function MobileNav({
  isOpen,
  setIsOpen,
  isActive,
  setIsActive,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isActive: string;
  setIsActive: (active: string) => void;
}) {
  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 z-900 pb-2.5 w-80 h-screen bg-green-light-a",
          "-translate-x-full transition-transform duration-300 ease-in-out delay-0",
          isOpen && "translate-x-0 delay-150",
        )}
      >
        <div>
          <div className="h-[90.5px] flex items-center justify-between">
            <Link href="/" className="p-6">
              <h1 className="text-5xl font-bold text-foreground">
                D<span className="text-primary">.</span>
              </h1>
            </Link>
            <button
              className="p-1.5 w-10 border m-6 text-black font-bold bg-primary flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              X
            </button>
          </div>
          <ul className="w-full">
            {Links.map((link) => (
              <li key={link.name} className="ml-2">
                <Link
                  href={link.link}
                  className={cn(
                    "block text-white text-[16px] font-medium uppercase pl-4.5 pr-4 pt-2 pb-2 hover:text-primary focus:text-primary",
                    isActive === link.link && "text-primary",
                  )}
                  onClick={() => setIsActive(link.link)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-0 z-800 bg-[rgba(51,51,51,0.5)]",
          "-translate-x-full transition-transform duration-300 delay-150 ease-in-out",
          isOpen && "translate-x-0 delay-0",
        )}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}
