import { motion } from "framer-motion";

const licenses = [
  { type: "Cu", name: "Медное месторождение №1", status: "Геологоразведка", element: "Медь" },
  { type: "Cu", name: "Медное месторождение №2", status: "Геологоразведка", element: "Медь" },
  { type: "Au", name: "Золотое месторождение", status: "Геологоразведка", element: "Золото" },
];

const AssetsSection = () => (
  <section className="py-24 border-t border-border" id="assets">
    <div className="container mx-auto px-6">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono-data text-xs uppercase tracking-[0.3em] text-primary mb-4 block"
      >
        Портфель активов
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-display font-bold tracking-tighter mb-12"
      >
        Лицензии <span className="text-gradient-copper">Казахстан</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {licenses.map((lic, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-border rounded-lg p-8 glass-card group hover:border-primary/40 transition-colors"
          >
            <span className="font-mono-data text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{lic.type}</span>
            <h4 className="font-display text-lg font-semibold mt-4 mb-2">{lic.name}</h4>
            <div className="flex gap-3 text-xs font-mono-data">
              <span className="px-2 py-1 bg-secondary rounded-sm text-secondary-foreground">{lic.element}</span>
              <span className="px-2 py-1 bg-secondary rounded-sm text-muted-foreground">{lic.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-sm text-muted-foreground max-w-xl leading-relaxed"
      >
        DELTA успешно осуществила приобретение казахстанской компании Copper & Gold, 
        получив три лицензии на геологоразведку — включая две на медные месторождения и одну на золото.
      </motion.p>
    </div>
  </section>
);

export default AssetsSection;
