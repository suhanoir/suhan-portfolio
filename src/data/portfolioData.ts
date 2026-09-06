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
  objectives: {
    title: string;
    detail: string;
  }[];
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'programming' | 'tools';
  level: number; // 1 to 5
  description: string;
  highlightIn: string[]; // e.g. ["Daydream", "SkillQuest"]
  iconName: string;
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
    objectives: [
      {
        title: "Full-Stack Next.js 15 & React 19 Architecture",
        detail: "Implemented Next.js App Router with server route handlers, dynamic server components, and responsive mobile layouts."
      },
      {
        title: "PostgreSQL & Prisma ORM Schema",
        detail: "Designed relational models for Users, Goals, Events, Daily Todos, and Expenses hosted on Neon Serverless."
      },
      {
        title: "Secure Session Management",
        detail: "Protected API routes with Jose-based JWT token generation and cookie-based stateless authorization."
      },
      {
        title: "Micro-Interactions & Feedback",
        detail: "Integrated Canvas Confetti for goal celebrations, responsive drawers for mobile screens, and real-time expense aggregations."
      }
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
    objectives: [
      {
        title: "Google GenAI SDK Integration",
        detail: "Configured Google Gemini 2.5 Flash with procedural prompt templates for structured educational breakdowns."
      },
      {
        title: "Interactive RPG Node Graph",
        detail: "Created undulating quest paths with responsive node states (Locked 🔒, Available ⚔️, and Completed ✅)."
      },
      {
        title: "Stateful Progress Tracking",
        detail: "Modeled LearningJourneys and QuestProgress relations with atomic XP incrementation upon quest verification."
      },
      {
        title: "End-to-End Verification Suite",
        detail: "Authored comprehensive verification scripts testing user isolation, zone unlock triggers, and session persistence."
      }
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

export const SKILL_TREE_CATEGORIES = [
  { id: "frontend", name: "Frontend Core", color: "#2563EB" },
  { id: "backend", name: "Backend & Auth", color: "#14B8A6" },
  { id: "database", name: "Database & ORM", color: "#F59E0B" },
  { id: "ai", name: "AI Integration", color: "#8B5CF6" },
  { id: "programming", name: "Languages & CS", color: "#0F172A" },
  { id: "tools", name: "Dev Tools", color: "#64748B" }
];

export const SKILL_NODES: SkillNode[] = [
  // Frontend
  {
    id: "react",
    name: "React 19",
    category: "frontend",
    level: 4,
    description: "Component lifecycle, modern hooks, state management, and optimized rendering.",
    highlightIn: ["Daydream", "SkillQuest"],
    iconName: "Code2"
  },
  {
    id: "nextjs",
    name: "Next.js 15",
    category: "frontend",
    level: 4,
    description: "App Router, Server Components, Route Handlers, middleware, and dynamic layouts.",
    highlightIn: ["Daydream", "SkillQuest"],
    iconName: "Globe"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    level: 4,
    description: "Strict static typing, interfaces, generic utility types, and API payload modeling.",
    highlightIn: ["Daydream", "SkillQuest"],
    iconName: "FileCode2"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    level: 5,
    description: "Responsive utility-first layouts, modern CSS variables, animations, and micro-interactions.",
    highlightIn: ["Daydream", "SkillQuest"],
    iconName: "Palette"
  },
  {
    id: "htmlcss",
    name: "HTML5 & Modern CSS",
    category: "frontend",
    level: 5,
    description: "Semantic web architecture, accessible markup, flexbox, grid, and CSS custom properties.",
    highlightIn: ["Daydream", "SkillQuest", "my-first-website"],
    iconName: "Layout"
  },

  // Backend
  {
    id: "node",
    name: "Node.js",
    category: "backend",
    level: 4,
    description: "JavaScript/TypeScript runtime execution, async I/O handling, and npm ecosystems.",
    highlightIn: ["Daydream", "SkillQuest"],
    iconName: "Server"
  },
  {
    id: "route-handlers",
    name: "Next.js API Handlers",
    category: "backend",
    level: 4,
    description: "RESTful endpoints, request parsing, JSON response handling, and error middleware.",
    highlightIn: ["Daydream", "SkillQuest"],
    iconName: "Cpu"
  },
  {
    id: "jwt-auth",
    name: "JWT & Bcrypt Security",
    category: "backend",
    level: 4,
    description: "Stateless authentication with Jose JWT, salted password hashing, and HttpOnly session cookies.",
    highlightIn: ["Daydream", "SkillQuest"],
    iconName: "ShieldCheck"
  },

  // Database
  {
    id: "prisma",
    name: "Prisma ORM",
    category: "database",
    level: 4,
    description: "Declarative schema modeling, automated client generation, migrations, and typed queries.",
    highlightIn: ["Daydream", "SkillQuest"],
    iconName: "Layers"
  },
  {
    id: "postgres",
    name: "PostgreSQL (Neon)",
    category: "database",
    level: 4,
    description: "Relational database schema design, foreign keys, serverless connection pooling.",
    highlightIn: ["Daydream"],
    iconName: "Database"
  },
  {
    id: "sqlite",
    name: "SQLite",
    category: "database",
    level: 4,
    description: "File-based relational data persistence with zero-friction development setup.",
    highlightIn: ["SkillQuest"],
    iconName: "HardDrive"
  },

  // AI
  {
    id: "gemini",
    name: "Google Gemini AI",
    category: "ai",
    level: 4,
    description: "Prompt engineering, structured schema generation with Google GenAI SDK (@google/genai).",
    highlightIn: ["SkillQuest"],
    iconName: "Sparkles"
  },

  // Languages & CS
  {
    id: "java",
    name: "Java",
    category: "programming",
    level: 4,
    description: "Object-oriented programming, classes, interfaces, inheritance, and algorithmic problem solving.",
    highlightIn: ["Codes", "AU_java"],
    iconName: "Terminal"
  },
  {
    id: "discrete-math",
    name: "Discrete Mathematics",
    category: "programming",
    level: 4,
    description: "Logic, set theory, graph theory, combinatorics, and computer science foundations.",
    highlightIn: ["Discrete-Maths-Notes"],
    iconName: "Compass"
  },

  // Tools
  {
    id: "git",
    name: "Git & GitHub",
    category: "tools",
    level: 4,
    description: "Version control, branch management, pull requests, semantic commits, and open-source workflows.",
    highlightIn: ["All Projects"],
    iconName: "GitBranch"
  },
  {
    id: "vercel",
    name: "Vercel CI/CD",
    category: "tools",
    level: 4,
    description: "Continuous deployment pipelines, environment variables configuration, and preview deployments.",
    highlightIn: ["Daydream", "SkillQuest"],
    iconName: "Cloud"
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

