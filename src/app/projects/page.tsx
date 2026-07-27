import { SectionHeader } from "@/components/shared/section-header";
import { SITE_CONFIG } from "@/lib/constants";
import { projects } from "@/lib/projects";
import { PageContainer } from "@/components/shared/page-container";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata = {
  title: "Projects",
  description: `Explore projects by ${SITE_CONFIG.name} - AI, IoT, Full-Stack, and Software Engineering.`,
};

export default function ProjectsPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Projects"
        subtitle="A collection of projects spanning AI, IoT, Full-Stack, and Software Engineering"
      />
      <ProjectsGrid projects={projects} />
    </PageContainer>
  );
}