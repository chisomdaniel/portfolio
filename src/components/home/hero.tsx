import { GridLine } from "../page-grid";
import { CornerBox } from "../common/corner-box";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <GridLine
      markers={true}
      className="min-h-screen px-20 py-10 bg-background bg-hero-pattern bg-center bg-cover bg-no-repeat overlay"
    >
      <div className="absolute inset-0 bg-background/30" />
      <div className="relative min-h-screen flex flex-col justify-between">
        <h1 className="text-[132px] font-medium text-foreground font-primary leading-33 tracking-[-2.64px]">
          Architecting the <br /> Modern Web
        </h1>
        <div className="flex items-end justify-between">
          <div className="flex flex-row items-center gap-1.5 text-white-text">
            <span className="w-3.5 h-3.5 rounded-full bg-primary border-4 border-green-a"></span>
            <p>Available for new projects</p>
          </div>

          <div className="w-125 flex flex-col items-start gap-10">
            <CornerBox>
              <p className="tp-primary leading-7.5">
                Hi, I&apos;m Daniel. Specializing in modern web technologies, I
                turn complex ideas into fast, reliable, and maintainable
                applications.
              </p>
            </CornerBox>
            <Link
              href="/projects"
              className="flex gap-10 items-center font-semibold hover:bg-green-light-a px-4 py-3 border border-primary hover:border-green-light-b bg-primary text-black hover:text-primary stroke-black hover:stroke-primary"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight strokeWidth={3} className=" w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </GridLine>
  );
}
