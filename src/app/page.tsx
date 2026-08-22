// import Image from "next/image";
// import { GridLine } from "@/components/page-grid";
import Hero from "@/components/home/hero";
import BrandLogos from "@/components/home/brand-logos";

export default function Home() {
  return (
    <main className="w-full bg-black text-white">
      <Hero />
      <BrandLogos />
      <h1>Home Page</h1>
    </main>
  );
}
