import { SectionHeader } from "@/components/shared/section-header";
import { SITE_CONFIG, ABOUT_STATS, EDUCATION } from "@/lib/constants";
import { GradientText } from "@/components/shared/gradient-text";
import { PageContainer } from "@/components/shared/page-container";

export const metadata = {
  title: "About",
  description: `Learn more about ${SITE_CONFIG.name} - background, education, and skills.`,
};

export default function AboutPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="About Me"
        subtitle="Get to know me better"
      />

      {/* Bio */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <p className="text-lg text-muted-foreground leading-relaxed">
          I am an <GradientText>Information Technology</GradientText> student with a strong passion for{" "}
          <GradientText>Artificial Intelligence</GradientText>,{" "}
          <GradientText>Software Engineering</GradientText>,{" "}
          <GradientText>IoT</GradientText>, and{" "}
          <GradientText>Full-Stack Development</GradientText>.
        </p>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          I enjoy designing and building intelligent applications that combine modern technologies with
          practical problem-solving. From AI-powered learning platforms and autonomous software engineering
          tools to IoT-based communication systems, I continuously challenge myself through hackathons,
          internships, and real-world projects. My goal is to build impactful, scalable, and user-centric
          solutions while continuously learning and pushing the boundaries of innovation.
        </p>
      </div>

      {/* Stats */}
      <div className="mx-auto mb-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
        {ABOUT_STATS.map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-2xl p-6 text-center"
          >
            <p className="text-3xl font-bold gradient-text">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-8 text-2xl font-bold">Education</h3>
        <div className="space-y-8">
          <div className="glass rounded-2xl p-8">
            <h4 className="text-xl font-semibold">{EDUCATION.college.name}</h4>
            <p className="mt-1 text-muted-foreground">{EDUCATION.college.location}</p>
            <p className="mt-2 text-primary font-medium">{EDUCATION.college.degree}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {EDUCATION.college.duration} · CGPA: {EDUCATION.college.cgpa}
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <h4 className="text-xl font-semibold">{EDUCATION.school.name}</h4>
            <p className="mt-1 text-muted-foreground">{EDUCATION.school.location}</p>
            <p className="mt-2 text-primary font-medium">{EDUCATION.school.qualification}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {EDUCATION.school.year} · Percentage: {EDUCATION.school.percentage}
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}