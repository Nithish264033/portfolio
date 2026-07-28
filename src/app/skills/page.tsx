import { SectionHeader } from "@/components/shared/section-header";
import { SITE_CONFIG } from "@/lib/constants";
import { PageContainer } from "@/components/shared/page-container";
import { SkillsSection } from "@/components/sections/skills";

export const metadata = {
  title: "Skills",
  description: `Technical skills and technologies of ${SITE_CONFIG.name} - Programming Languages, Frameworks, AI/ML, IoT, and more.`,
};

export default function SkillsPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Skills & Technologies"
        subtitle="A comprehensive overview of my technical expertise and proficiencies across various domains"
      />
      <SkillsSection />
    </PageContainer>
  );
}