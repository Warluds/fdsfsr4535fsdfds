import { motion } from "framer-motion";
import handshake from "@/assets/handshake.jpg";
import meetingBeijing from "@/assets/meeting-beijing.jpg";
import signingCeremony from "@/assets/signing-ceremony.jpg";

const PhilosophySection = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono-data text-xs uppercase tracking-[0.3em] text-primary mb-4 block"
          >
            Философия
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold tracking-tighter mb-8"
          >
            Честность. Надёжность.
            <br />
            <span className="text-gradient-copper">Прагматизм.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground leading-relaxed mb-6"
          >
            DELTA Mining Consultancy выходит на рынок Казахстана не как подрядчик, 
            а как инженерно-технологический игрок, формирующий новый стандарт горнодобывающей индустрии в регионе.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground leading-relaxed"
          >
            Компания рассчитывает на совместное динамичное развитие с рынком Казахстана 
            и всего Центрально-Азиатского региона, включая планы по IPO и листингу на Гонконгской фондовой бирже.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 overflow-hidden rounded-lg border border-border"
          >
            <img src={meetingBeijing} alt="Деловая встреча в Пекине" className="w-full h-56 object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="overflow-hidden rounded-lg border border-border"
          >
            <img src={handshake} alt="Рукопожатие партнёров" className="w-full h-40 object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-lg border border-border"
          >
            <img src={signingCeremony} alt="Церемония подписания" className="w-full h-40 object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default PhilosophySection;
