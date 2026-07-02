import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BedDouble,
  Coffee,
  UtensilsCrossed,
  Car,
  Compass,
  Wine,
  Bus,
  Home,
  Umbrella,
  Baby,
  Sparkles,
  ShieldCheck,
  Headset,
  BadgePercent,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Users,
  MapPin,
  Heart,
} from "lucide-react";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

import goaImg from "@/assets/tour-goa.jpg";
import keralaImg from "@/assets/tour-kerala.jpg";
import himachalImg from "@/assets/tour-himachal.jpg";
import packagesBg from "@/assets/Packagesbg.png";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

export interface StayPlanItem {
  city: string;
  nights: number;
  type?: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  country: string;
  region: "domestic" | "international";
  duration?: { days: number; nights: number };
  price: { amount: number; type: string };
  stayPlan?: StayPlanItem[];
  inclusions: string[];
  image?: string;
  validity?: string;
  minBooking?: string;
}

export const WHATSAPP_NUMBER = "919009503668";
export const waLink = (pkg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Journey Singh, I'm interested in the ${pkg} package. Can you share more details?`
  )}`;

export const PACKAGES: TravelPackage[] = [
  {
    id: "bali-kuta-ubud",
    title: "Bali",
    subtitle: "Kuta · Ubud",
    tagline: "Escape into the tropical beauty of Bali",
    country: "Indonesia",
    region: "international",
    duration: { days: 7, nights: 6 },
    price: { amount: 39999, type: "Per Person" },
    stayPlan: [
      { city: "Kuta", nights: 4, type: "Hotel" },
      { city: "Ubud", nights: 2, type: "Villa" },
    ],
    inclusions: ["Hotel Stay", "Daily Breakfast", "Airport Transfers", "Local Sightseeing"],
  },
  {
    id: "goa-luxury",
    title: "Goa",
    subtitle: "The Astor, Goa",
    tagline: "A luxury escape with a stay you'll love",
    country: "India",
    region: "domestic",
    price: { amount: 29000, type: "Per Couple" },
    validity: "1 Apr – 30 Sep 2026",
    inclusions: [
      "Junior Suite Stay",
      "Breakfast & Dinner",
      "Return Transfers",
      "Unlimited Drinks",
      "Hi-Tea",
      "Beach Shuttle",
    ],
    image: goaImg,
  },
  {
    id: "vietnam-hanoi-danang",
    title: "Vietnam",
    subtitle: "Hanoi · Danang",
    tagline: "Explore the cultural charm of Vietnam",
    country: "Vietnam",
    region: "international",
    duration: { days: 7, nights: 6 },
    price: { amount: 49999, type: "Per Person" },
    stayPlan: [
      { city: "Hanoi", nights: 3 },
      { city: "Danang", nights: 3 },
    ],
    inclusions: ["Hotel Stay", "Daily Breakfast", "Airport Transfers", "Local Sightseeing"],
  },
  {
    id: "kerala-experience",
    title: "Kerala",
    subtitle: "Munnar · Thekkady · Alleppey · Kollam",
    tagline: "God's own country, at your own pace",
    country: "India",
    region: "domestic",
    duration: { days: 6, nights: 5 },
    price: { amount: 24999, type: "Per Person" },
    minBooking: "Min. 2 travelers",
    inclusions: ["3-Star Hotel Stay", "Breakfast & Dinner", "Private Car", "Transfers", "Sightseeing"],
    image: keralaImg,
  },
  {
    id: "shimla-manali",
    title: "Shimla & Manali",
    subtitle: "incl. Chandigarh",
    tagline: "Your inner traveller is calling you",
    country: "India",
    region: "domestic",
    duration: { days: 7, nights: 6 },
    price: { amount: 29999, type: "Per Person" },
    stayPlan: [
      { city: "Shimla", nights: 2 },
      { city: "Manali", nights: 3 },
      { city: "Chandigarh", nights: 1 },
    ],
    inclusions: ["Comfortable Stay", "Transfers", "Sightseeing", "Breakfast, Lunch & Dinner"],
    image: himachalImg,
  },
];

const MARQUEE_WORDS = ["Bali", "Goa", "Vietnam", "Kerala", "Himachal", "✦"];

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Verified Stays", sub: "Every hotel vetted by us" },
  { icon: BadgePercent, label: "Best Price Promise", sub: "No hidden markups" },
  { icon: Headset, label: "Real Human Support", sub: "Not a chatbot, promise" },
  { icon: MessageCircle, label: "Instant WhatsApp Booking", sub: "Reply in minutes" },
];

const EXPERIENCES = [
  { emoji: "🏔️", label: "Himalayan Adventures & Treks" },
  { emoji: "🌄", label: "Kashmir – Heaven on Earth" },
  { emoji: "🏕️", label: "Himachal & Uttarakhand Escapes" },
  { emoji: "🏜️", label: "Rajasthan Heritage Tours" },
  { emoji: "🏖️", label: "Goa Beach Holidays" },
  { emoji: "🌿", label: "Kerala Backwaters & Nature Retreats" },
  { emoji: "🕉️", label: "Spiritual Journeys & Pilgrimages" },
  { emoji: "🌉", label: "North-East India Explorations" },
  { emoji: "🐅", label: "Wildlife & Jungle Safaris" },
  { emoji: "🌅", label: "Weekend Getaways & Family Vacations" },
];

const TRAVEL_TYPES = [
  { icon: "✈️", label: "Quick Escape" },
  { icon: "👨‍👩‍👧‍👦", label: "Family Holiday" },
  { icon: "💍", label: "Honeymoon" },
  { icon: "🏢", label: "Corporate Retreat" },
  { icon: "🧗", label: "Adventure Trek" },
  { icon: "🎒", label: "Solo Journey" },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function inclusionIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("breakfast") || l.includes("hi-tea") || l.includes("tea")) return Coffee;
  if (l.includes("dinner") || l.includes("lunch") || l.includes("meal")) return UtensilsCrossed;
  if (l.includes("drink") || l.includes("beer")) return Wine;
  if (l.includes("shuttle") || l.includes("bus")) return Bus;
  if (l.includes("villa")) return Home;
  if (l.includes("beach")) return Umbrella;
  if (l.includes("kid")) return Baby;
  if (l.includes("transfer") || l.includes("car")) return Car;
  if (l.includes("sightseeing") || l.includes("tour")) return Compass;
  if (l.includes("stay") || l.includes("hotel") || l.includes("suite")) return BedDouble;
  return Sparkles;
}

/* ------------------------------------------------------------------ */
/* Shared card + placeholder                                           */
/* ------------------------------------------------------------------ */

export function PackagePlaceholder({ country, title }: { country: string; title: string }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary via-primary/80 to-accent/40 flex items-center justify-center overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden>
        <pattern
          id={`stripes-${title}`}
          width="16"
          height="16"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="16" stroke="white" strokeWidth="6" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#stripes-${title})`} />
      </svg>
      <div className="relative text-center">
        <Compass className="mx-auto text-white/70" size={40} strokeWidth={1.5} />
        <div className="mt-2 font-display font-bold text-white/80 text-sm tracking-widest uppercase">
          {country}
        </div>
      </div>
    </div>
  );
}

export function PackageCard({
  pkg,
  index,
  isFeatureOverride,
}: {
  pkg: TravelPackage;
  index: number;
  isFeatureOverride?: boolean;
}) {
  const isFeature = isFeatureOverride ?? index === 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className={`group relative overflow-hidden rounded-3xl bg-card border border-border hover:shadow-soft transition-shadow ${
        isFeature ? "md:col-span-2" : ""
      }`}
    >
      <span className="pointer-events-none absolute -top-4 -left-2 font-display font-extrabold text-[7rem] leading-none text-primary/5 select-none z-0">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className={`relative grid ${isFeature ? "md:grid-cols-2" : "grid-cols-1"}`}>
        <div
          className={`relative overflow-hidden ${
            isFeature ? "aspect-[16/12] md:aspect-auto" : "aspect-[16/11]"
          }`}
        >
          {pkg.image ? (
            <img
              src={pkg.image}
              alt={pkg.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <PackagePlaceholder country={pkg.country} title={pkg.title} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-primary/10" />
          <span className="absolute top-4 left-4 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[11px] font-bold tracking-wider uppercase">
            {pkg.region === "international" ? "International" : "Domestic"}
          </span>
          {pkg.duration && (
            <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur text-primary px-3 py-1 text-xs font-semibold">
              {pkg.duration.nights}N · {pkg.duration.days}D
            </span>
          )}
        </div>

        <div className="relative z-10 p-6 md:p-7 flex flex-col justify-between gap-5">
          <div>
            <h3 className="font-display font-extrabold text-primary text-2xl md:text-3xl leading-tight">
              {pkg.title}
            </h3>
            <p className="text-accent text-sm font-semibold mt-1">{pkg.subtitle}</p>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{pkg.tagline}</p>

            {pkg.stayPlan && (
              <div className="mt-4 flex flex-wrap gap-2">
                {pkg.stayPlan.map((s) => (
                  <span
                    key={s.city}
                    className="text-xs font-medium rounded-full border border-border px-3 py-1 text-primary/70"
                  >
                    {s.nights}N {s.city}
                    {s.type ? ` · ${s.type}` : ""}
                  </span>
                ))}
              </div>
            )}

            {pkg.validity && (
              <p className="mt-3 text-xs text-muted-foreground">Valid {pkg.validity}</p>
            )}
            {pkg.minBooking && (
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Users size={12} /> {pkg.minBooking}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {pkg.inclusions.slice(0, isFeature ? 6 : 4).map((inc) => {
                const Icon = inclusionIcon(inc);
                return (
                  <span
                    key={inc}
                    title={inc}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-primary/60 bg-primary/5 rounded-full px-2.5 py-1"
                  >
                    <Icon size={12} className="text-accent" />
                    {inc}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex items-end justify-between gap-4 pt-4 border-t border-border/70">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {pkg.price.type}
              </div>
              <div className="font-display font-extrabold text-2xl text-primary">
                {formatINR(pkg.price.amount)}
              </div>
            </div>
            <a
              href={waLink(pkg.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all shrink-0"
            >
              Enquire <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

function PackagesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PackagesHero />
      <DestinationsIntro />
      <ExperiencesGrid />
      <PackagesGrid />
      <TrustStrip />
      <TravelWithUs />
      <ClosingCTA />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function PackagesHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0">
        <img src={packagesBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/35 via-transparent to-accent/15" />
        <div className="absolute inset-0 bg-grain opacity-20" />
      </div>

      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-accent/20 blur-[140px]" />
      <div
        className="absolute bottom-0 right-[5%] w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      />
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" aria-hidden>
        <pattern id="dotgrid-pkg" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotgrid-pkg)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-accent/15 backdrop-blur border border-accent/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase"
        >
          <Sparkles size={14} /> Handpicked drops, not templates
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display font-extrabold text-white text-balance text-5xl sm:text-7xl md:text-8xl leading-[0.92]"
        >
        Not just destinations.
          <br />
          <span className="font-script text-accent">Experiences you’ll remember forever.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed"
        >
          Five routes. Zero filler. Everything below is a real, bookable itinerary — not a
          "starting from" trick.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap gap-x-10 gap-y-4"
        >
          {[
            ["5", "Live itineraries"],
            ["2", "Countries + counting"],
            [formatINR(24999), "Starting from"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl font-bold text-white">{n}</div>
              <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-white/10 py-4">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span
              key={i}
              className={`font-display font-extrabold text-4xl md:text-6xl ${
                w === "✦" ? "text-accent/60" : "text-white/10"
              }`}
            >
              {w}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative mt-4 flex justify-center text-white/40"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Destinations Intro                                                  */
/* ------------------------------------------------------------------ */

function DestinationsIntro() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* ghost headline */}
      <span className="pointer-events-none select-none absolute -top-6 left-0 font-display font-extrabold text-[clamp(5rem,18vw,14rem)] leading-none text-primary/[0.04] whitespace-nowrap">
        INDIA
      </span>

      <div className="absolute top-1/2 right-0 w-80 h-80 -translate-y-1/2 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-accent font-semibold text-sm tracking-[0.3em] uppercase">
              <MapPin size={14} />
              Travel Destinations
            </div>
            <h2 className="mt-4 font-display font-extrabold text-primary text-4xl md:text-5xl lg:text-6xl text-balance leading-[0.95]">
              Explore the Best of{" "}
              <span className="font-script text-accent">Incredible India</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              From snow-covered mountains to pristine beaches, from ancient
              temples to vibrant cities, India offers experiences unlike anywhere
              else in the world.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Journey Singh helps you discover destinations that match your
              travel style — curated, personal, and unforgettable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {TRAVEL_TYPES.map((t, i) => (
                <motion.span
                  key={t.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary/80 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                >
                  <span>{t.icon}</span>
                  {t.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: stat bento */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { n: "20+", l: "Destinations", sub: "Across India & beyond" },
              { n: "50+", l: "Curated Trips", sub: "Handpicked itineraries" },
              { n: "4.9★", l: "Traveler Rating", sub: "Consistently loved" },
              { n: "100%", l: "Personalized", sub: "No cookie-cutter tours" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:-translate-y-1 transition-all"
              >
                <div className="font-display font-extrabold text-3xl text-primary">{s.n}</div>
                <div className="mt-1 font-semibold text-sm text-primary/80">{s.l}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Experiences Grid                                                    */
/* ------------------------------------------------------------------ */

function ExperiencesGrid() {
  return (
    <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-20" />
      <div className="absolute -top-20 left-[20%] w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
      <div
        className="absolute -bottom-20 right-[10%] w-72 h-72 rounded-full bg-accent/15 blur-3xl animate-float-slow"
        style={{ animationDelay: "2s" }}
      />
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]" aria-hidden>
        <pattern id="dotgrid-exp" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotgrid-exp)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-accent font-semibold text-sm tracking-[0.3em] uppercase">
            What awaits you
          </div>
          <h2 className="mt-3 font-display font-extrabold text-white text-4xl md:text-6xl text-balance">
            Popular <span className="font-script text-accent">Experiences</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto text-lg">
            And many more customized destinations across India and selected
            international locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-5 hover:bg-white/10 hover:border-accent/40 hover:-translate-y-1 transition-all cursor-default ${
                // Stretch last item if count is odd so it fills the row
                i === EXPERIENCES.length - 1 && EXPERIENCES.length % 5 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="text-3xl mb-3">{exp.emoji}</div>
              <div className="text-white/90 font-medium text-sm leading-snug group-hover:text-white transition-colors">
                {exp.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Grid + Filter                                                       */
/* ------------------------------------------------------------------ */

type Filter = "all" | "domestic" | "international";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All Escapes" },
  { key: "domestic", label: "Domestic" },
  { key: "international", label: "International" },
];

function PackagesGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = PACKAGES.filter((p) => filter === "all" || p.region === filter);

  return (
    <section className="relative py-20 md:py-28 bg-secondary/30">
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.4]" aria-hidden>
        <pattern id="dotgrid2-pkg" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" className="fill-primary/10" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotgrid2-pkg)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-accent font-semibold text-sm tracking-[0.3em] uppercase">
              The lineup
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-extrabold text-primary text-balance">
              Pick a <span className="font-script text-accent">plot,</span> not just a place.
            </h2>
          </div>

          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                {filter === f.key && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    filter === f.key
                      ? "text-primary-foreground"
                      : "text-primary/60 hover:text-primary"
                  }`}
                >
                  {f.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((pkg, idx) => (
              <PackageCard key={pkg.id} pkg={pkg} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust strip                                                         */
/* ------------------------------------------------------------------ */

function TrustStrip() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_BADGES.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur px-5 py-6 text-center hover:border-accent/40 hover:-translate-y-1 transition-all"
            >
              <b.icon className="mx-auto text-accent" size={26} strokeWidth={1.5} />
              <div className="mt-3 font-display font-bold text-primary text-sm">{b.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{b.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Travel With Us                                                      */
/* ------------------------------------------------------------------ */

function TravelWithUs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* ghost text */}
      <span className="pointer-events-none select-none absolute bottom-0 right-0 font-display font-extrabold text-[clamp(4rem,15vw,12rem)] leading-none text-primary/[0.04] whitespace-nowrap">
        TRUST
      </span>

      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Top label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-accent font-semibold text-sm tracking-[0.3em] uppercase">
            <Heart size={14} />
            Travel With Us
          </div>
          <h2 className="mt-4 font-display font-extrabold text-primary text-4xl md:text-5xl lg:text-6xl text-balance leading-[0.95]">
            Every Journey Begins{" "}
            <span className="font-script text-accent">With Trust</span>
          </h2>
        </motion.div>

        {/* Two-col body */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're planning a quick escape, a family holiday, a
              honeymoon, a corporate retreat, or an adventurous trek, Journey
              Singh creates travel experiences tailored to your preferences,
              budget, and expectations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our goal is simple: to help you{" "}
              <span className="text-primary font-semibold">travel more</span>,{" "}
              <span className="text-primary font-semibold">worry less</span>, and
              create unforgettable memories with the people who matter most.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Let's turn your travel dreams into your next adventure.
            </p>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 border-l-4 border-accent pl-6"
            >
              <p className="font-display text-xl md:text-2xl font-bold text-primary italic leading-snug">
                "Your Next Journey Starts Here. With Journey Singh."
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Trip type cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            {TRAVEL_TYPES.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-card p-5 hover:border-accent/40 hover:-translate-y-1 transition-all group cursor-default"
              >
                <div className="text-3xl">{t.icon}</div>
                <div className="mt-3 font-semibold text-sm text-primary/80 group-hover:text-primary transition-colors">
                  {t.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Closing CTA                                                         */
/* ------------------------------------------------------------------ */

function ClosingCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-grain opacity-20" />
      <div className="absolute -top-10 left-[10%] w-72 h-72 rounded-full bg-accent/30 blur-3xl animate-float-slow" />
      <div
        className="absolute -bottom-16 right-[8%] w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float-slow"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-white text-4xl md:text-6xl text-balance leading-tight"
        >
          Your next stamp is
          <br />
          <span className="font-script text-accent">one tap away.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-white/70 text-lg max-w-xl mx-auto"
        >
          No forms, no hold music. Tell us the vibe, we'll send the itinerary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href={waLink("your trip")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            <MessageCircle size={18} />
            Chat with a travel expert
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages — Journey Singh" },
      {
        name: "description",
        content:
          "Handpicked domestic & international travel packages — Bali, Goa, Vietnam, Kerala, Shimla & Manali.",
      },
    ],
  }),
  component: PackagesPage,
});