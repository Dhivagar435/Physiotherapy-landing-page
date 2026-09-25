"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HeartPulse, ShieldCheck, Timer } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, title: "Certified Experts", desc: "Licensed physiotherapists with clinical training." },
  { icon: Timer, title: "Fast Recovery", desc: "Structured plans built around measurable progress." },
  { icon: HeartPulse, title: "Patient-First Care", desc: "Every treatment plan is personalized, not generic." },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-surface py-24">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image overlay design */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md pb-10 pr-8 lg:max-w-none lg:pb-14 lg:pr-14"
          >
            {/* Main image */}
            <div
              className="relative aspect-5/5 w-full overflow-hidden shadow-xl shadow-primary/15"
              style={{ borderRadius: "0.5rem 4rem 0.5rem 1rem" }}
            >
              <Image
                src="/about/about-1.jpg"
                alt="Physiotherapist treating a patient"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlapping image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="absolute bottom-0 right-0 aspect-4/3 w-2/3 overflow-hidden border-4 border-white shadow-2xl shadow-primary-dark/30"
              style={{ borderRadius: "0 3rem 0 3rem" }}
            >
              <Image
                src="/about/about-2.jpg"
                alt="PhysioCare clinic interior"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              About PhysioCare
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
              Recovery, Reimagined Around{" "}
              <span className="text-accent">You</span>
            </h2>

            <p className="mt-5 leading-relaxed text-body">
              We combine hands-on therapy, modern equipment and evidence-based
              techniques to help you move without pain — whether you're
              recovering from an injury, surgery, or managing a long-term
              condition.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 * i }}
                  className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 transition hover:-translate-y-0.5 hover:bg-primary/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-dark">{h.title}</p>
                    <p className="text-sm text-body">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-dark px-6 py-3 font-semibold text-white transition hover:bg-primary"
            >
              Learn more about us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}