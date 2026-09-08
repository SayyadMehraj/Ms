export interface Project {
  name: string;
  description: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
}

export const selected_works: Project[] = [
  {
    name: "Interview-AI",
    description:
      "A full-stack interview preparation platform that personalizes preparation by analyzing a candidate's resume, self-description, and target job description.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Gemini API",
    ],
    links: {
      github: "https://github.com/SayyadMehraj/Interview-AI",
    },
  },
  {
    name: "Hate Speech Detection",
    description:
      "Built a text classification system that detects and classifies hate speech in social media text using natural language processing and deep learning techniques.",
    technologies: [
      "Python",
      "Natural Language Processing",
      "Machine Learning",
      "Deep Learning",
      "LSTM",
      "RNN",
    ],
    links: {
      github: "",
    },
  },
  {
    name: "Keeper App",
    description:
      "Built a note-taking web application that allows users to create, view, and manage notes through an interactive web interface.",
    technologies: ["React", "JavaScript", "Vite", "HTML", "CSS"],
    links: {
      github: "https://github.com/SayyadMehraj/Keeper_Project",
    },
  },
];

export const works: Project[] = [
  {
    name: "MelodyStream",
    description:
      "Built a web-based music player that lets users browse and control playback of locally stored songs, including play, pause, track navigation, and progress seeking.",
    technologies: ["HTML", "CSS", "JavaScript","HTML Audio API"],
    links: {
      github: "https://github.com/SayyadMehraj/Melody-Stream",
    },
  },
];
