import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Базовый",
    price: "1 500",
    unit: "от / уборка",
    color: "border-slate-200",
    badge: "",
    desc: "Поддерживающая уборка для тех, кто уже следит за чистотой",
    features: [
      "Уборка до 40 кв.м",
      "Мытьё полов",
      "Уборка пыли",
      "Чистка санузла",
      "Вынос мусора",
    ],
    excluded: ["Мойка окон", "Химчистка мебели", "Уборка балкона"],
    cta: "Заказать",
    ctaStyle: "border border-sky-400 text-sky-600 hover:bg-sky-50",
  },
  {
    name: "Стандарт",
    price: "3 500",
    unit: "от / уборка",
    color: "border-sky-500 ring-2 ring-sky-500",
    badge: "Популярный",
    desc: "Полноценная генеральная уборка квартиры или офиса",
    features: [
      "Уборка до 80 кв.м",
      "Мытьё полов с полиролью",
      "Уборка пыли со всех поверхностей",
      "Чистка санузла и кухни",
      "Мытьё окон изнутри",
      "Вынос мусора",
    ],
    excluded: ["Химчистка мебели", "Мойка окон снаружи"],
    cta: "Заказать",
    ctaStyle: "bg-sky-500 hover:bg-sky-600 text-white shadow-md",
  },
  {
    name: "Премиум",
    price: "7 000",
    unit: "от / уборка",
    color: "border-sky-700",
    badge: "Всё включено",
    desc: "Максимально полная уборка без исключений",
    features: [
      "Уборка любой площади",
      "Полный комплекс уборки",
      "Мытьё окон внутри и снаружи",
      "Химчистка мягкой мебели",
      "Уборка балкона/лоджии",
      "Обработка холодильника и духовки",
      "Приоритетный выезд",
    ],
    excluded: [],
    cta: "Заказать",
    ctaStyle: "bg-sky-700 hover:bg-sky-800 text-white shadow-md",
  },
];

const extras = [
  { name: "Мойка одного окна", price: "от 300 ₽" },
  { name: "Чистка дивана (1 место)", price: "от 800 ₽" },
  { name: "Уборка балкона", price: "от 1 500 ₽" },
  { name: "Чистка холодильника", price: "от 500 ₽" },
  { name: "Чистка духовки", price: "от 700 ₽" },
  { name: "Чистка ковра (1 кв.м)", price: "от 150 ₽" },
  { name: "Глажка белья (1 час)", price: "от 400 ₽" },
  { name: "Уборка после ремонта", price: "от 5 000 ₽" },
];

export default function Prices() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name="Tag" size={32} className="text-sky-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Цены и тарифы</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. Выберите подходящий тариф или составьте индивидуальный заказ
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-2xl border-2 p-8 relative flex flex-col ${plan.color} hover:shadow-xl transition-shadow`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-sky-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-slate-800">{plan.price} ₽</span>
                    <span className="text-slate-400 text-sm">{plan.unit}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <Icon name="Check" size={14} className="text-emerald-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                  {plan.excluded.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <Icon name="X" size={14} className="text-slate-300 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacts"
                  className={`w-full text-center py-3 rounded-xl font-semibold transition-all ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">Дополнительные услуги</h2>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {extras.map((item, i) => (
              <div key={item.name} className={`flex items-center justify-between px-6 py-4 ${i < extras.length - 1 ? "border-b border-slate-100" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full" />
                  <span className="text-slate-700 text-sm">{item.name}</span>
                </div>
                <span className="font-semibold text-slate-800 text-sm">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-sky-50 rounded-2xl p-6 flex gap-4">
            <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
              <Icon name="Info" size={20} className="text-sky-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-800 mb-1">Важная информация</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Окончательная стоимость уборки рассчитывается индивидуально с учётом площади, состояния помещения и перечня работ. 
                Для точного расчёта свяжитесь с нашим менеджером — это бесплатно и ни к чему не обязывает.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
