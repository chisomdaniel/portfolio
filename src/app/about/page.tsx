import SectionHero from "@/components/common/sections/section-hero";
import AboutSection from "@/components/about/about";
import { GreenGridBar } from "@/components/common/page-grid";
import WhySection from "@/components/about/why";

export default function About() {
  return (
    <main>
      <SectionHero title="About" />
      <AboutSection />
      <GreenGridBar />
      <WhySection />
    </main>
  );
}
