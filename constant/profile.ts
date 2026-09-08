interface Name {
  full: string;
  first: string;
  last: string;
}

interface Work {
  title: string;
  company: string;
}

interface Location {
  city: string;
  state: string;
}

interface Education {
  uni: string;
  degree: string;
  major: string;
  batch: string;
  location: Location;
}

interface DOB {
  dd: number;
  mm: number;
  yyyy: number;
}

interface Titles {
  constant_word: string;
  rotating_words: string[];
}

interface Profile {
  name: Name;
  email: string;
  work?: Work;
  education: Education;
  DOB?: DOB;
  curr_location: Location;
  about: string[];
  hero_titles: Titles;
  quote: string;
}

export const profile: Profile = {
  name: {
    full: "Mehraj Sayyad",
    first: "Mehraj",
    last: "Sayyad",
  },

  email: "sayyadmehraj01@gmail.com",

  education: {
    uni: "Vellore Institute of Technology, Amaravati",
    degree: "B.Tech",
    major: "Computer Science and Engineering",
    batch: "2022 - 2026",
    location: {
      city: "Amaravati",
      state: "Andhra Pradesh",
    },
  },

  curr_location: {
    city: "Rajamahendravaram",
    state: "Andhra Pradesh",
  },

  about: [
    "I'm a Computer Science and Engineering graduate with a strong foundation in Java, Data Structures and Algorithms, and full-stack development.",
    "I like solving problems end-to-end — from working out the right approach on a whiteboard to actually shipping the code that makes it real.",
    "Outside of coursework, I've built projects spanning full-stack platforms and applied machine learning, and I keep sharpening my fundamentals through consistent DSA practice.",
    "Always learning, always building — currently looking for opportunities to apply that to real-world software problems.",
  ],

  hero_titles: {
    constant_word: "Stay",
    rotating_words: [
      "Curious",
      "Consistent",
      "Building",
      "Learning",
      "Focused",
    ],
  },

  quote: "Code. Learn. Repeat.",
};
