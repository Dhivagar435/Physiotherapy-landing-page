"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { contact } from "../lib/site";

export default function Hero() {
  const tel = `tel:${contact.phone.replace(/\s/g, "")}`;
  const whatsapp = `https://wa.me/${contact.phone.replace(/[^\d]/g, "")}`;

  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-primary-dark">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
        src="/videos/hero-bg-1.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Overlay so text is readable */}
      <div className="absolute inset-0 -z-10 bg-primary-dark/55" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-primary-dark to-transparent" />

      {/* Floating call / whatsapp buttons */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 sm:right-6"
      >
        <a
          href={tel}
          aria-label="Call us"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:scale-105"
        >
          <FaPhoneAlt className="h-5 w-5" />
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:scale-105"
        >
          <FaWhatsapp className="h-5 w-5" />
        </a>
      </motion.div>

      <div className="mx-auto w-full max-w-4xl px-4 pt-28 text-center sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Move Better. Heal Faster.{" "}
          <span className="text-accent">Live Pain-Free.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Clinically guided physiotherapy for pain relief, functional recovery
          and long-term everyday performance — serving Bengaluru &amp; Tamil Nadu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-primary-dark"
          >
            Request Callback
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-dark">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary-dark shadow-lg transition hover:bg-white/90"
          >
            Book Appointment
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-dark text-white">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-10 bg-primary-dark" />
    </section>
  );
}