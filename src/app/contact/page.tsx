import { SectionHeader } from "@/components/shared/section-header";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { PageContainer } from "@/components/shared/page-container";
import { MagneticButton } from "@/components/shared/magnetic-button";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_CONFIG.name}.`,
};

export default function ContactPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Get In Touch"
        subtitle="Let's connect and build something amazing together"
      />

      <div className="mx-auto max-w-2xl">
        <div className="glass rounded-2xl p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                {SITE_CONFIG.email}
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">{SITE_CONFIG.location}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <MagneticButton key={link.name} href={link.url} variant="outline" size="sm">
                    {link.name}
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}