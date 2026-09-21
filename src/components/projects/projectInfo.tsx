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
      className="py-15 px-10 xl:px-55 xl:py-30 flex flex-col items-center gap-12 xl:gap-20"
    >
      <CornerBox className="relative h-70 md:h-87.5 xl:h-125 w-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-5 flex justify-between gap-2">
          {project.brief.map((brief, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="font-semibold">{brief.title}</h3>
              <p>{brief.description}</p>
            </div>
          ))}
        </div>
        <Divider />
      </CornerBox>
    </GridLine>
  );
}
