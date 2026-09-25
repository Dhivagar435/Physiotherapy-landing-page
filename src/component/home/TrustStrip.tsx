"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Star, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Patients Treated" },
  { icon: Star, value: "4.9", label: "Google Rating" },
  { icon: ShieldCheck, value: "100%", label: "Certified Physiotherapists" },
];

export default function TrustStrip() {
  return (
    <div className="relative z-30 -mt-10 px-4 sm:-mt-12 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-6 rounded-3xl bg-white px-6 py-6 shadow-2xl shadow-primary-dark/30 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-10 sm:px-10"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 + i * 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
              <s.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-bold leading-tight text-primary-dark">{s.value}</p>
              <p className="text-xs text-primary-dark">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}