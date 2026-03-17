const FooterSection = () => (
  <footer className="py-16 border-t border-border" id="contact">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight mb-2">
            <span className="text-gradient-copper">DELTA</span>
          </h3>
          <p className="text-sm text-muted-foreground font-body">Mining Consultancy</p>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xs">
            Международная инженерно-горнодобывающая консалтинговая компания. Казахстан.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-primary">Направления</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Геологоразведка</li>
            <li>Добыча и валидация</li>
            <li>Лабораторный анализ</li>
            <li>Металлургические испытания</li>
            <li>Инженерные заключения</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-primary">Контакты</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Казахстан, Алматы</p>
            <p className="font-mono-data">info@deltamining.kz</p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-mono-data">
          © 2025 DELTA Mining Consultancy. Все права защищены.
        </p>
        <p className="text-xs text-muted-foreground font-mono-data">
          Дочерняя компания Beijing Fuxing Yihua Technology Co., Ltd.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
