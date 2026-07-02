import { Instagram, Youtube, MessageCircle, Phone, ArrowUpRight, Mountain } from "lucide-react";

/**
 * Journey Singh — Site Footer
 * ---------------------------------------------------------
 * Drop-in replacement for the existing `Footer()` component in index.tsx.
 *
 * Integration notes for your codebase:
 * 1. Replace the <MonogramMark /> below with your real logo:
 *      import logoAsset from "../assets/JourneySingh.jpg";
 *      <img src={logoAsset} alt="Journey Singh" className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40" />
 * 2. Swap plain <a> tags for <Link> from "@tanstack/react-router" wherever
 *    they point to internal routes (About, Tours, Packages).
 * 3. All colors/fonts below call your existing design tokens
 *    (bg-primary, text-accent, font-display, font-script, etc).
 *    The <style> block only exists so this renders correctly in isolation —
 *    delete it once dropped into your project, since your tailwind config
 *    + globals.css already define these same classes.
 * ---------------------------------------------------------
 */

const destinations = [
  { name: "Ladakh", tag: "High-altitude" },
  { name: "Himachal", tag: "Trek" },
  { name: "Rajasthan", tag: "Heritage" },
  { name: "Kerala", tag: "Leisure" },
  { name: "Goa", tag: "Beach" },
  { name: "Rishikesh", tag: "Adventure" },
  { name: "Meghalaya", tag: "Offbeat" },
];

// Waypoints along the trail line — mirrors the hero's dashed route path.
const waypoints = [
  { x: 40, y: 78 },
  { x: 240, y: 38 },
  { x: 440, y: 78 },
  { x: 640, y: 38 },
  { x: 840, y: 78 },
  { x: 1040, y: 38 },
  { x: 1240, y: 78 },
];

const company = [
  { label: "About us", href: "#about" },
  { label: "All tours", href: "#tours" },
  { label: "Plan a trip", href: "https://wa.me/919009503668?text=Hi%20Journey%20Singh,%20I%20would%20like%20to%20plan%20a%20trip." },
  { label: "FAQs", href: "#faqs" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "YouTube", href: "#", Icon: Youtube },
  { label: "WhatsApp", href: "https://wa.me/919009503668", Icon: MessageCircle },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="jstheme relative overflow-hidden bg-primary text-primary-foreground">
      <style>{`
        .jstheme {
          --background: oklch(0.98 0.012 75);
          --foreground: oklch(0.16 0.02 260);
          --primary: oklch(0.19 0.035 255);
          --primary-foreground: oklch(0.98 0.01 80);
          --accent: oklch(0.72 0.16 60);
          --accent-foreground: oklch(0.18 0.03 255);
          --card: oklch(1 0 0);
          --border: oklch(0.88 0.015 80);
          --muted-foreground: oklch(0.55 0.02 80);
          --secondary: oklch(0.95 0.02 80);
          font-family: 'Sora', system-ui, sans-serif;
        }
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Caveat:wght@600;700&display=swap');
        .jstheme .font-display { font-family: 'Sora', system-ui, sans-serif; }
        .jstheme .font-script { font-family: 'Caveat', cursive; }
        .jstheme .bg-primary { background-color: var(--primary); }
        .jstheme .text-primary-foreground { color: var(--primary-foreground); }
        .jstheme .bg-accent { background-color: var(--accent); }
        .jstheme .text-accent { color: var(--accent); }
        .jstheme .text-accent-foreground { color: var(--accent-foreground); }
        .jstheme .border-border { border-color: color-mix(in oklch, var(--primary-foreground) 14%, transparent); }
        @keyframes js-orb-float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -18px); }
        }
        @keyframes js-dash {
          to { stroke-dashoffset: -200; }
        }
        @keyframes js-ping {
          0% { transform: scale(1); opacity: 0.55; }
          80%, 100% { transform: scale(2.4); opacity: 0; }
        }
        .js-orb { animation: js-orb-float 9s ease-in-out infinite; }
        .js-trail-path { animation: js-dash 7s linear infinite; }
        .js-ping { animation: js-ping 2.4s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>

      {/* ambient brand glows, matches hero language */}
      <div className="js-orb pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div
        className="js-orb pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        style={{ animationDelay: "3s" }}
      />

      {/* ---------- trail strip: the signature element ---------- */}
      <div className="relative border-b border-border">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 py-8 lg:px-8">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-foreground/50">
            <Mountain className="h-3.5 w-3.5 text-accent" />
            The route so far
          </div>

          <svg
            viewBox="0 0 1290 130"
            className="h-[110px] w-[1290px] min-w-[1290px] lg:w-full"
            aria-hidden="true"
          >
            <path
              d="M40,78 Q140,18 240,38 T440,78 T640,38 T840,78 T1040,38 T1240,78"
              stroke="oklch(0.72 0.16 60 / 0.55)"
              strokeWidth="2"
              strokeDasharray="7 9"
              fill="none"
              className="js-trail-path"
            />
            {waypoints.map((p, i) => (
              <g key={destinations[i].name}>
                <circle cx={p.x} cy={p.y} r="14" fill="var(--accent)" opacity="0.18" className="js-ping" style={{ transformOrigin: `${p.x}px ${p.y}px`, animationDelay: `${i * 0.3}s` }} />
                <circle cx={p.x} cy={p.y} r="5" fill="var(--accent)" />
                <circle cx={p.x} cy={p.y} r="5" fill="none" stroke="var(--primary)" strokeWidth="2" />
                <text
                  x={p.x}
                  y={p.y === 38 ? p.y - 16 : p.y + 24}
                  textAnchor="middle"
                  className="font-display"
                  fontSize="13"
                  fontWeight="700"
                  fill="var(--primary-foreground)"
                  fillOpacity="0.85"
                >
                  {destinations[i].name}
                </text>
                <text
                  x={p.x}
                  y={p.y === 38 ? p.y - 3 : p.y + 37}
                  textAnchor="middle"
                  fontSize="10"
                  fill="var(--primary-foreground)"
                  fillOpacity="0.4"
                >
                  {destinations[i].tag}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* ---------- main columns ---------- */}
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <MonogramMark />
              <span className="font-display text-xl font-extrabold tracking-tight">
                Journey Singh
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-primary-foreground/65">
              Treks, road trips & leisure escapes across India — curated for
              small groups, built for{" "}
              <span className="font-script text-lg text-accent">
                the young &amp; restless.
              </span>
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary-foreground/70 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* destinations */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/45">
              Destinations
            </h4>
            <ul className="mt-5 space-y-3">
              {destinations.map((d) => (
                <li key={d.name}>
                  <a
                    href="#tours"
                    className="group inline-flex items-center gap-1.5 text-[15px] text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {d.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/45">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-[15px] text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact card */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/45">
              Get in touch
            </h4>
            <div className="mt-5 rounded-2xl border border-border bg-primary-foreground/5 p-5">
              <a
                href="tel:+919009503668"
                className="flex items-center gap-3 text-[15px] font-medium text-primary-foreground/85 hover:text-accent"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <Phone className="h-4 w-4" />
                </span>
                +91 90095 03668
              </a>
              <a
                href="https://wa.me/919009503668?text=Hi%20Journey%20Singh,%20I%20would%20like%20to%20plan%20a%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Chat on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- bottom bar ---------- */}
      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-primary-foreground/45 sm:flex-row lg:px-8">
          <span>© {year} Journey Singh. Trek • Travel • Leisure.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MonogramMark() {
  return (
    <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent/15 ring-1 ring-accent/40">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="none">
        <path d="M3 19L9 8l4 6.5L15.5 11 21 19H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="17.5" cy="6.5" r="1.6" fill="currentColor" />
      </svg>
    </div>
  );
}