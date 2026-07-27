import { Skill } from "@/types/common";

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", icon: "FaPython", proficiency: "Advanced", category: "Programming Languages", relatedProjects: ["AI Adaptive Learning Platform", "Driver Drowsiness Detection", "AI Software Engineering Studio"], yearsOfExperience: 3 },
  { name: "Java", icon: "FaJava", proficiency: "Advanced", category: "Programming Languages", relatedProjects: ["Data Structures & Algorithms"], yearsOfExperience: 3 },
  { name: "C", icon: "SiC", proficiency: "Intermediate", category: "Programming Languages", yearsOfExperience: 2 },
  { name: "JavaScript", icon: "FaJs", proficiency: "Intermediate", category: "Programming Languages", relatedProjects: ["AI Adaptive Learning Platform", "AI Software Engineering Studio"], yearsOfExperience: 2 },
  { name: "TypeScript", icon: "SiTypescript", proficiency: "Beginner", category: "Programming Languages", yearsOfExperience: 1 },
  { name: "SQL", icon: "SiPostgresql", proficiency: "Intermediate", category: "Programming Languages", yearsOfExperience: 2 },

  // Frameworks & Libraries
  { name: "React.js", icon: "FaReact", proficiency: "Advanced", category: "Frameworks & Libraries", relatedProjects: ["AI Adaptive Learning Platform", "AI Software Engineering Studio", "FECS"], yearsOfExperience: 2 },
  { name: "Next.js", icon: "SiNextdotjs", proficiency: "Beginner", category: "Frameworks & Libraries", yearsOfExperience: 1 },
  { name: "Node.js", icon: "FaNodeJs", proficiency: "Intermediate", category: "Frameworks & Libraries", relatedProjects: ["FECS"], yearsOfExperience: 1 },
  { name: "Express.js", icon: "SiExpress", proficiency: "Intermediate", category: "Frameworks & Libraries", yearsOfExperience: 1 },
  { name: "FastAPI", icon: "SiFastapi", proficiency: "Advanced", category: "Frameworks & Libraries", relatedProjects: ["AI Software Engineering Studio"], yearsOfExperience: 1 },
  { name: "Django", icon: "SiDjango", proficiency: "Intermediate", category: "Frameworks & Libraries", relatedProjects: ["AI Adaptive Learning Platform"], yearsOfExperience: 1 },
  { name: "TensorFlow", icon: "SiTensorflow", proficiency: "Intermediate", category: "Frameworks & Libraries", relatedProjects: ["AI Adaptive Learning Platform", "Driver Drowsiness Detection"], yearsOfExperience: 1 },
  { name: "OpenCV", icon: "SiOpencv", proficiency: "Intermediate", category: "Frameworks & Libraries", relatedProjects: ["AI Adaptive Learning Platform", "Driver Drowsiness Detection"], yearsOfExperience: 1 },
  { name: "MediaPipe", icon: "SiMediapipe", proficiency: "Intermediate", category: "Frameworks & Libraries", relatedProjects: ["AI Adaptive Learning Platform"], yearsOfExperience: 1 },
  { name: "Tailwind CSS", icon: "SiTailwindcss", proficiency: "Intermediate", category: "Frameworks & Libraries", yearsOfExperience: 1 },
  { name: "Framer Motion", icon: "SiFramer", proficiency: "Beginner", category: "Frameworks & Libraries", yearsOfExperience: 1 },

  // Databases
  { name: "MongoDB", icon: "SiMongodb", proficiency: "Advanced", category: "Databases", yearsOfExperience: 2 },
  { name: "MySQL", icon: "SiMysql", proficiency: "Intermediate", category: "Databases", yearsOfExperience: 2 },
  { name: "PostgreSQL", icon: "SiPostgresql", proficiency: "Intermediate", category: "Databases", relatedProjects: ["AI Software Engineering Studio"], yearsOfExperience: 1 },
  { name: "Firebase", icon: "SiFirebase", proficiency: "Beginner", category: "Databases", yearsOfExperience: 1 },

  // Cloud & DevOps
  { name: "GitHub Actions", icon: "FaGithub", proficiency: "Beginner", category: "Cloud & DevOps", yearsOfExperience: 1 },
  { name: "Docker", icon: "SiDocker", proficiency: "Beginner", category: "Cloud & DevOps", yearsOfExperience: 1 },
  { name: "Vercel", icon: "SiVercel", proficiency: "Intermediate", category: "Cloud & DevOps", yearsOfExperience: 1 },
  { name: "Netlify", icon: "SiNetlify", proficiency: "Intermediate", category: "Cloud & DevOps", yearsOfExperience: 1 },
  { name: "Render", icon: "SiRender", proficiency: "Beginner", category: "Cloud & DevOps", yearsOfExperience: 1 },

  // AI / Machine Learning
  { name: "Generative AI", icon: "SiOllama", proficiency: "Advanced", category: "AI / Machine Learning", relatedProjects: ["AI Software Engineering Studio"], yearsOfExperience: 1 },
  { name: "Prompt Engineering", icon: "SiOllama", proficiency: "Advanced", category: "AI / Machine Learning", yearsOfExperience: 1 },
  { name: "Large Language Models", icon: "SiOllama", proficiency: "Advanced", category: "AI / Machine Learning", relatedProjects: ["AI Software Engineering Studio"], yearsOfExperience: 1 },
  { name: "Computer Vision", icon: "SiOpencv", proficiency: "Intermediate", category: "AI / Machine Learning", relatedProjects: ["AI Adaptive Learning Platform", "Driver Drowsiness Detection"], yearsOfExperience: 1 },
  { name: "NLP", icon: "SiHuggingface", proficiency: "Intermediate", category: "AI / Machine Learning", yearsOfExperience: 1 },
  { name: "Deep Learning", icon: "SiTensorflow", proficiency: "Intermediate", category: "AI / Machine Learning", relatedProjects: ["AI Adaptive Learning Platform"], yearsOfExperience: 1 },
  { name: "Model Deployment", icon: "SiVercel", proficiency: "Intermediate", category: "AI / Machine Learning", yearsOfExperience: 1 },
  { name: "AI Agent Systems", icon: "SiOllama", proficiency: "Intermediate", category: "AI / Machine Learning", relatedProjects: ["AI Software Engineering Studio"], yearsOfExperience: 1 },
  { name: "RAG", icon: "SiOllama", proficiency: "Beginner", category: "AI / Machine Learning", yearsOfExperience: 1 },

  // IoT & Embedded Systems
  { name: "ESP32", icon: "SiEspressif", proficiency: "Advanced", category: "IoT & Embedded Systems", relatedProjects: ["FECS"], yearsOfExperience: 2 },
  { name: "Arduino", icon: "SiArduino", proficiency: "Intermediate", category: "IoT & Embedded Systems", yearsOfExperience: 2 },
  { name: "MQTT", icon: "SiMqtt", proficiency: "Advanced", category: "IoT & Embedded Systems", relatedProjects: ["FECS"], yearsOfExperience: 1 },
  { name: "LoRa (SX1278)", icon: "SiSemtech", proficiency: "Advanced", category: "IoT & Embedded Systems", relatedProjects: ["FECS"], yearsOfExperience: 1 },
  { name: "GPS (NEO-6M)", icon: "SiGps", proficiency: "Intermediate", category: "IoT & Embedded Systems", relatedProjects: ["FECS"], yearsOfExperience: 1 },
  { name: "Embedded Systems", icon: "SiEspressif", proficiency: "Intermediate", category: "IoT & Embedded Systems", yearsOfExperience: 1 },
  { name: "IoT System Design", icon: "SiEspressif", proficiency: "Intermediate", category: "IoT & Embedded Systems", relatedProjects: ["FECS"], yearsOfExperience: 1 },
  { name: "Sensor Integration", icon: "SiEspressif", proficiency: "Intermediate", category: "IoT & Embedded Systems", relatedProjects: ["FECS", "Driver Drowsiness Detection"], yearsOfExperience: 1 },

  // Design Tools
  { name: "Figma", icon: "SiFigma", proficiency: "Intermediate", category: "Design Tools", yearsOfExperience: 1 },
  { name: "Canva", icon: "SiCanva", proficiency: "Advanced", category: "Design Tools", yearsOfExperience: 2 },
  { name: "Excalidraw", icon: "SiExcalidraw", proficiency: "Intermediate", category: "Design Tools", yearsOfExperience: 1 },

  // Version Control & Tools
  { name: "Git", icon: "FaGitAlt", proficiency: "Advanced", category: "Version Control & Tools", yearsOfExperience: 3 },
  { name: "GitHub", icon: "FaGithub", proficiency: "Advanced", category: "Version Control & Tools", yearsOfExperience: 3 },
  { name: "VS Code", icon: "SiVisualstudiocode", proficiency: "Advanced", category: "Version Control & Tools", yearsOfExperience: 3 },
  { name: "Postman", icon: "SiPostman", proficiency: "Intermediate", category: "Version Control & Tools", yearsOfExperience: 2 },
  { name: "GitHub Copilot", icon: "FaGithub", proficiency: "Intermediate", category: "Version Control & Tools", yearsOfExperience: 1 },
  { name: "Ollama", icon: "SiOllama", proficiency: "Intermediate", category: "Version Control & Tools", relatedProjects: ["AI Software Engineering Studio"], yearsOfExperience: 1 },
  { name: "npm", icon: "FaNpm", proficiency: "Intermediate", category: "Version Control & Tools", yearsOfExperience: 2 },

  // Operating Systems
  { name: "Windows", icon: "SiWindows", proficiency: "Advanced", category: "Operating Systems", yearsOfExperience: 5 },
  { name: "Linux (Ubuntu)", icon: "SiLinux", proficiency: "Intermediate", category: "Operating Systems", yearsOfExperience: 2 },

  // Other Technologies
  { name: "REST APIs", icon: "SiRestapi", proficiency: "Advanced", category: "Other Technologies", relatedProjects: ["AI Software Engineering Studio", "FECS"], yearsOfExperience: 2 },
  { name: "JSON", icon: "SiJson", proficiency: "Advanced", category: "Other Technologies", yearsOfExperience: 3 },
  { name: "Responsive Web Design", icon: "SiResponsivedesign", proficiency: "Intermediate", category: "Other Technologies", yearsOfExperience: 2 },
  { name: "OOP", icon: "SiOop", proficiency: "Advanced", category: "Other Technologies", yearsOfExperience: 3 },
  { name: "DSA", icon: "SiDsa", proficiency: "Intermediate", category: "Other Technologies", yearsOfExperience: 2 },
  { name: "Software Architecture", icon: "SiSoftwarearchitecture", proficiency: "Intermediate", category: "Other Technologies", relatedProjects: ["AI Software Engineering Studio"], yearsOfExperience: 1 },
  { name: "System Design", icon: "SiSystemdesign", proficiency: "Beginner", category: "Other Technologies", yearsOfExperience: 1 },
  { name: "Agile Development", icon: "SiAgile", proficiency: "Intermediate", category: "Other Technologies", yearsOfExperience: 1 },
  { name: "Problem Solving", icon: "SiProblemsolving", proficiency: "Advanced", category: "Other Technologies", yearsOfExperience: 3 },
  { name: "Technical Documentation", icon: "SiDocumentation", proficiency: "Advanced", category: "Other Technologies", yearsOfExperience: 2 },
];