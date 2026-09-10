import { GridLine } from "../common/page-grid";
import Eyebrow from "../common/eyebrow";
import CornerBox from "../common/corner-box";
import Image from "next/image";
import {
  Laptop,
  Rocket,
  Brain,
  Tools,
  Scale,
  Thinking,
  Secure,
  Focus,
} from "./svgs";
import { H2, P, ChildDiv } from "../common/motion";

interface DataItem {
  svg: React.ComponentType;
  title: string;
  desc: string;
}

const DATA: DataItem[] = [
  {
    svg: Laptop,
    title: "Clean Code",
    desc: "I write structured and maintainable code for long-term projects.",
  },
  {
    svg: Rocket,
    title: "Fast Delivery",
    desc: "Projects are delivered on time with consistent communication.",
  },
  {
    svg: Brain,
    title: "Problem Solving",
    desc: "Complex technical challenges are approached with logical solutions.",
  },
  {
    svg: Tools,
    title: "Modern Tools",
    desc: "I work with modern frameworks and development tools.",
  },
  {
    svg: Scale,
    title: "Scalable Systems",
    desc: "Applications are designed to support growth and performance.",
  },
  {
    svg: Thinking,
    title: "Creative Thinking",
    desc: "Innovative thinking helps solve complex engineering problems.",
  },
  {
    svg: Secure,
    title: "Secure Build",
    desc: "Security practices are integrated into every stage of development.",
  },
  {
    svg: Focus,
    title: "User Focus",
    desc: "Every solution is built with direct focus on the end user's needs.",
  },
];

function Card({
  Svg,
  title,
  desc,
}: {
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}) {
  return (
    <ChildDiv className="xl:self-end">
      <CornerBox className="p-6 flex flex-col gap-6 md:gap-12 border border-green-a bg-green-light-a">
        {<Svg className="w-8 h-8 fill-primary" />}
        <div>
          <h5 className="mb-3 mt-2 text-[20px] md:text-[22px] xl:text-[24px] font-medium">
            {title}
          </h5>
          <p className="">{desc}</p>
        </div>
      </CornerBox>
    </ChildDiv>
  );
}

export default function WhySection() {
  return (
    <GridLine
      markers
      className="px-10 py-15 lg:px-20 lg:py-30 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2"
    >
      <div className="xl:col-start-2 xl:row-start-1 md:col-span-2 flex flex-col items-center gap-5 mb-8 xl:mb-32">
        <Eyebrow title="TRUSTED DEVELOPER" />
        <H2 className="text-center">Why Work Together</H2>
        <P className="max-w-100 text-center">
          I help transform ideas into reliable digital solutions using modern
          engineering practices.
        </P>
      </div>

      {DATA.map((item, index) => (
        <Card key={index} Svg={item.svg} title={item.title} desc={item.desc} />
      ))}

      <ChildDiv className="min-h-74.5 md:min-h-56.25 md:col-span-2 xl:-col-start-4 xl:row-start-3">
        <CornerBox className="h-full">
          <Image
            src="/images/workstation.png"
            alt="workstation"
            fill
            className="object-cover object-center"
          />
        </CornerBox>
      </ChildDiv>
    </GridLine>
  );
}
