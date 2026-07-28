import { NavLink, SocialLink } from "@/types/common";

export const SITE_CONFIG = {
  name: "Nithish M",
  title: "Software Engineer | AI Engineer | IoT Engineer | Full-Stack Developer",
  tagline: "Engineering Intelligent Solutions for Real-World Impact.",
  description:
    "I design and develop intelligent software solutions that bridge Artificial Intelligence, Full-Stack Development, and IoT to solve real-world challenges.",
  email: "nithnithish1203@gmail.com",
  phone: "+91 6381884014",
  location: "Nagapattinam, Tamil Nadu, India",
  timezone: "IST (UTC+05:30)",
  resumeUrl: "/images/resume/resume.pdf",
  copyright: `© ${new Date().getFullYear()} Nithish M. All rights reserved.`,
  builtWith: "Built with Next.js · TypeScript · Tailwind CSS",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Nithish264033",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mnithish200503",
    icon: "FaLinkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/cadbury_nithish/",
    icon: "FaInstagram",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Nithish264033/",
    icon: "SiLeetcode",
  },
];

export const ABOUT_STATS = [
  { label: "Projects", value: 4, icon: "RiCodeBoxFill" },
  { label: "Internship", value: 1, icon: "RiBriefcaseFill" },
  { label: "Prizes Won", value: 2, icon: "RiTrophyFill" },
  { label: "Certifications", value: 3, icon: "RiAwardFill" },
];

export const EDUCATION = {
  college: {
    name: "Saranathan College of Engineering",
    location: "Tiruchirappalli, Tamil Nadu",
    degree: "B.Tech in Information Technology",
    duration: "2023 – 2027",
    cgpa: "7.71 / 10",
  },
  school: {
    name: "Government Higher Secondary School",
    location: "Nagapattinam, Tamil Nadu",
    qualification: "Higher Secondary (Class XII)",
    year: "2023",
    percentage: "77.5%",
  },
  relevantCoursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Internet of Things",
    "Cloud Computing",
    "Human Computer Interaction",
    "Big Data Computing",
    "Compiler Design",
    "Web Technologies",
  ],
};