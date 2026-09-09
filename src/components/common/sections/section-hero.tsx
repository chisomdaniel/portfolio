import { GridLine } from "@/components/common/page-grid";
import { H1 } from "@/components/common/motion";

export default function SectionHero({ title }: { title: string }) {
  return (
    <GridLine
      markers
      className="overflow-hidden w-full flex items-center justify-center h-74.75 md:h-87.25 xl:h-124.75 bg-background bg-hero-pattern bg-top bg-no-repeat bg-cover"
    >
      <H1 className="text-center text-[56px]/[56px] md:text-[64px]/[64px] xl:text-[78px]/[78px] font-medium text-foreground font-primary">
        {title}
      </H1>
    </GridLine>
  );
}
