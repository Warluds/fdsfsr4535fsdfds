import { motion } from "framer-motion";
import signingFlags from "@/assets/signing-flags.jpg";
import satbayev from "@/assets/satbayev-university.jpg";

const timeline = [
  { year: "1986", text: "Основание Ганьсуского сурьмяного завода" },
  { year: "1992", text: "Официальный ввод в эксплуатацию — единственное в провинции Ганьсу предприятие полного цикла" },
  { year: "2004", text: "Расширение металлургического производства: 150 000 тонн руды/год, 3 000 тонн рафинированной сурьмы" },
  { year: "2024", text: "Создание DELTA Mining Consultancy. Приобретение Copper & Gold. Три лицензии в Казахстане" },
  { year: "2026", text: "Инвестиции $20M. Начало строительства Delta Hub" },
  { year: "2027+", text: "IPO и листинг Gansu Longxing на HKEX" },
];

const HeritageSection = () => (
  <section className="py-24 border-t border-border" id="heritage">
    <div className="container mx-auto px-6">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono-data text-xs uppercase tracking-[0.3em] text-primary mb-4 block"
      >
        Наследие и структура
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-display font-bold tracking-tighter mb-16"
      >
        <span className="text-gradient-copper">40 лет</span> в горной индустрии
      </motion.h2>

      {/* Photos grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-lg border border-border"
        >
          <img src={signingFlags} alt="Подписание соглашения Казахстан-Китай" className="w-full h-72 object-cover" />
          <div className="p-4 bg-card">
            <p className="text-sm text-muted-foreground">Подписание соглашения о сотрудничестве. Казахстан—Китай</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="overflow-hidden rounded-lg border border-border"
        >
          <img src={satbayev} alt="Встреча в Satbayev University" className="w-full h-72 object-cover" />
          <div className="p-4 bg-card">
            <p className="text-sm text-muted-foreground">Рабочая встреча с Satbayev University, Алматы</p>
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {timeline.map((t, i) => (
          <motion.div
            key={t.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border-l-2 border-primary/40 pl-6 py-4"
          >
            <span className="font-mono-data text-2xl font-bold text-primary block mb-2">{t.year}</span>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Corporate structure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-8 border border-border rounded-lg glass-card"
      >
        <h3 className="font-display text-lg font-semibold mb-4">Корпоративная структура</h3>
        <div className="flex flex-wrap gap-3 items-center text-sm font-mono-data text-muted-foreground">
          <span className="px-3 py-1.5 border border-primary/30 rounded-sm text-primary">Gansu Longxing Antimony Industry</span>
          <span className="text-primary">→</span>
          <span className="px-3 py-1.5 border border-border rounded-sm">Beijing Fuxing Yihua Technology</span>
          <span className="text-primary">→</span>
          <span className="px-3 py-1.5 border border-accent/30 rounded-sm text-accent">DELTA Mining Consultancy</span>
          <span className="text-primary">→</span>
          <span className="px-3 py-1.5 border border-border rounded-sm">Copper & Gold (KZ)</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeritageSection;
