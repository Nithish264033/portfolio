import { SectionHeader } from "@/components/shared/section-header";
import { SITE_CONFIG } from "@/lib/constants";
import { experiences } from "@/lib/experience";
import { PageContainer } from "@/components/shared/page-container";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";

export const metadata = {
  title: "Experience",
  description: `Professional experience of ${SITE_CONFIG.name} - internships and more.`,
};

export default function ExperiencePage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Experience"
        subtitle="My professional journey and growth"
      />
      <ExperienceTimeline experiences={experiences} />
    </PageContainer>
  );
}