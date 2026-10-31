import React from "react";

export interface TechItem {
  name: string;
  icon: React.ReactNode;
}

// Row 1 Technologies - Matching reference image starting sequence
export const ROW1_TECHS: TechItem[] = [
  {
    name: "PostgreSQL",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v10c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 11c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" />
        <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 13h6" />
        <path d="M12 13v6" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M10 13c-.6 0-1 .4-1 1v.5c0 .5-.4.9-1 .9.6 0 1 .4 1 .9v.5c0 .6.4 1 1 1" />
        <path d="M14 13c.6 0 1 .4 1 1v.5c0 .5.4.9 1 .9-.6 0-1 .4-1 .9v.5c0 .6-.4 1-1 1" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="8" x="2" y="3" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="13" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="7" y2="7" />
        <line x1="6" x2="6.01" y1="17" y2="17" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2Z" />
        <path d="M12 12v8" />
        <path d="M12 12 4 7.5" />
        <path d="M12 12l8-4.5" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 9H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v2" />
        <circle cx="9" cy="5" r="0.75" fill="currentColor" />
        <path d="M12 15h5a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-2" />
        <circle cx="15" cy="19" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Go",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h7" />
        <path d="M3 8h9" />
        <path d="M3 16h5" />
        <path d="M17 8a4 4 0 1 0 4 4v-1h-4" />
      </svg>
    ),
  },
  {
    name: "Redis",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 22 7 12 12 2 7 12 2" />
        <polygon points="12 8 22 13 12 18 2 13 12 8" />
        <polygon points="12 14 22 19 12 24 2 19 12 14" />
      </svg>
    ),
  },
  {
    name: "Apache Kafka",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="7" r="2" />
        <circle cx="4" cy="17" r="2" />
        <circle cx="20" cy="7" r="2" />
        <circle cx="20" cy="17" r="2" />
        <line x1="6" y1="8" x2="9.5" y2="10.5" />
        <line x1="6" y1="16" x2="9.5" y2="13.5" />
        <line x1="18" y1="8" x2="14.5" y2="10.5" />
        <line x1="18" y1="16" x2="14.5" y2="13.5" />
      </svg>
    ),
  },
  {
    name: "Vue.js",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h4l6 10 6-10h4L12 21 2 3z" />
        <path d="M7 3h3.5L12 6.5 13.5 3H17L12 12 7 3z" />
      </svg>
    ),
  },
];

// Row 2 Technologies - Matching reference image starting sequence
export const ROW2_TECHS: TechItem[] = [
  {
    name: "GraphQL",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 20.66 7 20.66 17 12 22 3.34 17 3.34 7" />
        <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1.2" opacity="0.6" />
        <line x1="3.34" y1="7" x2="20.66" y2="17" strokeWidth="1.2" opacity="0.6" />
        <line x1="3.34" y1="17" x2="20.66" y2="7" strokeWidth="1.2" opacity="0.6" />
        <circle cx="12" cy="2" r="1.5" fill="currentColor" />
        <circle cx="20.66" cy="7" r="1.5" fill="currentColor" />
        <circle cx="20.66" cy="17" r="1.5" fill="currentColor" />
        <circle cx="12" cy="22" r="1.5" fill="currentColor" />
        <circle cx="3.34" cy="17" r="1.5" fill="currentColor" />
        <circle cx="3.34" cy="7" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m14 12 4-4 3 3-4 4Z" />
        <path d="M18 8 9 17l-5 1 1-5 9-9Z" />
        <path d="m9 17 2 2" />
      </svg>
    ),
  },
  {
    name: "Sass",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14h16c0 3.5-3 6-8 6s-8-2.5-8-6Z" />
        <rect x="5" y="10" width="3" height="3" rx="0.5" />
        <rect x="9" y="10" width="3" height="3" rx="0.5" />
        <rect x="13" y="10" width="3" height="3" rx="0.5" />
        <rect x="9" y="6" width="3" height="3" rx="0.5" />
        <path d="M20 14c.5-1 1.5-1.5 2.5-1.5" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="21" />
        <line x1="3" y1="12" x2="9" y2="12" />
        <line x1="15" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 18a4 4 0 0 1-1.5-7.7A6 6 0 0 1 16 8a5 5 0 0 1 4 5 3.5 3.5 0 0 1-2 6.5H6z" />
      </svg>
    ),
  },
  {
    name: "Terraform",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="2 3 8 6.5 8 13.5 2 10" />
        <polygon points="9 7 15 10.5 15 17.5 9 14" />
        <polygon points="16 3 22 6.5 22 13.5 16 10" />
        <polygon points="9 15 15 18.5 15 22 9 18.5" />
      </svg>
    ),
  },
  {
    name: "PyTorch",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.5 2.5a6 6 0 0 0-4.5 10l-3 3a1.5 1.5 0 0 0 2 2l3-3a6 6 0 1 0 2.5-12Z" />
        <circle cx="16" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Flutter",
    icon: (
      <svg
        className="h-6 w-6 text-slate-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 3 4 13l3.5 3.5L20 4z" />
        <path d="M14 13l-4 4 4 4h6l-6-6 6-6z" />
      </svg>
    ),
  },
];

