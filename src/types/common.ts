export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'iot' | 'fullstack' | 'software';
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  techStack: TechStack[];
  screenshots: string[];
  demoVideo?: string;
  github?: string;
  liveDemo?: string;
  duration: string;
  teamSize: string;
  role: string;
  challenges: string[];
  achievements: string[];
  futureScope: string[];
  awards?: string[];
  featured: boolean;
  year: number;
}

export interface TechStack {
  name: string;
  icon: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: SkillCategory;
  relatedProjects?: string[];
  yearsOfExperience?: number;
}

export type SkillCategory =
  | 'Programming Languages'
  | 'Frameworks & Libraries'
  | 'Databases'
  | 'Cloud & DevOps'
  | 'AI / Machine Learning'
  | 'IoT & Embedded Systems'
  | 'Design Tools'
  | 'Version Control & Tools'
  | 'Operating Systems'
  | 'Other Technologies';

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  type: 'Internship' | 'Research' | 'Freelance' | 'Teaching' | 'Open Source' | 'Volunteer' | 'Leadership';
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
  startDate: string;
  endDate?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'hackathon' | 'award' | 'competition' | 'certification' | 'scholarship' | 'publication';
  icon: string;
  color: string;
  link?: string;
  issuer?: string;
  prize?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}