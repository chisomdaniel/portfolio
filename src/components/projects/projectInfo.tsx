import { GridLine } from "../common/page-grid";
import Image from "next/image";
import { PROJECTS } from "@/data/projects.data";
import CornerBox from "../common/corner-box";
import Divider from "../common/divider";

export default function ProjectInfo({
  project,
}: {
  project: (typeof PROJECTS)[0];
}) {
  return (
    <GridLine
      markers
      className="py-15 px-10 xl:px-55 xl:py-30 flex flex-col items-center gap-6"
    >
      <CornerBox className="relative h-70 md:h-87.5 xl:h-125 w-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-center"
        />
      </CornerBox>

      <div className="w-full my-2 flex flex-col md:flex-row justify-between gap-6">
        {project.brief.map((brief, index) => (
          <div key={index} className="shrink-0 flex flex-col flex-wrap gap-2">
            <h6 className="text-[14px]/[21px]">{brief.title}</h6>
            <p className="text-[18px]/[23.94px] font-primary font-medium text-foreground">
              {brief.description}
            </p>
          </div>
        ))}
      </div>
      <Divider />
      {project.desc.map((value, idx) => (
        <div key={idx} className="w-full flex flex-col gap-2">
          <h3 className="font-primary text-[30px]/[36px] md:text-[32px]/[38.4px] xl:text-[38px]/[45.6px] font-medium text-foreground">
            {value.title}
          </h3>
          <p>{value.description}</p>
        </div>
      ))}

      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-2">
          <h5>Technologies</h5>
          <ul className="pl-2 flex flex-col gap-2.5 list-[square] list-inside marker:text-primary">
            {project.languages.map((value, idx) => (
              <li key={idx}>{value}</li>
            ))}
          </ul>
        </div>

        {project.tools && (
          <div className="flex-1 flex flex-col gap-2">
            <h5>Tools</h5>
            <ul className="pl-2 flex flex-col gap-2.5 list-[square] list-inside marker:text-primary">
              {project.tools.map((value, idx) => (
                <li key={idx}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </GridLine>
  );
}
