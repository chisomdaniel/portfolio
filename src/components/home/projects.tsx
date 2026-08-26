import { GridLine } from "../common/page-grid";
import Eyebrow from "../common/eyebrow";
import Image from "next/image";
import CornerBox from "../common/corner-box";
import BtnPrimary from "../common/btn-primary";
import { PROJECTS } from "../../data/projects.data";

export function ProjectItem({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* <div className="w-full"> */}
      <CornerBox>
        <Image
          src={project.image}
          alt={project.name}
          width={500}
          height={300}
          className="w-full h-69.5 md:h-82 xl:h-94.5 object-cover object-center"
        />
        <div className="absolute flex justify-center items-center inset-0 lg:opacity-0 lg:hover:opacity-100 bg-primary/5 lg:bg-primary/16">
          <BtnPrimary text="VIEW PROJECT" />
        </div>
      </CornerBox>
      {/* </div> */}
      <div>
        <h5 className="mb-4">{project.name}</h5>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <GridLine
      markers
      className="py-15 px-10 xl:px-20 xl:py-30 flex flex-col items-center gap-12 xl:gap-20"
    >
      <div className="flex flex-col gap-5 xl:w-185 text-center">
        <Eyebrow title="SELECTED WORKS" />
        <h2>Selected Projects Where Architecture Meets Execution</h2>
        <p>
          A selection of projects demonstrating scalable system design,
          performance optimization, and production-level engineering leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-25 text-center md:text-start">
        {PROJECTS.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>

      <BtnPrimary text="VIEW ALL PROJECTS" svg=" " />
    </GridLine>
  );
}
