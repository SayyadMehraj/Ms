"use client";

import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/constant/profile";

export const EmailButton = () => {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={`mailto:${profile.email}`}
      className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-4 font-mono text-sm font-semibold text-accent transition-all hover:bg-accent/20 sm:min-w-85"
    >
      <span className="flex items-center gap-3">
        <Mail className="size-4 shrink-0" />
        <span>Email Me</span>
      </span>
      <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
};
