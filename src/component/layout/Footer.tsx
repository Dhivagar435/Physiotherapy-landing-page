import Link from "next/link";
import { ArrowUpRight, Clock, HeartPulse, Mail, MapPin, Phone } from "lucide-react";
import { contact, navLinks, serviceAreas, services } from "../lib/site";

export default function Footer() {
    const tel = `tel:${contact.phone.replace(/\s/g, "")}`;

    return (
        <>
            <div className="mt-20">
                {/* CTA card overlapping the footer */}
                <div className="relative z-10 mx-auto -mb-16 max-w-6xl px-4 sm:px-6">
                    <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-linear-to-r from-primary to-teal-500 p-8 text-white shadow-2xl shadow-primary/30 md:flex-row md:items-center md:p-12">
                        <div>
                            <h2 className="text-2xl font-bold sm:text-3xl">Ready to start your recovery?</h2>
                            <p className="mt-2 text-white/80">Book your first session today and move without pain.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-dark transition hover:-translate-y-0.5"
                            >
                                Book Appointment <ArrowUpRight className="h-4 w-4" />
                            </Link>

                            <a href={tel}
                                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
                            >
                                <Phone className="h-4 w-4" /> Call Now
                            </a>
                        </div>
                    </div>
                </div>

                <footer className="relative overflow-hidden bg-primary-dark pt-28 text-white/70">
                    <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
                        {/* Brand */}
                        <div>
                            <Link href="/" className="flex items-center gap-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-accent">
                                    <HeartPulse className="h-5 w-5" />
                                </span>
                                <span className="text-xl font-bold text-white">
                                    Physio<span className="text-accent">Care</span>
                                </span>
                            </Link>
                            <p className="mt-4 max-w-xs text-sm leading-relaxed">
                                Personalized physiotherapy to help you move better, heal faster and live pain-free.
                            </p>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
                            <ul className="space-y-2.5 text-sm">
                                {navLinks.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="transition hover:text-accent">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="mb-4 font-semibold text-white">Services</h4>
                            <ul className="space-y-2.5 text-sm">
                                {services.map((s) => (
                                    <li key={s.href}>
                                        <Link href={s.href} className="transition hover:text-accent">
                                            {s.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="mb-4 font-semibold text-white">Contact</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-3">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                    {contact.address}
                                </li>
                                <li className="flex gap-3">
                                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                    <a href={tel} className="hover:text-accent">{contact.phone}</a>
                                </li>
                                <li className="flex gap-3">
                                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                    <a href={`mailto:${contact.email}`} className="hover:text-accent">{contact.email}</a>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                    {contact.hours}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-white/10">
                        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:px-6 md:flex-row">
                            <p>© {new Date().getFullYear()} PhysioCare. All rights reserved.</p>
                            <p>Serving {serviceAreas.join(" • ")}</p>
                        </div>
                    </div>

                    {/* Big faded brand text */}
                    <p className="pointer-events-none select-none text-center text-[18vw] font-extrabold leading-[0.8] tracking-tighter text-white/5">
                        PhysioCare
                    </p>
                </footer>
            </div>
        </>

    )
}
