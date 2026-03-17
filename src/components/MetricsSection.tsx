import { motion } from "framer-motion";
import copperOre from "@/assets/copper-ore-texture.jpg";

const metrics = [
  { label: "Запасы сурьмы", value: "49 000", unit: "тонн Sb" },
  { label: "Объём руды", value: "1.9M", unit: "тонн" },
  { label: "Инвестиции 2026", value: "$20M", unit: "USD" },
  { label: "Delta Hub", value: "16 000", unit: "кв. м" },
  { label: "Наследие", value: "40", unit: "лет" },
  { label: "Лицензии", value: "3", unit: "Cu / Au" },
];

const heavySlide = { type: "spring" as const, duration: 0.8, bounce: 0 };

const MetricsSection = () => (
  <section className="relative py-24 border-t border-border overflow-hidden" id="about">
    {/* Subtle ore texture */}
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
      <img src={copperOre} alt="" className="w-full h-full object-cover" />
    </div>

    <div className="container mx-auto px-6 relative">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono-data text-xs uppercase tracking-[0.3em] text-primary mb-4 block"
      >
        Ключевые показатели
      </motion.span>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-border rounded-lg overflow-hidden">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...heavySlide, delay: i * 0.1 }}
            className="border-r border-b border-border last:border-r-0 p-6 glass-card"
          >
            <span className="text-xs font-mono-data uppercase tracking-widest text-primary/80 block mb-3">{m.label}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-display font-bold tracking-tighter">{m.value}</span>
            </div>
            <span className="text-sm text-muted-foreground font-body mt-1 block">{m.unit}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
