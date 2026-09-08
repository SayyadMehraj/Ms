import type { IconType } from "react-icons";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

interface Social {
  name: string;
  handle: string;
  url: string;
  icon: IconType;
}

export const socials = [
  {
    name: "GitHub",
    handle: "SayyadMehraj",
    url: "https://github.com/SayyadMehraj",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    handle: "mehrajsayyad",
    url: "https://linkedin.com/in/mehrajsayyad/",
    icon: FaLinkedin,
  },
  {
    name: "LeetCode",
    handle: "sayyadmehraj01",
    url: "https://leetcode.com/u/sayyadmehraj01/",
    icon: SiLeetcode,
  },
] satisfies Social[];
