import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Анна Смирнова",
    role: "Постоянный клиент",
    rating: 5,
    date: "15 марта 2026",
    text: "Пользуюсь услугами ЧистоДом уже больше года. Ребята всегда приходят вовремя, работают аккуратно и качественно. После их уборки квартира блестит! Отдельное спасибо за бережное отношение к вещам.",
    avatar: "А",
    color: "bg-sky-100 text-sky-700",
  },
  {
    name: "Михаил Козлов",
    role: "Офисный клиент",
    rating: 5,
    date: "2 марта 2026",
    text: "Заказывали уборку офиса площадью 200 кв.м. Команда справилась за 4 часа — всё чисто, никаких следов от мойки, окна блестят. Договор подписали онлайн, очень удобно. Будем работать на постоянной основе.",
    avatar: "М",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Елена Петрова",
    role: "Клиент",
    rating: 5,
    date: "20 февраля 2026",
    text: "Заказала уборку после ремонта. Строительной пыли было очень много, я думала, что за один день не управятся. Ошиблась! Три специалиста работали слаженно, к вечеру всё было идеально. Рекомендую!",
    avatar: "Е",
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Дмитрий Васильев",
    role: "Клиент",
    rating: 4,
    date: "10 февраля 2026",
    text: "Хорошая работа в целом. Уборку провели качественно, претензий к результату нет. Единственное — немного задержались на 20 минут. Но предупредили заранее, так что всё нормально. Цена вполне адекватная.",
    avatar: "Д",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Ольга Новикова",
    role: "Постоянный клиент",
    rating: 5,
    date: "28 января 2026",
    text: "Беру генеральную уборку раз в месяц уже год. Качество стабильно высокое. Особенно нравится, что используют безопасную химию — у меня дома маленький ребёнок и собака, и это очень важно.",
    avatar: "О",
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Сергей Иванов",
    role: "Клиент",
    rating: 5,
    date: "15 января 2026",
    text: "Заказывал химчистку дивана и двух кресел. Результат превзошёл ожидания — мебель выглядит как новая! Мастер работал аккуратно, объяснил весь процесс. Цена за такое качество более чем разумная.",
    avatar: "С",
    color: "bg-sky-100 text-sky-700",
  },
];

const stats = [
  { value: "4.9", label: "Средняя оценка", icon: "Star" },
  { value: "1 200+", label: "Отзывов", icon: "MessageSquare" },
  { value: "98%", label: "Рекомендуют нас", icon: "ThumbsUp" },
];

export default function Reviews() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name="MessageSquare" size={32} className="text-sky-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Отзывы клиентов</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Мнение реальных клиентов — лучшее подтверждение качества нашей работы
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-sky-600 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="flex justify-center mb-2">
                  <Icon name={s.icon} size={24} className="text-sky-200" fallback="Star" />
                </div>
                <div className="text-3xl font-black mb-1">{s.value}</div>
                <div className="text-sky-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg p-6 transition-shadow flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${r.color}`}>
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{r.name}</p>
                    <p className="text-slate-400 text-xs">{r.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={13}
                        className={i < r.rating ? "text-amber-400" : "text-slate-200"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">"{r.text}"</p>
                <p className="text-slate-300 text-xs mt-4">{r.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-sky-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Станьте следующим довольным клиентом</h2>
          <p className="text-slate-500 mb-6">Закажите уборку сегодня и убедитесь в качестве нашей работы лично</p>
          <a href="/contacts" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-xl inline-block transition-all shadow-md">
            Оставить заявку
          </a>
        </div>
      </section>
    </Layout>
  );
}
