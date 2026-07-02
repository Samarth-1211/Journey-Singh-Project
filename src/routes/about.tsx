import { motion } from "framer-motion";
import { Users, Palmtree, Mountain, Landmark, Settings2, Sparkles } from "lucide-react";
import logoAsset from "@/assets/JourneySingh.jpg";

const TRIP_TYPES = [
  { icon: Users, label: "Family Vacations" },
  { icon: Palmtree, label: "Leisure Trips" },
  { icon: Mountain, label: "Adventure Treks" },
  { icon: Landmark, label: "Spiritual Pilgrimages" },
  { icon: Settings2, label: "Customized Tours" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* soft background accents, consistent with rest of site */}
      <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary to-accent/40 rotate-3 opacity-90" />
              <div className="relative rounded-[2.5rem] border border-white/20 bg-primary/95 backdrop-blur-xl p-10 -rotate-2 shadow-soft">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  src={logoAsset}
                  alt="Journey Singh"
                  className="mx-auto w-32 h-32 rounded-full ring-4 ring-accent/40 object-cover"
                />
                <div className="mt-6 text-center">
                  <div className="font-display font-bold text-xl text-white">
                    Journey Singh
                  </div>
                  <div className="mt-1 text-xs tracking-[0.25em] uppercase text-accent font-semibold">
                    Trek · Travel · Leisure
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-medium text-white/80">
                  <Sparkles size={14} className="text-accent shrink-0" />
                  Built by corporate professionals turned full-time travelers
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="text-accent font-semibold text-sm tracking-[0.3em] uppercase">
              Who we are
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold text-primary text-balance">
              Expert planning, from people who've
              <span className="font-script text-accent"> actually gone.</span>
            </h2>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Founded by seasoned corporate professionals and passionate
              travelers, Journey Singh brings years of travel experience from
              across India and the world to help you plan unforgettable
              journeys.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              From family vacations and leisure trips to adventure treks and
              spiritual pilgrimages to customized tours, we create seamless
              travel experiences that are memorable, hassle-free, and
              value-driven.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {TRIP_TYPES.map((t, i) => (
                <motion.span
                  key={t.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary/80 hover:border-accent/40 hover:text-accent transition-colors"
                >
                  <t.icon size={15} className="text-accent" />
                  {t.label}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 font-display text-xl md:text-2xl font-bold text-primary italic"
            >
              "Your journey deserves expert planning."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}