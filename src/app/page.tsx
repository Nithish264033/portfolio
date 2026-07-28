"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { AchievementsSection } from "@/components/sections/achievements";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    const hash = window.location.hash;
    if (hash) {
      const section = hash.replace("#", "");
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
