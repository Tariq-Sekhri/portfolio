export interface Project {
  name: string;
  description: string;
  url: string;
  tech: string[];
  demoUrl?: string;
  demoLabel?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface PortfolioData {
  name: string;
  about: string;
  skills: Record<string, string[]>;
  featuredProjects: Project[];
  moreProjectsUrl: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: ContactLink[];
}

export const portfolio: PortfolioData = {
  name: "Tariq Sekhri",
  about:
    "Computer Programming graduate from Sheridan College with experience in full-stack development, desktop apps, and teaching. I build cross-platform tools, web apps, and APIs using TypeScript, Rust, Java, and C#. Currently a Code Sensei at Code Ninjas, teaching Scratch, JavaScript, and Unity.",

  skills: {
    Languages: [
      "Java",
      "C",
      "C#",
      "Rust",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "JSON",
      "XML",
      "YAML",
    ],
    Frontend: [
      "HTML",
      "PHP",
      "Thymeleaf",
      "CSS",
      "React",
      "Tailwind CSS",
      "React Native",
      "Angular",
      ".NET MAUI",
    ],
    "Backend & Full-Stack": [".NET", "Spring Boot", "Express.js", "WCF", "Tauri"],
    Databases: ["mySQL", "Oracle", "MongoDB", "ADO.NET", "Entity Framework", "Prisma"],
    "Cloud & DevOps": ["AWS", "Linux/UNIX Admin"],
    "Tools & Workflow": [
      "Figma",
      "Git",
      "GitHub",
      "Jira",
      "Eclipse",
      "Vs Code",
      "Visual Studio",
      "Postman",
    ],
    "Software & Methodologies": ["OOP", "OOD", "Agile", "Scrum"],
  },

  featuredProjects: [
    {
      name: "Time Tracker",
      description:
        "Private, automatic desktop time tracking for Windows, macOS, and Linux. Monitors foreground window usage, stores data locally in SQLite, and supports regex-based app categorization and skipped apps. 100% local, no cloud, no telemetry.",
      url: "https://github.com/Tariq-Sekhri/time_tracker",
      tech: ["Tauri", "Rust", "React", "TypeScript", "Tailwind CSS", "SQLite"],
    },
    {
      name: "Mood Monitor",
      description:
        "Real-time mood tracking app where users choose from 10 mood emojis; one vote per user. Background gradient reflects the most popular mood. Built with Next.js 14, TypeScript, Tailwind, and Redis.",
      url: "https://github.com/Tariq-Sekhri/Mood_Monitor",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Redis"],
    },
    {
      name: "Product CRUD Web & API App",
      description:
        "Full-stack Spring Boot app with user registration, product CRUD via web and REST API, and role-based access control (USER/ADMIN). Uses Spring Security, Thymeleaf, and H2.",
      url: "https://github.com/Tariq-Sekhri/spring-product-crud-demo",
      tech: ["Spring Boot", "Spring Security", "Thymeleaf", "H2", "Maven"],
    },
    {
      name: "Trivia Game",
      description:
        "Windows trivia game with sign-up/login, score tracking, and questions from Open Trivia DB API. WPF UI with Entity Framework and local SQL Server.",
      url: "https://github.com/Tariq-Sekhri/TriviaGame",
      tech: [".NET Framework", "WPF", "Entity Framework", "SQL Server"],
      demoUrl: "https://youtu.be/bIW2UX4PA7U",
      demoLabel: "Watch demo video",
    },
    {
      name: "Event Planner Application",
      description:
        "Angular-based event planner with tabbed views (All, Upcoming, Past), add/edit/delete events, and JSON Server for persistence. Final project for SYST 24444 Mobile Web-Based Application Development.",
      url: "https://github.com/Tariq-Sekhri/Event-Planner-Application",
      tech: ["Angular", "JSON Server", "HTML/CSS"],
    },
  ],

  moreProjectsUrl: "https://github.com/Tariq-Sekhri?tab=repositories",

  experience: [
    {
      role: "Code Sensei",
      company: "Code Ninjas",
      period: "Mar 2022 – Present",
      bullets: [
        "Taught Scratch, MakeCode Arcade, JavaScript, and Unity.",
        "Managed class sizes of up to 20 students.",
        "Assisted students with understanding course material, debugging, and enriching their overall learning experience.",
      ],
    },
  ],

  education: [
    {
      school: "Sheridan College",
      degree: "Diploma, Computer Programming",
      period: "Aug 2025",
    },
  ],

  contact: [
    { label: "Email", href: "mailto:TariqSekhri@gmail.com" },
    { label: "GitHub", href: "https://github.com/Tariq-Sekhri" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tariq-sekhri-b69098232" },
  ],
};
