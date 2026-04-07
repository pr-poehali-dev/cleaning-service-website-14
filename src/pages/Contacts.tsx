import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";
import func2url from "../../backend/func2url.json";

const contactInfo = [
  {
    icon: "Phone",
    title: "Телефон",
    value: "+7 917 819 84 07",
    sub: "Бесплатный звонок по России",
  },
  {
    icon: "Mail",
    title: "Email",
    value: "zhizhin2006@list.ru",
    sub: "Ответим в течение часа",
  },
  {
    icon: "MapPin",
    title: "Офис",
    value: "Москва, ул. Чистая, д. 1",
    sub: "Пн–Пт: 9:00–18:00",
  },
  {
    icon: "Clock",
    title: "График работы",
    value: "Ежедневно 8:00–22:00",
    sub: "Выезды 7 дней в неделю",
  },
];

export default function Contacts() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(func2url["send-contact"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service, comment }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setService("");
        setComment("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name="Phone" size={32} className="text-sky-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Контакты</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом — ответим быстро и поможем рассчитать стоимость уборки
          </p>
        </div>
      </section>

      {/* Contacts + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Как с нами связаться</h2>
            <div className="space-y-5">
              {contactInfo.map((c) => (
                <div key={c.title} className="flex items-start gap-4 p-5 rounded-2xl bg-sky-50 hover:bg-sky-100 transition-colors">
                  <div className="w-11 h-11 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={22} className="text-sky-600" fallback="Phone" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-0.5">{c.title}</p>
                    <p className="font-semibold text-slate-800">{c.value}</p>
                    <p className="text-slate-400 text-sm">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-slate-800 mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-3">
                {["ВКонтакте", "Telegram", "WhatsApp"].map((net) => (
                  <button key={net} className="px-4 py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 text-sm font-medium rounded-xl transition-colors border border-sky-200">
                    {net}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Оставить заявку</h2>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={36} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Заявка отправлена!</h3>
                  <p className="text-slate-500 text-sm">Мы получили вашу заявку и перезвоним в течение 15 минут.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sky-600 text-sm font-medium hover:underline"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Тип услуги</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all text-sm bg-white"
                    >
                      <option value="">Выберите услугу</option>
                      <option>Уборка квартиры</option>
                      <option>Уборка офиса</option>
                      <option>Уборка после ремонта</option>
                      <option>Химчистка мебели</option>
                      <option>Мытьё окон</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Комментарий</label>
                    <textarea
                      rows={4}
                      placeholder="Опишите задачу, площадь помещения и любые пожелания..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center">Ошибка при отправке. Попробуйте ещё раз.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
                  >
                    {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                  </button>
                  <p className="text-slate-400 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>

            <div className="mt-6 bg-sky-50 rounded-2xl p-5 flex gap-3">
              <Icon name="Zap" size={20} className="text-sky-600 shrink-0 mt-0.5" />
              <p className="text-slate-600 text-sm">
                <span className="font-semibold text-slate-800">Быстрый ответ:</span> перезвоним в течение 15 минут в рабочее время. В остальное время — ответим первым делом утром.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}