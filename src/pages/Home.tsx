import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const highlights = [
  { icon: "Shield", title: "Безопасные средства", desc: "Только сертифицированная химия, безвредная для детей и животных" },
  { icon: "Clock", title: "Точно в срок", desc: "Прибываем вовремя и укладываемся в оговорённое время" },
  { icon: "Star", title: "Гарантия качества", desc: "Если что-то не понравилось — переделаем бесплатно" },
  { icon: "Users", title: "Опытная команда", desc: "Каждый сотрудник прошёл обучение и проверку" },
];

const services = [
  { icon: "Home", title: "Уборка квартир", desc: "Генеральная и поддерживающая уборка жилых помещений", link: "/services" },
  { icon: "Building2", title: "Уборка офисов", desc: "Ежедневная и разовая уборка коммерческих помещений", link: "/services" },
  { icon: "Sparkles", title: "После ремонта", desc: "Устранение строительной пыли и загрязнений", link: "/services" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100/60 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <Icon name="Info" size={13} />
                <span>Учебный проект · Тема: Клининговые услуги</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-5">
                Профессиональный{" "}
                <span className="text-sky-500">клининг</span>{" "}
                для вашего дома
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Добро пожаловать на сайт <strong className="text-slate-700">ЧистоДом</strong> — учебный проект, 
                посвящённый услугам профессионального клининга. Здесь вы найдёте информацию 
                об услугах, ценах, преимуществах и отзывах клиентов.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  Наши услуги
                </Link>
                <Link
                  to="/prices"
                  className="bg-white hover:bg-sky-50 text-sky-600 font-semibold px-6 py-3 rounded-xl border border-sky-200 transition-all"
                >
                  Посмотреть цены
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/e7d41c78-c99d-4dc1-b2bc-6fc3e5d4a31c/files/f3f5963f-443b-4ce2-b228-d1c1a377d9ed.jpg"
                  alt="Чистый дом"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-sky-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Выполнено уборок</p>
                  <p className="text-lg font-bold text-slate-800">1 200+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About notice */}
      <section className="bg-sky-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-start md:items-center gap-4">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
            <Icon name="BookOpen" size={20} className="text-white" />
          </div>
          <div>
            <p className="font-semibold text-lg">О данном сайте</p>
            <p className="text-sky-100 text-sm mt-0.5">
              Это учебный сайт, созданный в рамках учебного задания. Тема сайта — профессиональные клининговые услуги. 
              Все данные являются демонстрационными и не являются публичной офертой.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Почему выбирают нас</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Мы делаем всё, чтобы ваш дом сиял чистотой, а вы получали удовольствие от результата</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="bg-sky-50 rounded-2xl p-6 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-sky-100 group-hover:bg-sky-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon name={item.icon} size={24} className="text-sky-600" fallback="Star" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Наши услуги</h2>
            <p className="text-slate-500">Широкий спектр клининговых решений для любых задач</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-5">
                  <Icon name={s.icon} size={28} className="text-sky-600" fallback="Sparkles" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{s.desc}</p>
                <Link to={s.link} className="text-sky-600 font-semibold text-sm hover:text-sky-700 flex items-center gap-1 group">
                  Подробнее
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-md inline-block">
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы к чистоте?</h2>
          <p className="text-sky-100 text-lg mb-8">Оставьте заявку и мы свяжемся с вами в течение 15 минут</p>
          <Link
            to="/contacts"
            className="bg-white text-sky-600 font-bold px-8 py-4 rounded-xl hover:bg-sky-50 transition-all shadow-lg inline-block"
          >
            Оставить заявку
          </Link>
        </div>
      </section>
    </Layout>
  );
}
