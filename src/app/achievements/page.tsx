import { SectionHeader } from "@/components/shared/section-header";
import { SITE_CONFIG } from "@/lib/constants";
import { achievements, certifications } from "@/lib/achievements";
import { PageContainer } from "@/components/shared/page-container";
import { AchievementsTimeline } from "@/components/achievements/achievements-timeline";

export const metadata = {
  title: "Achievements",
  description: `Achievements, awards, and certifications of ${SITE_CONFIG.name}.`,
};

export default function AchievementsPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Achievements"
        subtitle="Awards, recognitions, and certifications"
      />
      <AchievementsTimeline achievements={achievements} certifications={certifications} />
    </PageContainer>
  );
}