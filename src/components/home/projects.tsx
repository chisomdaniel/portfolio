import { GridLine } from "../common/page-grid";
import Eyebrow from "../common/eyebrow";
import Image from "next/image";
import CornerBox from "../common/corner-box";

export function ProjectItem() {}

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
        <div className="flex flex-col gap-6">
          <div className="w-full">
            <CornerBox>
              <Image
                src="/images/laptop.jpg"
                alt="Fabrix Project"
                width={500}
                height={300}
                className="w-full h-69.5 md:h-82 xl:h-94.5 object-cover object-center"
              />
            </CornerBox>
          </div>
          <div>
            <h5 className="mb-4">Fabrix</h5>
            <p>
              A construction firm seeking a modern corporate website to
              strengthen credibility, showcase large-scale projects, and support
              business growth.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-full">
            <CornerBox>
              <Image
                src="/images/laptop.jpg"
                alt="Fabrix Project"
                width={500}
                height={300}
                className="w-full h-69.5 md:h-82 xl:h-94.5 object-cover object-center"
              />
            </CornerBox>
          </div>
          <div>
            <h5 className="mb-4">Taskpad</h5>
            <p>
              A SaaS product leveraging AI to automate task prioritization and
              workflow management for distributed teams.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-full">
            <CornerBox>
              <Image
                src="/images/laptop.jpg"
                alt="Fabrix Project"
                width={500}
                height={300}
                className="w-full h-69.5 md:h-82 xl:h-94.5 object-cover object-center"
              />
            </CornerBox>
          </div>
          <div>
            <h5 className="mb-4">Fabrix</h5>
            <p>
              A construction firm seeking a modern corporate website to
              strengthen credibility, showcase large-scale projects, and support
              business growth.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-full">
            <CornerBox>
              <Image
                src="/images/laptop.jpg"
                alt="Fabrix Project"
                width={500}
                height={300}
                className="w-full h-69.5 md:h-82 xl:h-94.5 object-cover object-center"
              />
            </CornerBox>
          </div>
          <div>
            <h5 className="mb-4">Taskpad</h5>
            <p>
              A SaaS product leveraging AI to automate task prioritization and
              workflow management for distributed teams.
            </p>
          </div>
        </div>
      </div>
    </GridLine>
  );
}
