import BrandLogos from "@/components/home/brand-logos";
import SectionHeader from "@/components/common/sections/section-hero";
import AllProjects from "@/components/common/sections/all-projects";
import Testimonials from "@/components/projects/testimonials";

export default function Projects() {
  return (
    <main>
      <SectionHeader title="Projects" />
      <AllProjects />
      <BrandLogos />
      <Testimonials />
    </main>
  );
}
