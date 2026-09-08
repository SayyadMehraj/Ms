import { socials } from "./social";

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
}

export interface ConstructMetadataOptions {
  title?: string;
  useTitleTemplate?: boolean;
  description?: string;
  keywords?: string[];
  image?: string | null;
  path?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  authors?: { name: string; url?: string }[];
  noIndex?: boolean;
}

const githubSocial = socials.find((s) => s.name === "GitHub");

function resolveSiteUrl() {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";

  return `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`;
}

export const SITE_SEO = {
  siteName: "Mehraj Sayyad",
  siteTitle: "Mehraj Sayyad - Software Developer",
  siteUrl: resolveSiteUrl(),
  titleTemplate: "%s | Mehraj Sayyad",
  defaultDescription:
    "Personal portfolio and projects of Mehraj Sayyad — Computer Science and Engineering graduate with a strong foundation in Java, Data Structures and Algorithms, and full-stack development.",
  defaultKeywords: [
    "Mehraj Sayyad",
    "Mehraj Sayyad Portfolio",
    "Java Developer",
    "Full Stack Developer",
    "React Developer",
    "Software Engineer Portfolio",
    "VIT Amaravati",
    "Web Developer India",
  ],
  author: {
    name: "Mehraj Sayyad",
    url: resolveSiteUrl(),
    email: "sayyadmehraj01@gmail.com",
    handle: `@${githubSocial?.handle || "SayyadMehraj"}`,
  },
  creator: "Mehraj Sayyad",
  publisher: "Mehraj Sayyad",
  defaultOgImage: "/images/thumbnail.png",
  socialLinks: socials.map((s) => s.url),
  locale: "en_US",
  themeColor: "#000000",
  robotsDefault: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
} as const;

export const PAGE_SEO: Record<"home" | "projects" | "resume", PageSeoConfig> = {
  home: {
    title: "Mehraj Sayyad - Software Developer",
    description:
      "Welcome to the portfolio of Mehraj Sayyad. Computer Science and Engineering graduate showcasing full-stack projects and technical skills.",
    keywords: [
      "Mehraj Sayyad",
      "Mehraj Sayyad Portfolio",
      "Java Developer",
      "Full Stack Developer",
      "React Developer",
    ],
    path: "/",
    type: "website",
  },
  projects: {
    title: "Projects & Works",
    description:
      "Explore full-stack web applications and machine learning projects built by Mehraj Sayyad.",
    keywords: [
      "Mehraj Sayyad Projects",
      "Full Stack Applications",
      "Java Projects",
      "React Projects",
      "Developer Portfolio",
    ],
    path: "/projects",
    type: "website",
  },
  resume: {
    title: "Resume & CV",
    description:
      "Resume of Mehraj Sayyad - Computer Science and Engineering graduate specializing in Java, Data Structures and Algorithms, and full-stack development.",
    keywords: [
      "Mehraj Sayyad Resume",
      "Mehraj Sayyad CV",
      "Java Developer Resume",
      "Software Developer Resume",
      "Full Stack Developer CV",
    ],
    path: "/resume",
    type: "profile",
  },
};
