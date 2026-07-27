import { Achievement, Certification } from "@/types/common";

export const achievements: Achievement[] = [
  {
    id: "noob-hackfest-2026",
    title: "First Prize — NOOB HACKFEST 2026",
    description:
      "Won first prize (₹25,000) at NOOB HACKFEST 2026 organized by SRM Institute of Science and Technology for developing the AI Adaptive Learning Platform.",
    date: "2026",
    type: "hackathon",
    icon: "RiTrophyFill",
    color: "#FFD700",
    issuer: "SRM Institute of Science and Technology",
    prize: "₹25,000",
  },
  {
    id: "iot-expo-2025",
    title: "Second Prize — IoT Project Expo 2025",
    description:
      "Awarded second prize at the IoT Project Expo 2025, Saranathan College of Engineering for the Driver Drowsiness Detection System.",
    date: "2025",
    type: "award",
    icon: "RiMedalFill",
    color: "#C0C0C0",
    issuer: "Saranathan College of Engineering",
  },
  {
    id: "biglearn-cert",
    title: "Generative AI Internship",
    description: "Completed a one-month Generative AI Internship at BigLearn, focusing on LLMs and Prompt Engineering.",
    date: "2026",
    type: "certification",
    icon: "RiAwardFill",
    color: "#3B82F6",
    issuer: "BigLearn",
  },
  {
    id: "nptel-hci",
    title: "NPTEL — Human Computer Interaction",
    description: "Successfully completed the NPTEL course in Human Computer Interaction.",
    date: "2026",
    type: "certification",
    icon: "RiBookOpenFill",
    color: "#8B5CF6",
    issuer: "NPTEL",
  },
  {
    id: "nptel-bigdata",
    title: "NPTEL — Big Data Computing",
    description: "Successfully completed the NPTEL course in Big Data Computing.",
    date: "2025",
    type: "certification",
    icon: "RiBookOpenFill",
    color: "#06B6D4",
    issuer: "NPTEL",
  },
];

export const certifications: Certification[] = [
  {
    id: "biglearn-genai",
    title: "Generative AI Internship Certificate",
    issuer: "BigLearn",
    date: "2026",
  },
  {
    id: "nptel-hci",
    title: "Human Computer Interaction",
    issuer: "NPTEL",
    date: "2026",
  },
  {
    id: "nptel-bigdata",
    title: "Big Data Computing",
    issuer: "NPTEL",
    date: "2025",
  },
];