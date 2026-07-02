import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoAsset from "@/assets/JourneySingh.jpg";

/**
 * Nav links for a travel agency landing page.
 * NOTE: "#about", "#gallery" and "#testimonials" don't exist on the page yet —
 * they're wired up here so the navbar is ready the moment those sections ship.
 * Until then they simply won't scroll (no error), so it's safe to ship now.
 */
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Destinations", href: "/packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "919009503668";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Journey Singh, I would like to know more about your trips."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#");

  // Glass intensifies once you scroll past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lightweight scroll-spy — only observes sections that actually exist.
  // Only hrefs that are real in-page hash anchors (e.g. "#about") are valid
  // CSS selectors for querySelector; route paths like "/packages" are not.
  useEffect(() => {
    const ids = NAV_LINKS
      .map((l) => l.href)
      .filter((h) => h.startsWith("#") && h.length > 1);

    const sections = ids
      .map((id) => document.querySelector(id))
      .filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    setActive(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60 shadow-soft"
          : "backdrop-blur-md bg-background/30 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={() => handleLinkClick("#")}
          className="flex items-center gap-3 shrink-0"
        >
          <motion.img
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            src={logoAsset}
            alt="Journey Singh"
            className="h-12 w-12 rounded-full ring-2 ring-accent/40 object-cover"
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-bold text-lg text-primary">
              Journey Singh
            </div>
            <div className="text-[10px] tracking-[0.25em] text-accent font-semibold uppercase">
              Trek · Travel · Leisure
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? "text-accent"
                    : "text-primary/80 hover:text-accent"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent/10 border border-accent/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA + burger */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all"
          >
            Plan a Trip
            <span aria-hidden>→</span>
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 grid place-items-center rounded-full hover:bg-primary/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <motion.span
              animate={open ? "open" : "closed"}
              className="relative w-5 h-4 block"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7 },
                }}
                className="absolute left-0 top-0 w-5 h-0.5 bg-primary rounded-full origin-center"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="absolute left-0 top-[7px] w-5 h-0.5 bg-primary rounded-full"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 14 },
                  open: { rotate: -45, y: 7 },
                }}
                className="absolute left-0 top-0 w-5 h-0.5 bg-primary rounded-full origin-center"
              />
            </motion.span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden backdrop-blur-2xl bg-background/95 border-t border-border/60"
          >
            <nav className="flex flex-col px-5 py-6 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    active === link.href
                      ? "bg-accent/10 text-accent border border-accent/30"
                      : "text-primary/80 hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Plan a Trip on WhatsApp
                <span aria-hidden>→</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}