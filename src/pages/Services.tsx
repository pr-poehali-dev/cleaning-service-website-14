import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Home",
    title: "Уборка квартир",
    badge: "Популярное",
    badgeColor: "bg-sky-100 text-sky-700",
    desc: "Комплексная уборка жилых помещений любой площади. Мы приводим в порядок каждый уголок вашего дома — от кухни до санузла.",
    items: ["Мытьё полов и плинтусов", "Уборка пыли со всех поверхностей", "Чистка сантехники", "Мытьё зеркал и стёкол", "Вынос мусора"],
  },
  {
    icon: "Building2",
    title: "Уборка офисов",
    badge: "Для бизнеса",
    badgeColor: "bg-emerald-100 text-emerald-700",
    desc: "Поддержание чистоты в офисных помещениях: ежедневная уборка, мытьё окон, дезинфекция рабочих поверхностей.",
    items: ["Ежедневная поддерживающая уборка", "Мытьё окон и стеклянных перегородок", "Чистка ковров и мягкой мебели", "Дезинфекция поверхностей", "Вывоз офисного мусора"],
  },
  {
    icon: "Sparkles",
    title: "Уборка после ремонта",
    badge: "Специальное",
    badgeColor: "bg-amber-100 text-amber-700",
    desc: "Профессиональное удаление строительной пыли, остатков краски, цемента и других загрязнений после ремонтных работ.",
    items: ["Удаление строительной пыли", "Чистка от остатков краски и шпатлёвки", "Мытьё окон после монтажа", "Уборка мусора после ремонта", "Полировка поверхностей"],
  },
  {
    icon: "Sofa",
    title: "Химчистка мебели",
    badge: "",
    badgeColor: "",
    desc: "Глубокая чистка диванов, кресел, матрасов и ковров с применением профессионального оборудования.",
    items: ["Чистка диванов и кресел", "Обработка матрасов", "Чистка ковров и ковровых покрытий", "Удаление пятен и запахов", "Дезинфицирующая обработка"],
  },
  {
    icon: "Droplets",
    title: "Мытьё окон",
    badge: "",
    badgeColor: "",
    desc: "Профессиональная мойка окон и витражей снаружи и внутри. Работаем на любых этажах.",
    items: ["Мытьё стёкол изнутри и снаружи", "Чистка рам и подоконников", "Обработка москитных сеток", "Работа на любых этажах", "Без разводов и пятен"],
  },
  {
    icon: "Refrigerator",
    title: "Уборка кухни",
    badge: "",
    badgeColor: "",
    desc: "Тщательная уборка кухонного пространства: плита, духовка, холодильник, вытяжка и все поверхности.",
    items: ["Чистка плиты и духовки", "Мытьё холодильника внутри", "Обезжиривание вытяжки", "Чистка кафельных поверхностей", "Уборка кухонного гарнитура"],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name="Sparkles" size={32} className="text-sky-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Наши услуги</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Полный спектр профессиональных клининговых услуг для дома, офиса и любых других помещений
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all p-8 group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 bg-sky-50 group-hover:bg-sky-100 rounded-2xl flex items-center justify-center transition-colors">
                    <Icon name={s.icon} size={28} className="text-sky-600" fallback="Sparkles" />
                  </div>
                  {s.badge && (
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.badgeColor}`}>
                      {s.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-4 h-4 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                        <Icon name="Check" size={10} className="text-sky-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Как мы работаем</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "PhoneCall", title: "Заявка", desc: "Звоните или пишите — ответим за 15 минут" },
              { step: "02", icon: "CalendarCheck", title: "Договор", desc: "Согласуем дату, время и список работ" },
              { step: "03", icon: "Truck", title: "Выезд", desc: "Наша бригада приезжает точно в срок" },
              { step: "04", icon: "CheckCircle", title: "Результат", desc: "Принимаете работу и платите только за результат" },
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-black text-sky-100 mb-3">{step.step}</div>
                <div className="w-10 h-10 bg-sky-100 rounded-xl mx-auto flex items-center justify-center mb-3">
                  <Icon name={step.icon} size={20} className="text-sky-600" fallback="CheckCircle" />
                </div>
                <h4 className="font-bold text-slate-800 mb-1">{step.title}</h4>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
