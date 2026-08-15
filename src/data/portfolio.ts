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
  resumeUrl: string;
  skills: Record<string, string[]>;
  featuredProjects: Project[];
  moreProjectsUrl: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: ContactLink[];
}

export const portfolio: PortfolioData = {
  name: "Tariq Sekhri",
  resumeUrl: "/portfolio/Tariq-Sekhri-Resume.pdf",

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
      name: "Personal Media Server",
      description:
        "Personal media server and player. Local-only library with a React frontend and Rust backend that indexes and streams media, with playlists, tags, playback queue, and installable web/Android clients.",
      url: "https://github.com/Tariq-Sekhri/Tariq-Media-Server",
      tech: ["React", "TypeScript", "Rust", "Capacitor", "Tailwind CSS"],
    },
    {
      name: "Time Tracker",
      description:
        "Private, automatic desktop time tracking for Windows and Linux (Ubuntu 24.04.4 Desktop). Monitors foreground window usage, stores data locally in SQLite, and supports regex-based app categorization and skipped apps. 100% local, no cloud, no telemetry.",
      url: "https://github.com/Tariq-Sekhri/time_tracker",
      tech: ["Tauri", "Rust", "React", "TypeScript", "Tailwind CSS", "SQLite"],
      demoUrl: "https://www.youtube.com/watch?v=4JMSmt3tppc",
      demoLabel: "Product demo video",
    },
    {
      name: "Alarmpro",
      description:
        "Open-source Android alarm clock with alarms, timers, stopwatch, and world clock. Supports repeating schedules, alarm groups, bulk actions, and a full-screen ringing UI over the lock screen.",
      url: "https://github.com/Tariq-Sekhri/Alarmpro",
      tech: ["Kotlin", "Jetpack Compose", "Material 3", "AlarmManager"],
    },
    {
      name: "TikTok Archiver",
      description:
        "Minimal TikTok account watcher and downloader written in Rust. Watches configured accounts, keeps JSON state of seen videos, and downloads missing videos via yt-dlp. Uses headless Chrome for login/cookies and logs activity to a JSON log file.",
      url: "https://github.com/Tariq-Sekhri/Tiktok-Archiver",
      tech: ["Rust", "yt-dlp", "Headless Chrome", "YAML"],
      demoUrl: "https://www.youtube.com/watch?v=3Ewcy7WfzaA",
      demoLabel: "TikTok setup video",
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
