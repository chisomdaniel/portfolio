import { GridLine } from "../common/page-grid";
import Image from "next/image";
import { PROJECTS } from "@/data/projects.data";
import CornerBox from "../common/corner-box";
import Divider from "../common/divider";
import Link from "next/link";
import { Globe, ArrowUpRight } from "lucide-react";

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

      <Divider />

      <div className="w-full flex flex-col md:flex-row gap-6">
        {project.github && (
          <Link
            href={project.github}
            className="group flex gap-1 items-center text-primary lg:text-secondary-text lg:hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 30 30"
              className="fill-primary"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
            <span>View on GitHub</span>
            <ArrowUpRight className="group-hover:stroke-primary" />
          </Link>
        )}
        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-1 items-center text-primary lg:text-secondary-text lg:hover:text-primary"
          >
            <Globe className="stroke-primary" /> <span>View live site</span>
            <ArrowUpRight className="group-hover:stroke-primary" />
          </Link>
        )}
      </div>
    </GridLine>
  );
}
