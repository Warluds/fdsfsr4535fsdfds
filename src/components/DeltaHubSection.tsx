import { motion } from "framer-motion";
import labImage from "@/assets/laboratory.jpg";

const facilities = [
  "Геологическая лаборатория",
  "Металлургический исследовательский институт",
  "Центр сервисных услуг буровых технологий",
  "Инновационный центр — первый в Центральной Азии",
];

const DeltaHubSection = () => (
  <section className="py-24 border-t border-border" id="hub">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono-data text-xs uppercase tracking-[0.3em] text-primary mb-4 block"
          >
            Строительство 2026
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold tracking-tighter mb-6"
          >
            <span className="text-gradient-copper">Delta Hub</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground leading-relaxed mb-8"
          >
            Земельный участок площадью 2 гектара. Общая площадь застройки — 16 000 кв. м. 
            Единственный в регионе инновационный центр, объединяющий аналитические и технологические функции в единую систему.
          </motion.p>

          <div className="space-y-4">
            {facilities.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="font-mono-data text-xs text-primary w-6">{String(i + 1).padStart(2, "0")}</span>
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm font-body">{f}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex gap-8"
          >
            <div className="border-l border-primary pl-4">
              <span className="font-mono-data text-3xl font-bold">2</span>
              <span className="text-sm text-muted-foreground block">га земли</span>
            </div>
            <div className="border-l border-primary pl-4">
              <span className="font-mono-data text-3xl font-bold">16 000</span>
              <span className="text-sm text-muted-foreground block">кв. м застройки</span>
            </div>
            <div className="border-l border-primary pl-4">
              <span className="font-mono-data text-3xl font-bold">$20M</span>
              <span className="text-sm text-muted-foreground block">инвестиции</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-lg border border-border shadow-heavy"
        >
          <img src={labImage} alt="Delta Hub лаборатория" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default DeltaHubSection;
