import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://nithishm.dev"),
  title: {
    default: "Nithish M | AI Engineer · IoT Architect · Full-Stack Developer",
    template: "%s | Nithish M",
  },
  description:
    "I design and develop intelligent software solutions that bridge Artificial Intelligence, Full-Stack Development, and IoT to solve real-world challenges.",
  keywords: [
    "Nithish M",
    "Software Engineer",
    "AI Engineer",
    "IoT Engineer",
    "Full-Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
    "ESP32",
    "Generative AI",
    "Web Development",
    "India",
  ],
  authors: [{ name: "Nithish M", url: "https://github.com/Nithish264033" }],
  creator: "Nithish M",
  publisher: "Nithish M",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nithish M Portfolio",
    title: "Nithish M | AI Engineer · IoT Architect · Full-Stack Developer",
    description:
      "I design and develop intelligent software solutions that bridge Artificial Intelligence, Full-Stack Development, and IoT to solve real-world challenges.",
    url: "https://nithishm.dev",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nithish M Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithish M | AI Engineer · IoT Architect · Full-Stack Developer",
    description:
      "I design and develop intelligent software solutions that bridge Artificial Intelligence, Full-Stack Development, and IoT to solve real-world challenges.",
    images: ["/images/og-image.png"],
    creator: "@nithish_m",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "google-site-verification": "",
  },
};

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    ...baseMetadata,
    ...overrides,
  };
}