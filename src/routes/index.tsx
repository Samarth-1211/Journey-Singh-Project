import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-ladakh.jpg";
import keralaImg from "@/assets/tour-kerala.jpg";
import rajasthanImg from "@/assets/tour-rajasthan.jpg";
import himachalImg from "@/assets/tour-himachal.jpg";
import goaImg from "@/assets/tour-goa.jpg";
import rishikeshImg from "@/assets/tour-rishikesh.jpg";
import meghalayaImg from "@/assets/tour-meghalaya.jpg";
import logoAsset from "../assets/JourneySingh.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Journey Singh — Trek • Travel • Leisure" },
      { name: "description", content: "Curated treks, road trips, and leisure escapes across India. Built for young explorers." },
    ],
  }),
  component: Landing,
});

const tours = [
  { name: "Ladakh", tag: "High-altitude", days: "7N · 8D",img: heroImg, blurb: "Pangong, Nubra & Khardung La road trip." },
  { name: "Himachal", tag: "Trek", days: "5N · 6D", img: himachalImg, blurb: "Hampta Pass & Kasol sunrise treks." },
  { name: "Rajasthan", tag: "Heritage", days: "6N · 7D",img: rajasthanImg, blurb: "Jaipur, Jaisalmer dunes & Udaipur lakes." },
  { name: "Kerala", tag: "Leisure", days: "4N · 5D",img: keralaImg, blurb: "Alleppey houseboats & Munnar greens." },
  { name: "Goa", tag: "Beach", days: "3N · 4D",img: goaImg, blurb: "Sunset shacks, scooter trails & nights out." },
  { name: "Rishikesh", tag: "Adventure", days: "2N · 3D",img: rishikeshImg, blurb: "White-water rafting & cliff jumps." },
  { name: "Meghalaya", tag: "Offbeat", days: "5N · 6D",img: meghalayaImg, blurb: "Living root bridges & Shillong vibes." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Tours />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Tours", "Treks", "Stories", "Contact"];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={logoAsset} alt="Journey Singh" className="h-12 w-12 rounded-full ring-2 ring-accent/40 object-cover" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-bold text-lg text-primary">Journey Singh</div>
            <div className="text-[10px] tracking-[0.25em] text-accent font-semibold">TREK • TRAVEL • LEISURE</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href="#" className="text-sm font-medium text-primary/80 hover:text-accent transition-colors relative group">
              {l}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all">
            Plan a Trip
            <span aria-hidden>→</span>
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-primary" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-4 flex flex-col gap-3">
          {links.map(l => <a key={l} href="#" className="text-primary font-medium py-1">{l}</a>)}
          <button className="mt-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold">Plan a Trip</button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-background" />
        <div className="absolute inset-0 bg-grain opacity-30" />
      </div>

      <div className="absolute top-32 right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-accent to-accent/30 blur-2xl opacity-50 animate-float-slow" />
      <div className="absolute bottom-20 left-[8%] w-56 h-56 rounded-full bg-gradient-to-br from-accent/60 to-primary/30 blur-3xl opacity-40 animate-float-slow" style={{ animationDelay: "2s" }} />

      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden>
        <path d="M -50 600 Q 300 200 600 400 T 1300 150" stroke="oklch(0.72 0.16 60 / 0.5)" strokeWidth="2" strokeDasharray="6 8" fill="none" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-32 md:pt-32 md:pb-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 backdrop-blur border border-accent/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-ring" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Launching Soon
          </span>

          <h1 className="mt-6 font-display font-extrabold text-white text-balance text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
            Coming{" "}
            <span className="relative inline-block">
              <span className="font-script font-bold text-accent">soon</span>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 Q 100 -2 198 6" stroke="oklch(0.72 0.16 60)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            <br />
            <span className="text-white/95">stories worth packing for.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Treks that test you. Road trips that surprise you. Leisure that resets you. Journey Singh is curating India's most-loved escapes — built for the young & restless.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#tours" className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold shadow-glow hover:scale-105 transition-transform">
              Explore Tours
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#" className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur px-6 py-4 font-medium text-white hover:bg-white/20 transition-colors">
              <span className="grid place-items-center w-8 h-8 rounded-full bg-accent text-accent-foreground">▶</span>
              Watch the teaser
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[["20+", "Destinations"], ["50+", "Curated trips"], ["4.9★", "Traveler love"]].map(([n, l]) => (
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
            <img src={logoAsset} alt="" className="relative w-56 h-56 rounded-full ring-4 ring-white/40 shadow-2xl object-cover" />
          </div>
        </div>
      </div>

      <svg className="block w-full h-16 -mt-px text-background" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0 40 C 240 80 480 0 720 40 C 960 80 1200 0 1440 40 L 1440 80 L 0 80 Z" fill="currentColor"/>
      </svg>
    </section>
  );
}

function Tours() {
  return (
    <section id="tours" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-accent font-semibold text-sm tracking-[0.3em] uppercase">Pick your vibe</div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-extrabold text-primary text-balance">
              India, the way <span className="font-script text-accent">you'd</span> tell it.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl text-lg">
              Seven journeys we're prepping for launch — each handcrafted for small groups under 30.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["All", "Trek", "Beach", "Heritage", "Offbeat"].map((t, i) => (
              <button key={t} className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "border-border text-primary/70 hover:border-accent hover:text-accent"}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((t, idx) => (
            <article
              key={t.name}
              className={`group relative overflow-hidden rounded-3xl bg-card border border-border hover:shadow-soft transition-all hover:-translate-y-1 ${idx === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${idx === 0 ? "aspect-[16/12] lg:aspect-[16/14]" : "aspect-[4/5]"}`}>
                <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />

                <span className="absolute top-4 left-4 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-bold tracking-wider uppercase">{t.tag}</span>
                <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur text-primary px-3 py-1 text-xs font-semibold">{t.days}</span>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className={`font-display font-extrabold leading-tight ${idx === 0 ? "text-4xl md:text-5xl" : "text-2xl"}`}>{t.name}</h3>
                      <p className={`mt-2 text-white/85 ${idx === 0 ? "text-base max-w-md" : "text-sm"}`}>{t.blurb}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[10px] uppercase tracking-widest text-white/60">from</div>
                      <div className="font-display font-bold text-xl text-accent">{t.price}</div>
                    </div>
                  </div>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    Join the waitlist <span>→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-accent/40 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">Be the first to book.</h3>
              <p className="mt-2 text-primary-foreground/70 max-w-md">Drop your email — we'll ping you the moment bookings open.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="you@wanderlust.in" className="px-5 py-3 rounded-full bg-white/10 border border-white/20 placeholder:text-white/50 text-white outline-none focus:border-accent min-w-[260px]" />
              <button className="rounded-full bg-accent text-accent-foreground px-6 py-3 font-semibold hover:scale-105 transition-transform">Notify me</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <img
            src={logoAsset}
            alt="Journey Singh"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div>
            <span className="text-sm text-muted-foreground block">
              © {new Date().getFullYear()} Journey Singh. Trek • Travel • Leisure.
            </span>

            <a
              href="tel:+919876543210"
              className="text-sm text-accent hover:underline"
            >
              📞 +91 9009503668
            </a>
          </div>
        </div>

        <div className="flex gap-5 text-sm text-muted-foreground">
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">YouTube</a>
          <a href="#" className="hover:text-accent">WhatsApp</a>
        </div>

      </div>
    </footer>
  );
}
