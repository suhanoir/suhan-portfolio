export interface Project {
  id: string;
  questNumber: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  coreHighlights: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  badgeText: string;
  accentColor: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface AcademicRecord {
  stage: string;
  score: string;
  detail: string;
  status: 'completed' | 'in-progress';
}

export interface Achievement {
  id: string;
  code: string;
  title: string;
  badge: string;
  category: string;
  date: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Suhan Raj M",
  role: "Full Stack Developer",
  status: "Computer Science Student",
  degree: "B.Tech in Computer Science & Engineering",
  graduationYear: 2029,
  currentLvl: "LVL 02",
  tagline: "Building clean, functional, and modern web applications with a focus on polished user experiences and robust architectures.",
  bio: "I am a Computer Science student and Full Stack Developer passionate about crafting purposeful web products. From architecting responsive frontend interfaces in React and Next.js to implementing secure backends with JWT authentication and Prisma ORM, I enjoy turning practical ideas into live, accessible tools.",
  target: "Internships & Campus Placements",
  email: "65suhanraj@gmail.com",
  github: "https://github.com/suhanoir",
  linkedin: "https://www.linkedin.com/in/suhanoirr/",
  location: "India"
};

export const ACADEMIC_RECORDS: AcademicRecord[] = [
  {
    stage: "SEM 01",
    score: "9.5 CGPA",
    detail: "B.Tech Computer Science Engineering",
    status: "completed"
  },
  {
    stage: "SEM 02",
    score: "9.0 CGPA",
    detail: "B.Tech Computer Science Engineering",
    status: "completed"
  },
  {
    stage: "12TH GRADE",
    score: "86%",
    detail: "Senior Secondary Board Examination",
    status: "completed"
  },
  {
    stage: "10TH GRADE",
    score: "92%",
    detail: "Secondary School Examination",
    status: "completed"
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "daydream",
    questNumber: "QUEST 01",
    title: "Daydream",
    subtitle: "Production-Quality Full-Stack Personal Life Hub",
    category: "Full Stack Web Application",
    description: "A production-grade, responsive Full-Stack web application uniting lifelong aspirations, calendar planning, daily task execution, and monthly expense tracking into a single cohesive personal hub. Designed with a calm, minimal, and warm aesthetic.",
    badgeText: "PRODUCTION LIVE",
    accentColor: "#2563EB",
    stats: [
      { label: "Core Modules", value: "4 Hubs" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Auth", value: "HttpOnly JWT" },
      { label: "Currency", value: "INR (₹)" }
    ],
    coreHighlights: [
      "BucketList: Long-term aspirational goals with custom categories, milestone reflection journals, and celebration confetti.",
      "Calendar: Comprehensive event scheduling with Month Grid, Week View, Agenda View, and linked milestone targets.",
      "Daily To-Do List: Strict date-isolated task execution, priorities, category tags, and daily completion celebrations.",
      "Expense Tracker: Detailed monthly expenditure monitoring in Indian Rupees (₹) with categorical breakdowns and budget stats.",
      "Security: Password hashing with bcryptjs (10 rounds), stateless HttpOnly JWT session cookies, and strict server-side userId scoping."
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Jose JWT",
      "Bcrypt.js",
      "Canvas Confetti",
      "Lucide React"
    ],
    liveUrl: "https://bucket-list-app-two.vercel.app",
    githubUrl: "https://github.com/suhanoir/day-dream-app"
  },
  {
    id: "skillquest",
    questNumber: "QUEST 02",
    title: "SkillQuest",
    subtitle: "Full-Stack AI Learning RPG Quest Chain Generator",
    category: "Generative AI Web Application",
    description: "An interactive educational RPG platform that transforms any topic or skill into a structured 4-zone quest chain powered by Google Gemini AI. Users complete educational milestones, tackle boss challenges, earn dynamic XP, and unlock learning zones.",
    badgeText: "AI POWERED",
    accentColor: "#14B8A6",
    stats: [
      { label: "AI Engine", value: "Gemini 2.5" },
      { label: "RPG Zones", value: "4 Themed" },
      { label: "Database", value: "Prisma / SQLite" },
      { label: "Progression", value: "Dynamic XP" }
    ],
    coreHighlights: [
      "AI Quest Map Generation: Leverages Google Gemini AI (@google/genai) to architect tailored 4-zone roadmaps for any topic (React, Python, Machine Learning, etc.).",
      "Themed Progression Zones: Village of Fundamentals 🏡, Forest of Practical Application 🌲, Mountain of Advanced Mastery ⛰️, Citadel of the Grandmaster 🏰.",
      "Verified Educational Loot: Curates authoritative documentation, interactive tutorials, and video learning guides per objective.",
      "Dynamic XP & Leveling: Real-time XP banking, progress recalculation, level-up celebration modals, and milestone confetti.",
      "Full-Stack Foundation: Built with Next.js App Router, bcryptjs password protection, and SQLite persistence via Prisma ORM."
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Google Gemini AI",
      "Google GenAI SDK",
      "Prisma ORM",
      "SQLite",
      "Jose JWT",
      "Bcrypt.js",
      "Canvas Confetti"
    ],
    liveUrl: "https://skill-quest-sigma.vercel.app",
    githubUrl: "https://github.com/suhanoir/SkillQuest"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    code: "ACH_01",
    title: "Production Deployments",
    badge: "2 LIVE APPS",
    category: "Web Development",
    date: "2026",
    description: "Architected, developed, and deployed two full-featured web applications (Daydream & SkillQuest) live into production on Vercel."
  },
  {
    id: "ach-2",
    code: "ACH_02",
    title: "Academic Honor Roll",
    badge: "9.5 & 9.0 CGPA",
    category: "Academics",
    date: "2025 - 2026",
    description: "Maintained a high academic record with 9.5 CGPA in Semester 1 and 9.0 CGPA in Semester 2 of Computer Science & Engineering coursework."
  },
  {
    id: "ach-3",
    code: "ACH_03",
    title: "Full-Stack Security & ORM",
    badge: "JWT + PRISMA",
    category: "Architecture",
    date: "2026",
    description: "Engineered secure backend authentication pipelines with bcryptjs password hashing and HttpOnly JWT cookies across PostgreSQL and SQLite."
  },
  {
    id: "ach-4",
    code: "ACH_04",
    title: "GenAI Workflow Integration",
    badge: "GEMINI 2.5",
    category: "Artificial Intelligence",
    date: "2026",
    description: "Integrated Google Gemini AI via the official Google GenAI SDK to autonomously synthesize structured 4-zone educational quest chains."
  },
  {
    id: "ach-5",
    code: "ACH_05",
    title: "Strong Foundations",
    badge: "92% & 86%",
    category: "Academics",
    date: "Foundation",
    description: "Demonstrated consistent problem-solving dedication with 92% in 10th grade and 86% in 12th grade examinations."
  }
];
