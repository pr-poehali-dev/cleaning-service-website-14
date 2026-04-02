import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "ShieldCheck",
    title: "Безопасные средства",
    desc: "Мы используем только сертифицированную эко-химию, которая безвредна для здоровья людей, детей и домашних животных. Все средства имеют российские и европейские сертификаты качества.",
    color: "sky",
  },
  {
    icon: "Award",
    title: "Профессиональная команда",
    desc: "Каждый наш сотрудник прошёл специальное обучение, проверку безопасности и имеет опыт работы не менее 2 лет. Мы регулярно проводим аттестацию персонала.",
    color: "emerald",
  },
  {
    icon: "Timer",
    title: "Точность и пунктуальность",
    desc: "Ценим ваше время. Прибываем строго по расписанию и завершаем работу в оговорённые сроки. При задержке более 15 минут — скидка на заказ.",
    color: "violet",
  },
  {
    icon: "Wrench",
    title: "Профессиональное оборудование",
    desc: "Используем промышленные пылесосы, паровые мойки, специальные швабры и инструменты. Это позволяет достичь максимального результата за минимальное время.",
    color: "orange",
  },
  {
    icon: "RotateCcw",
    title: "Гарантия результата",
    desc: "Если вы недовольны качеством уборки, мы вернёмся и исправим всё бесплатно. Ваше удовлетворение — наш главный приоритет.",
    color: "rose",
  },
  {
    icon: "CreditCard",
    title: "Прозрачные цены",
    desc: "Никаких скрытых платежей. Цена фиксируется до начала работ и не меняется. Вы платите ровно столько, сколько оговорено.",
    color: "sky",
  },
];

const numbers = [
  { value: "7+", label: "лет на рынке" },
  { value: "1 200+", label: "выполненных заказов" },
  { value: "98%", label: "довольных клиентов" },
  { value: "45", label: "специалистов в штате" },
];

export default function Advantages() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name="Award" size={32} className="text-sky-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Наши преимущества</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Узнайте, почему сотни клиентов доверяют нам уборку своих домов и офисов каждый месяц
          </p>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-12 bg-sky-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {numbers.map((n) => (
              <div key={n.label}>
                <div className="text-4xl font-black mb-1">{n.value}</div>
                <div className="text-sky-200 text-sm">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((a) => (
              <div key={a.title} className="rounded-2xl border border-slate-100 bg-white p-8 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 bg-sky-50 group-hover:bg-sky-100 rounded-2xl flex items-center justify-center mb-5 transition-colors">
                  <Icon name={a.icon} size={28} className="text-sky-600" fallback="Star" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{a.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust block */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Нам можно доверять</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Icon name="FileCheck" size={20} className="text-sky-600" />
                Документы и сертификаты
              </h3>
              <ul className="space-y-3">
                {[
                  "ООО зарегистрировано в ФНС России",
                  "Все сотрудники застрахованы",
                  "Сертификаты ISO на используемую химию",
                  "Обязательный договор на все виды работ",
                  "Страхование имущества клиента",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <Icon name="CheckCircle" size={16} className="text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Icon name="Heart" size={20} className="text-rose-500" />
                Забота о клиенте
              </h3>
              <ul className="space-y-3">
                {[
                  "Персональный менеджер для каждого клиента",
                  "Работаем 7 дней в неделю, 8:00–22:00",
                  "Приём заявок онлайн 24/7",
                  "Индивидуальный подход к каждому заказу",
                  "Программа лояльности для постоянных клиентов",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <Icon name="CheckCircle" size={16} className="text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
