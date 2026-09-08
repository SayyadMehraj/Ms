import type { IconType } from "react-icons";

import {
  FaGitAlt,
  FaGithub,
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
} from "react-icons/fa6";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVite,
  SiGooglegemini,
} from "react-icons/si";

import { DiJava } from "react-icons/di";
import {
  MdPsychology,
  MdModelTraining,
  MdAccountTree,
} from "react-icons/md";

interface LogoProps {
  title: string;
  logoComponent: IconType;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      {
        title: "Java",
        logoComponent: DiJava,
        color: "#007396",
      },
      {
        title: "JavaScript",
        logoComponent: FaSquareJs,
        color: "#F7DF1E",
      },
      {
        title: "Python",
        logoComponent: FaPython,
        color: "#3776AB",
      },
      {
        title: "HTML5",
        logoComponent: FaHtml5,
        color: "#E34F26",
      },
      {
        title: "CSS3",
        logoComponent: FaCss3Alt,
        color: "#1572B6",
      },
      {
        title: "MySQL",
        logoComponent: SiMysql,
        color: "#4479A1",
      },
      {
        title: "MongoDB",
        logoComponent: SiMongodb,
        color: "#47A248",
      },
    ],
  },

  {
    title: "Frameworks & Libraries",
    data: [
      {
        title: "React",
        logoComponent: FaReact,
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        logoComponent: FaNodeJs,
        color: "#339933",
      },
      {
        title: "Express.js",
        logoComponent: SiExpress,
        color: "#000000",
      },
      {
        title: "Vite",
        logoComponent: SiVite,
        color: "#646CFF",
      },
    ],
  },

  {
    title: "AI, ML & NLP",
    data: [
      {
        title: "Natural Language Processing",
        logoComponent: MdPsychology,
        color: "#7C3AED",
      },
      {
        title: "Deep Learning",
        logoComponent: MdModelTraining,
        color: "#2563EB",
      },
      {
        title: "RNN",
        logoComponent: MdAccountTree,
        color: "#059669",
      },
      {
        title: "LSTM",
        logoComponent: MdAccountTree,
        color: "#0891B2",
      },
      {
        title: "Gemini API",
        logoComponent: SiGooglegemini,
        color: "#1A73E8",
      },
    ],
  },

  {
    title: "Tools",
    data: [
      {
        title: "Git",
        logoComponent: FaGitAlt,
        color: "#F05032",
      },
      {
        title: "GitHub",
        logoComponent: FaGithub,
        color: "#181717",
      },
      {
        title: "Postman",
        logoComponent: SiPostman,
        color: "#FF6C37",
      },
    ],
  },
]