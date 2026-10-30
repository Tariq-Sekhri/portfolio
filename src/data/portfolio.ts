export interface Project {
  name: string;
  description: string;
  url: string;
  tech: string[];
  demoUrl?: string;
  demoLabel?: string;
  images?: { src: string; alt: string }[];
  portraitImages?: boolean;
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
  featuredProjects: Project[];
  moreProjectsUrl: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: ContactLink[];
}

export const portfolio: PortfolioData = {
  name: "Tariq Sekhri",
  resumeUrl: "/portfolio/Tariq-Sekhri-Resume.pdf",

  featuredProjects: [
    {
      name: "Bramble",
      images: [
        { src: "projects/bramble-interface.png", alt: "Optimization desktop interface" },
        { src: "projects/bramble-new-run-bodies.png", alt: "New run: assign bodies" },
        { src: "projects/bramble-new-run-loads.png", alt: "New run: material and load cases" },
        { src: "projects/bramble-new-run-settings.png", alt: "New run: run settings" },
        { src: "projects/bramble-new-run-check.png", alt: "New run: pre-flight check" },
        { src: "projects/bramble-comparison.png", alt: "Topology optimization comparison" },
      ],
      description:
        "Collaborative engineering project for 2D and 3D topology optimization: finding stiff structures within a design envelope using less material. An Electron desktop client supports authoring, monitoring, and comparing optimization runs, with interactive 3D visualization and a Python computation service.",
      url: "https://github.com/Studio-DA/Bramble",
      tech: ["Electron", "React", "TypeScript", "Three.js", "Python", "FastAPI", "NumPy", "SciPy"],
    },
    {
      name: "Personal Media Server",
      images: [
        { src: "projects/tms-library.png", alt: "Movies and TV library" },
        { src: "projects/tms-discover.png", alt: "Discovery catalog" },
        { src: "projects/tms-seasons.png", alt: "Season browsing" },
        { src: "projects/tms-episodes.png", alt: "Episode browser" },
        { src: "projects/tms-music.png", alt: "Music library" },
      ],
      description:
        "Private multi-user media platform with library permissions, device-session controls, audit logs, and private playlists and tags. Supports permission- and quota-checked web-video and magnet ingestion with live progress, plus FFmpeg HLS playback with subtitles and resume.",
      url: "https://github.com/Tariq-Sekhri/Tariq-Media-Server",
      tech: ["React", "TypeScript", "Rust", "Axum", "FFmpeg", "HLS"],
    },
    {
      name: "Time Tracker",
      images: [
        { src: "projects/time-tracker-demo-calendar.png", alt: "Calendar (demo)" },
        { src: "projects/time-tracker-demo-daily-average.png", alt: "Daily Avg (demo)" },
        { src: "projects/time-tracker-demo-total.png", alt: "Total (demo)" },
        { src: "projects/time-tracker-demo-trends.png", alt: "Trend (demo)" },
        { src: "projects/time-tracker-demo-settings.png", alt: "Settings (demo)" },
        { src: "projects/time-tracker-demo-google-calendars.png", alt: "Google Calendars (demo)" },
        { src: "projects/time-tracker-demo-sync.png", alt: "Sync (demo)" },
        { src: "projects/time-tracker-demo-regex.png", alt: "Regex (demo)" },
        { src: "projects/time-tracker-demo-categories.png", alt: "Categories (demo)" },
        { src: "projects/time-tracker-demo-app-groups.png", alt: "App Groups (demo)" },
        { src: "projects/time-tracker-demo-skipped-apps.png", alt: "Skipped Apps (demo)" },
      ],
      description:
        "Tauri/Rust desktop app that tracks active app and window usage, with calendar, donut, and trend views, tray controls, and privacy filters. Adds Android usage tracking and Rust/Axum sync with device approval and revocation, with desktop and Google Play closed-test betas shipped.",
      url: "https://github.com/Tariq-Sekhri/time_tracker",
      tech: ["Tauri 2", "Rust", "React", "Kotlin", "Axum", "SQLite"],
      demoUrl: "https://www.youtube.com/watch?v=4JMSmt3tppc",
      demoLabel: "Product demo video",
    },
    {
      name: "AlarmPro",
      images: [
        { src: "projects/alarmpro.png", alt: "Alarms" },
        { src: "projects/alarmpro-timers.png", alt: "Countdown timers" },
        { src: "projects/alarmpro-completed-timer.png", alt: "Completed timer" },
        { src: "projects/alarmpro-ringing.png", alt: "Full-screen timer alert" },
        { src: "projects/alarmpro-clock.png", alt: "Clock" },
        { src: "projects/alarmpro-stopwatch.png", alt: "Stopwatch and laps" },
      ],
      portraitImages: true,
      description:
        "Android alarm app with exact scheduling, full-screen ringing, boot recovery, alarm groups, and configurable snooze and vibration. Includes independent multi-stopwatches with laps, alerts, live notifications, and session-specific notification actions.",
      url: "https://github.com/Tariq-Sekhri/Alarmpro",
      tech: ["Kotlin", "Jetpack Compose", "Android", "AlarmManager"],
    },
    {
      name: "TikTok Archiver",
      images: [
        { src: "projects/tiktok-archiver-demo-library.png", alt: "Video library (demo)" },
        { src: "projects/tiktok-archiver-demo-creators.png", alt: "Tracked creators (demo)" },
        { src: "projects/tiktok-archiver-demo-schedules.png", alt: "Check schedules (demo)" },
        { src: "projects/tiktok-archiver-demo-failed.png", alt: "Failed downloads (demo)" },
        { src: "projects/tiktok-archiver-demo-discord.png", alt: "Discord forwarding (demo)" },
        { src: "projects/tiktok-archiver-demo-settings.png", alt: "Settings (demo)" },
        { src: "projects/tiktok-archiver-demo-todo.png", alt: "Notes (demo)" },
      ],
      description:
        "Windows desktop app that watches TikTok creators and archives their new videos and favorites using browser cookies and yt-dlp. A React UI adds a searchable library with a built-in player, per-creator check schedules, Discord forwarding, and tray and startup controls, backed by SQLite state with bounded retries and diagnostics.",
      url: "https://github.com/Tariq-Sekhri/Tiktok-Archiver",
      tech: ["Tauri 2", "Rust", "React", "TypeScript", "SQLite", "yt-dlp"],
    },
    {
      name: "GroceryPro",
      images: [
        { src: "projects/grocerypro-profiles.png", alt: "Family profile picker" },
        { src: "projects/grocerypro-stores.png", alt: "Store list" },
        { src: "projects/grocerypro-list.png", alt: "Shopping list" },
        { src: "projects/grocerypro-filters.png", alt: "List filtered by buyer" },
        { src: "projects/grocerypro-catalog.png", alt: "Store catalog with favourites" },
        { src: "projects/grocerypro-edit-entry.png", alt: "Edit list entry" },
        { src: "projects/grocerypro-history.png", alt: "Past trips" },
        { src: "projects/grocerypro-trip-details.png", alt: "Trip price breakdown" },
      ],
      portraitImages: true,
      description:
        "Shared grocery and shopping-list app for web and Android. Supports family profiles, store catalogs, personal favorites, buyer and aisle filters, and trip history with price estimates. Live updates keep shopping lists and catalogs synchronized across clients.",
      url: "https://github.com/Tariq-Sekhri/grocerypro",
      tech: ["React", "TypeScript", "Capacitor", "Express.js", "Prisma", "MySQL", "Socket.IO"],
    },
  ],

  moreProjectsUrl: "https://github.com/Tariq-Sekhri?tab=repositories",

  experience: [
    {
      role: "Full Stack Software Developer",
      company: "Studio DA",
      period: "Sep 2026 – Present",
      bullets: [
        "Develop Bramble, a topology optimization desktop application, across a React/TypeScript/Electron client and Python/FastAPI backend.",
        "Build guided run setup, material profiles, interactive 3D force controls, iteration playback, and design comparison tools.",
        "Implement checkpointing, pause/resume, crash recovery, and reliable Windows cancellation for long-running optimization jobs.",
        "Add portable run import/export and automated tests covering result integrity and resumed runs against uninterrupted execution.",
      ],
    },
    {
      role: "Senior Coding Instructor",
      company: "Code Ninjas",
      period: "Mar 2022 – Present",
      bullets: [
        "Teach Scratch, MakeCode Arcade, JavaScript, and Unity to students in instructor-led coding classes.",
        "Support classes of up to 20 students by explaining programming concepts, debugging projects, and adapting instruction to individual learning needs.",
      ],
    },
  ],

  education: [
    {
      school: "Sheridan College",
      degree: "Diploma, Computer Programming",
      period: "Completed Aug 2025",
    },
  ],

  contact: [
    { label: "Email", href: "mailto:TariqSekhri@gmail.com" },
    { label: "GitHub", href: "https://github.com/Tariq-Sekhri" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tariq-sekhri-b69098232" },
  ],
};
