import { GridLine } from "../common/page-grid";
import { ChildDiv, P, H2 } from "../common/motion";
import Eyebrow from "../common/eyebrow";
import { StatsData } from "@/data/stats.data";
import Image from "next/image";
import CornerBox from "../common/corner-box";

export default function StatsSection() {
  return (
    <GridLine
      markers
      className="px-10 py-15 lg:px-20 lg:py-30 flex flex-col-reverse xl:flex-row gap-10 xl:gap-20"
    >
      <CornerBox className="flex-1 min-h-87.5">
        <Image
          src="/images/person-working.png"
          alt="person working"
          fill
          className="object-cover object-center"
        />
      </CornerBox>
      <div className="flex-1 flex flex-col justify-between">
        <ChildDiv className="flex flex-col gap-5">
          <Eyebrow title="STATISTICS" />
          <H2>My Engineering Progress in Numbers</H2>
          <P className="mb-8 md:mb-12 xl:mb-41">
            These numbers represent milestones achieved through dedication and
            continuous learning. They reflect the value I bring to every
            project.
          </P>
        </ChildDiv>
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          {StatsData.map((item, index) => (
            <ChildDiv
              key={index}
              className="flex-1 xl:flex-none flex flex-col gap-2"
            >
              <p className="text-[14px] font-primary font-medium">
                {item.title}
              </p>
              <h5 className="text-[50px]/[55px] md:text-[56px]/[63.84px] font-medium">
                {item.value}
              </h5>
            </ChildDiv>
          ))}
        </div>
      </div>
    </GridLine>
  );
}
