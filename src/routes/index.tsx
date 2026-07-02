import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-ladakh.jpg";
import logoAsset from "@/assets/JourneySingh.jpg";
import {
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/routes/-about";

// Shared data + card pulled directly from the packages route so there's
// one source of truth — update PACKAGES there, both pages stay in sync.
import {
  PACKAGES,
  PackageCard,
  waLink,
  formatINR,
} from "@/routes/packages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Journey Singh — Trek • Travel • Leisure" },
      {
        name: "description",
        content:
          "Curated treks, road trips, and leisure escapes across India. Built for young explorers.",
      },
    ],
  }),
  component: Landing,
});

/* ------------------------------------------------------------------ */
/* Contact details — replace with the real values, then this is the   */
/* single source of truth for Hero CTA, Contact section & Footer.     */
/* ------------------------------------------------------------------ */
const CONTACT = {
  phoneDisplay: "+91 90095 03668",
  phoneTel: "+919009503668",
  email: "hello@journeysingh.com",
  website: "journeysingh.com",
  location: "Based in India, exploring everywhere",
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <Tours />
      <Contact />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-background" />
        <div className="absolute inset-0 bg-grain opacity-30" />
      </div>

      <div className="absolute top-32 right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-accent to-accent/30 blur-2xl opacity-50 animate-float-slow" />
      <div
        className="absolute bottom-20 left-[8%] w-56 h-56 rounded-full bg-gradient-to-br from-accent/60 to-primary/30 blur-3xl opacity-40 animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M -50 600 Q 300 200 600 400 T 1300 150"
          stroke="oklch(0.72 0.16 60 / 0.5)"
          strokeWidth="2"
          strokeDasharray="6 8"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-32 md:pt-32 md:pb-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 backdrop-blur border border-accent/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-ring" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Now Booking
          </span>

          <h1 className="mt-6 font-display font-extrabold text-white text-balance text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
            Journeys worth{" "}
            <span className="relative inline-block">
              <span className="font-script font-bold text-accent">living</span>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path
                  d="M2 8 Q 100 -2 198 6"
                  stroke="oklch(0.72 0.16 60)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            <span className="text-white/95">not just dreaming about.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Treks that test you. Road trips that surprise you. Leisure that resets you. Journey
            Singh curates India's most-loved escapes — built for the young & restless.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/packages"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Explore Tours
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href={`https://wa.me/${CONTACT.phoneTel}?text=Hi%20Journey%20Singh,%20I%20would%20like%20to%20plan%20a%20trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur px-6 py-4 font-medium text-white hover:bg-white/20 transition-colors"
            >
              <span className="grid place-items-center w-8 h-8 rounded-full bg-accent text-accent-foreground">
                📱
              </span>
              Let's Plan Your Trip - Contact Us Now
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              ["20+", "Destinations"],
              ["50+", "Curated trips"],
              ["4.9★", "Traveler love"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl font-bold text-white">{n}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute right-8 top-32">
          <div className="relative animate-float-slow">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl scale-110 animate-spin-slow" />
            <img
              src={logoAsset}
              alt=""
              className="relative w-56 h-56 rounded-full ring-4 ring-white/40 shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      <svg
        className="block w-full h-16 -mt-px text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 C 240 80 480 0 720 40 C 960 80 1200 0 1440 40 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why Choose Us                                                       */
/* ------------------------------------------------------------------ */

const REASONS = [
  {
    title: "Real travel experience",
    desc: "Experienced travelers who understand what actually matters on the road.",
  },
  {
    title: "Personalized planning",
    desc: "Every itinerary is built around how you actually want to travel.",
  },
  {
    title: "Family & group friendly",
    desc: "Packages that work for solo wanderers, families, and big groups alike.",
  },
  {
    title: "Every kind of trip",
    desc: "Adventure, trekking, leisure & spiritual tours — pick your pace.",
  },
  {
    title: "Fair, honest pricing",
    desc: "Premium experiences without the premium markup.",
  },
  {
    title: "Support that doesn't disappear",
    desc: "Dedicated help before you leave, and while you're out there.",
  },
  {
    title: "Trusted, firsthand picks",
    desc: "Every recommendation comes from a trip we've actually taken.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="text-accent font-semibold text-sm tracking-[0.3em] uppercase">
            Why travel with us
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-extrabold text-primary text-balance">
            Why choose{" "}
            <span className="font-script text-accent">Journey Singh?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Not a booking engine — a small team of people who've actually done
            the trips they sell.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-2xl bg-card border border-border p-6 hover:border-accent/50 hover:shadow-soft transition-all"
            >
              <span className="grid place-items-center w-10 h-10 rounded-full bg-accent/15 text-accent">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-display font-bold text-lg text-primary">
                {r.title}
              </h3>
              <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Tours — reuses the same PackageCard as /packages                   */
/* ------------------------------------------------------------------ */

// Show a tighter preview on the homepage: first 3 packages, no feature
// span (all equal width), full details still visible via the card.
const PREVIEW_COUNT = 3;

function Tours() {
  const preview = PACKAGES.slice(0, PREVIEW_COUNT);

  return (
    <section id="tours" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="text-accent font-semibold text-sm tracking-[0.3em] uppercase">
              Pick your vibe
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-extrabold text-primary text-balance">
              India, the way{" "}
              <span className="font-script text-accent">you'd</span> tell it.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl text-lg">
              A few of the journeys we're prepping for launch — each handcrafted
              for small groups.
            </p>
          </div>

          <Link
            to="/packages"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:border-accent hover:text-accent transition-colors"
          >
            View all packages →
          </Link>
        </motion.div>

        {/* Cards — equal 3-col grid, no feature span on homepage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((pkg, idx) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={idx}
              isFeatureOverride={false}
            />
          ))}
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-accent/40 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">Be the first to book.</h3>
              <p className="mt-2 text-primary-foreground/70 max-w-md">
                Drop your email — we'll ping you the moment bookings open.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@wanderlust.in"
                className="px-5 py-3 rounded-full bg-white/10 border border-white/20 placeholder:text-white/50 text-white outline-none focus:border-accent min-w-[260px]"
              />
              <button className="rounded-full bg-accent text-accent-foreground px-6 py-3 font-semibold hover:scale-105 transition-transform">
                Notify me
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "YouTube", href: "#", Icon: Youtube },
  { label: "WhatsApp", href: `https://wa.me/${CONTACT.phoneTel}`, Icon: MessageCircle },
];

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="text-accent font-semibold text-sm tracking-[0.3em] uppercase">
              Contact us
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-extrabold text-primary text-balance">
              Let's plan your{" "}
              <span className="font-script text-accent">next adventure.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-lg leading-relaxed">
              Ready to explore India and beyond? Get in touch with our travel
              experts and let us create a customized itinerary that perfectly
              suits your needs.
            </p>

            <p className="mt-8 font-script text-2xl md:text-3xl text-primary/80">
              Because life's best stories are written while travelling.
            </p>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/70 mb-3">
                Follow along
              </div>
              <div className="flex gap-3">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary/70 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Travel inspiration, destination guides & exclusive offers —
                start your journey today.
              </p>
            </div>
          </motion.div>

          {/* Right: contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
              <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-accent/40 blur-3xl" />
              <div className="absolute -left-16 bottom-0 w-56 h-56 rounded-full bg-accent/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <img
                    src={logoAsset}
                    alt="Journey Singh"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-accent/40"
                  />
                  <span className="font-display font-bold text-lg">
                    Journey Singh Travel & Leisure
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div className="pt-1.5 text-sm text-primary-foreground/80">
                      {CONTACT.location}
                    </div>
                  </div>

                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">
                      Call / WhatsApp: {CONTACT.phoneDisplay}
                    </span>
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{CONTACT.email}</span>
                  </a>

                  <a
                    href={`https://${CONTACT.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <Globe className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{CONTACT.website}</span>
                  </a>
                </div>

                <a
                  href={`https://wa.me/${CONTACT.phoneTel}?text=Hi%20Journey%20Singh,%20I%20would%20like%20to%20plan%20a%20trip.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-accent-foreground hover:scale-[1.02] transition-transform"
                >
                  Start your journey today
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}