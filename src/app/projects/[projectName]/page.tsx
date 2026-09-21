import SectionHero from "@/components/common/sections/section-hero";
import { PROJECTS } from "@/data/projects.data";
import { notFound } from "next/navigation";
import ProjectInfo from "@/components/projects/projectInfo";

export default async function Page({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;
  const project = PROJECTS.find(
    (p) => p.name.toLowerCase() === projectName.toLowerCase(),
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <SectionHero
        title={projectName.charAt(0).toUpperCase() + projectName.slice(1)}
      />
      <ProjectInfo project={project} />
    </main>
  );
}
