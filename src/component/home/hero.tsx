import Link from "next/link";
import { ArrowUpRight, CalendarCheck, MapPin, Phone, Star } from "lucide-react";
import { contact } from "../lib/site";

const stats = [
  { value: "10+", label: "Years experience" },
  { value: "5000+", label: "Patients treated" },
  { value: "4.9", label: "Google rating", star: true },
];

export default function Hero() {
  const tel = `tel:${contact.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-primary-dark">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
        src="/videos/hero-bg.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Dark overlay so the text is readable */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-primary-dark/90 via-primary-dark/60 to-primary-dark/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-primary-dark/80 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
            <MapPin className="h-4 w-4 text-accent" />
            Electronic City &amp; HSR Layout, Bengaluru
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Move Better. Heal Faster.{" "}
            <span className="text-accent">Live Pain-Free.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Expert physiotherapy for back pain, sports injuries, neuro and
            post-surgery recovery, with personalized plans for every patient.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-5 w-5" />
              Book Appointment
            </Link>
            <a
              href={tel}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 px-3 py-3.5 font-medium text-white/80 transition hover:text-white"
            >
              Our Services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Stats */}
          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="flex items-center gap-1 text-2xl font-bold text-white">
                  {s.value}
                  {s.star && <Star className="h-5 w-5 fill-accent text-accent" />}
                </dd>
                <p className="text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}