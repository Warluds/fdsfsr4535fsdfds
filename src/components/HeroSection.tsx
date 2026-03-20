import { motion } from "framer-motion";
import heroImage from "@/assets/hero-mine.jpg";

const heavySlide = { type: "spring" as const, duration: 0.8, bounce: 0 };

const HeroSection = () => (
  <section className="relative min-h-screen flex items-end overflow-hidden pt-16">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Open pit mine Kazakhstan" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
    </div>

    <div className="relative container mx-auto px-6 pb-20 lg:pb-32">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...heavySlide, delay: 0.2 }}
        >
          <span className="font-mono-data text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
            Kazakhstan · Central Asia · HKEX
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...heavySlide, delay: 0.4 }}
          className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] mb-8"
        >
          <span className="text-gradient-copper">Вертикальная</span>
          <br />
          <span className="text-foreground">интеграция.</span>
          <br />
          <span className="text-foreground">Геологическая</span>
          <br />
          <span className="text-gradient-copper">определённость.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...heavySlide, delay: 0.6 }}
          className="text-muted-foreground text-lg lg:text-xl max-w-2xl leading-relaxed font-body"
        >
          От разведки до IPO. DELTA создаёт первую в Центральной Азии 
          полностью интегрированную горнодобывающую инновационную экосистему.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...heavySlide, delay: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <a href="#vertical" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide rounded-sm hover:translate-y-px active:translate-y-[2px] transition-transform">
            Узнать больше
          </a>
          <a href="#contact" className="inline-flex items-center px-6 py-3 border border-border text-foreground font-display font-semibold text-sm tracking-wide rounded-sm hover:bg-secondary transition-colors">
            Связаться
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
