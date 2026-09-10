import Image from "next/image";
import CornerBox from "../common/corner-box";
import { GridLine } from "../common/page-grid";
import { ChildDiv, H2, P } from "../common/motion";
import Eyebrow from "../common/eyebrow";
import { EXPERIENCE } from "@/data/experience.data";

function ExperienceCard({
  title,
  company,
  duration,
  description,
  index,
}: {
  title: string;
  company: string;
  duration: string;
  description: string;
  index: number;
}) {
  return (
    <>
      <ChildDiv className="flex flex-col text-center md:text-start items-center md:items-start md:flex-row-reverse gap-6 justify-between">
        <div className="shrink-0">
          <span className="px-3.5 py-1.5 text-[14px] border bg-green-light-a border-accent rounded-full">
            {duration}
          </span>
        </div>
        <div>
          <h5 className="mb-3">{company}</h5>
          <p className="font-semibold text-primary">{title}</p>
          {/* <p className="mt-1">{description}</p> */}
        </div>
      </ChildDiv>
      {index < EXPERIENCE.length - 1 && (
        <div key={`divider-${index}`} className="h-px w-full bg-accent"></div>
      )}
    </>
  );
}

export default function ExperienceSection() {
  return (
    <GridLine
      markers
      className="py-15 px-5 md:px-10 xl:px-20 xl:py-30 flex flex-col gap-10 xl:gap-20"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <Eyebrow title="CAREER JOURNEY" />
        <H2>My Professional Experience</H2>
        <P className="max-w-125">
          Over the years, I have collaborated with talented teams to develop
          scalable and efficient applications.
        </P>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
        <div className="flex-1 flex flex-col gap-10">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              description={exp.description}
              index={index}
            />
          ))}
        </div>
        <ChildDiv className="flex-1">
          <CornerBox className="min-h-75 md:min-h-87.5 lg:min-h-full">
            <Image
              src="/images/person-working.png"
              alt="person working"
              fill
              className="object-cover object-center"
            />
          </CornerBox>
        </ChildDiv>
      </div>
    </GridLine>
  );
}
