// import Image from "next/image";
// import { GridLine } from "@/components/page-grid";
import Hero from "@/components/home/hero";
import BrandLogos from "@/components/home/brand-logos";
import About from "@/components/home/about";
import { GreenGridBar } from "@/components/common/page-grid";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import Articles from "@/components/home/articles";
import ExperienceSection from "@/components/home/experience";

export default function Home() {
  return (
    <main className="w-full bg-background text-white">
      <Hero />
      <BrandLogos />
      <About />
      <GreenGridBar />
      <Projects />
      <ExperienceSection />
      <GreenGridBar />
      <Skills />
      <GreenGridBar />
      <Articles />
    </main>
  );
}
