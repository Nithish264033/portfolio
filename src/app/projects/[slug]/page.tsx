import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { SectionHeader } from "@/components/shared/section-header";
import { PageContainer } from "@/components/shared/page-container";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { TechBadge } from "@/components/shared/tech-badge";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${SITE_CONFIG.name}`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageContainer>
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <FaArrowLeft className="text-xs" />
        Back to Projects
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.subtitle}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <MagneticButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              <FaGithub className="text-sm" />
              View on GitHub
            </MagneticButton>
          )}
          {project.liveDemo && (
            <MagneticButton
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </MagneticButton>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Problem Statement */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>

          {/* Features */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Architecture</h2>
            <p className="text-muted-foreground leading-relaxed font-mono text-sm">
              {project.architecture}
            </p>
          </div>

          {/* Challenges */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
            <ul className="space-y-3">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Scope */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Future Scope</h2>
            <ul className="space-y-3">
              {project.futureScope.map((scope, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">{scope}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Info */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Project Info</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium">{project.duration}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Team Size</p>
                <p className="font-medium">{project.teamSize}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Year</p>
                <p className="font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Role</p>
                <p className="font-medium">{project.role}</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} />
              ))}
            </div>
          </div>

          {/* Awards */}
          {project.awards && project.awards.length > 0 && (
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Awards & Recognition</h3>
              <div className="space-y-2">
                {project.awards.map((award, index) => (
                  <p key={index} className="text-sm text-accent">
                    {award}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
}