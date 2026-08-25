// import Image from "next/image";
// import { GridLine } from "@/components/page-grid";
import Hero from "@/components/home/hero";
import BrandLogos from "@/components/home/brand-logos";
import About from "@/components/home/about";
import { GreenGridBar } from "@/components/common/page-grid";

export default function Home() {
  return (
    <main className="w-full bg-black text-white">
      <Hero />
      <BrandLogos />
      <About />
      <GreenGridBar className="z-30 overflow-hidden" />
      <h1>Home Page</h1>
    </main>
  );
}
