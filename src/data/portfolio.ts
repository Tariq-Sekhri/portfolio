export interface Project {
  name: string;
  description: string;
  url?: string;
  tech: string[];
  details: string[];
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
        "Helps engineers explore strong, lightweight structures and compare designs before committing to a build.",
      details: ["Guided setup with material profiles and interactive 3D force controls.", "Python computation service with iteration playback and design comparison.", "Checkpointing, pause/resume, crash recovery, and portable run files."],
      tech: ["Electron", "React", "TypeScript", "Three.js", "Python", "FastAPI", "NumPy", "SciPy"],
    },
    {
      name: "Personal Media Server",
      images: [
        { src: "projects/tms-library.png", alt: "Movies and TV library (demo)" },
        { src: "projects/tms-discover.png", alt: "Discovery catalog (demo)" },
        { src: "projects/tms-title-details.png", alt: "Series details and season requests (demo)" },
        { src: "projects/tms-player.png", alt: "Video player and playback controls (demo)" },
        { src: "projects/tms-music.png", alt: "Music library (demo)" },
        { src: "projects/tms-library-management.png", alt: "Library settings and access permissions (demo)" },
        { src: "projects/tms-users.png", alt: "User management and storage quotas (demo)" },
        { src: "projects/tms-playback-settings.png", alt: "Per-library playback settings (demo)" },
        { src: "projects/tms-devices.png", alt: "Signed-in device management (demo)" },
      ],
      description:
        "A private place to organize, discover, and stream movies, TV, and music across devices.",
      details: ["FFmpeg streaming with subtitles and playback resume.", "User permissions, device controls, and private playlists.", "Download queues with quotas and live progress."],
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
        "Shows where your time goes across desktop and Android, with privacy controls and a clear daily timeline.",
      details: ["Native app and window tracking with local SQLite storage.", "Calendar, category breakdowns, and usage trends.", "Device approval and revocation for sync; desktop and Android betas shipped."],
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
        "Keeps alarms, timers, and multiple stopwatches together in one Android app.",
      details: ["Exact alarm scheduling, full-screen alerts, and reboot recovery.", "Alarm groups with configurable snooze and vibration.", "Independent stopwatches with laps and notification controls."],
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
        "Automatically saves videos from followed TikTok creators into a searchable personal library.",
      details: ["Scheduled creator checks and downloads through yt-dlp.", "Built-in playback, search, and optional Discord forwarding.", "SQLite state, bounded retries, and download diagnostics."],
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
        "Keeps the family shopping list in sync, from planning a trip to checking prices and past purchases.",
      details: ["Live list and catalog updates through Socket.IO.", "Family profiles, store catalogs, favorites, and buyer/aisle filters.", "Trip history and price estimates across web and Android."],
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
        "Develop Bramble across its Electron/React desktop client and Python/FastAPI backend, connecting engineering inputs, optimization jobs, and visual results in one application.",
        "Build guided run setup, material profiles, and interactive 3D force controls so engineers can define a design problem visually; add iteration playback and comparisons to inspect how designs evolve.",
        "Implement checkpointing, pause/resume, crash recovery, and Windows cancellation so long-running jobs can be interrupted and recovered without starting over.",
        "Add portable run import/export so work can move between machines, and automated integrity checks that compare resumed jobs with uninterrupted runs.",
      ],
    },
    {
      role: "Senior Coding Instructor",
      company: "Code Ninjas",
      period: "Mar 2022 – Present",
      bullets: [
        "Teach Scratch, MakeCode Arcade, JavaScript, and Unity, breaking programming concepts into practical steps students can apply to their own games and projects.",
        "Support classes of up to 20 students with individual debugging and adapted explanations, helping learners work through errors and understand how to fix their code.",
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
