import SectionHero from "@/components/common/sections/section-hero";
import ConnectSection from "@/components/contact/connect";
import { GreenGridBar } from "@/components/common/page-grid";

export default function About() {
  return (
    <main>
      <SectionHero title="Contact" />
      <ConnectSection />
      <GreenGridBar />
    </main>
  );
}
