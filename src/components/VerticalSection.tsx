import { motion } from "framer-motion";

const steps = [
  {
    title: "Геологоразведка",
    description: "Полевые работы, геологическое картирование и оценка минеральных ресурсов на территории Казахстана.",
  },
  {
    title: "Добыча и валидация",
    description: "Добыча и валидация рудного сырья — медь (Cu), золото (Au) и другие твёрдые полезные ископаемые.",
  },
  {
    title: "Лабораторный анализ",
    description: "Полный комплекс лабораторных анализов руд и минералов с применением современного оборудования.",
  },
  {
    title: "Металлургические испытания",
    description: "Металлургические и технологические испытания для определения оптимальных параметров переработки.",
  },
  {
    title: "Инженерные заключения",
    description: "Подготовка технических заключений для принятия производственных и инвестиционных решений, включая подготовку к IPO на HKEX.",
  },
];

const VerticalSection = () => (
  <section className="py-24 border-t border-border" id="vertical">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono-data text-xs uppercase tracking-[0.3em] text-primary mb-4 block"
          >
            Интегрированная модель
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold tracking-tighter mb-6"
          >
            Вертикаль
            <br />
            <span className="text-gradient-copper">полного цикла</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground leading-relaxed max-w-md"
          >
            DELTA формирует вертикально выстроенную модель, которая охватывает каждый этап — от первого удара кирки до листинга на бирже.
          </motion.p>
        </div>

        <div>
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0, delay: i * 0.1 }}
              className="relative pl-12 pb-14 last:pb-0 border-l border-border"
            >
              <div className="absolute -left-[9px] top-0 w-[18px] h-[18px] rounded-full bg-primary border-4 border-background shadow-sm" />
              <span className="font-mono-data text-primary mb-2 block text-sm">0{i + 1}</span>
              <h4 className="text-xl font-display font-semibold mb-3">{step.title}</h4>
              <p className="text-muted-foreground max-w-md leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VerticalSection;
