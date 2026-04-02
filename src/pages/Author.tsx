import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

export default function Author() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name="User" size={32} className="text-sky-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Об авторе</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Информация о студенте, создавшем данный учебный проект
          </p>
        </div>
      </section>

      {/* Author card */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">
            {/* Top banner */}
            <div className="h-32 bg-gradient-to-r from-sky-400 to-sky-600" />

            {/* Content */}
            <div className="px-8 pb-8">
              {/* Avatar */}
              <div className="flex items-end gap-5 -mt-12 mb-6">
                <div className="w-24 h-24 bg-sky-100 border-4 border-white rounded-2xl shadow-md flex items-center justify-center">
                  <span className="text-4xl font-black text-sky-500">И</span>
                </div>
                <div className="pb-2">
                  <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    <Icon name="GraduationCap" size={12} />
                    Студент
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 mb-1">Иванов Иван Иванович</h2>
              <p className="text-sky-600 font-semibold mb-6">Группа: ИС-201</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "User", label: "ФИО", value: "Иванов Иван Иванович" },
                  { icon: "Users", label: "Группа", value: "ИС-201" },
                  { icon: "Building", label: "Специальность", value: "Информационные системы" },
                  { icon: "Calendar", label: "Год создания", value: "2026" },
                ].map((item) => (
                  <div key={item.label} className="bg-sky-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name={item.icon} size={14} className="text-sky-500" fallback="User" />
                      <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">{item.label}</span>
                    </div>
                    <p className="font-semibold text-slate-800">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Icon name="BookOpen" size={18} className="text-sky-600" />
                  О проекте
                </h3>
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  <p>
                    Данный сайт создан в рамках учебного задания по дисциплине <strong className="text-slate-800">«Веб-разработка»</strong>. 
                    Тема проекта: <strong className="text-slate-800">«Клининговые услуги»</strong>.
                  </p>
                  <p>
                    Цель работы — изучить основные принципы построения многостраничных веб-сайтов, 
                    разработать структуру навигации, оформить контент и создать визуально привлекательный интерфейс.
                  </p>
                  <p>
                    Сайт включает 7 страниц: <em>Главная, Услуги, Преимущества, Цены, Отзывы, Контакты</em> и <em>Об авторе</em>. 
                    Все данные, представленные на сайте, являются демонстрационными и не являются публичной офертой.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Icon name="Code" size={18} className="text-sky-600" />
                  Технологии
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"].map((tech) => (
                    <span key={tech} className="bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold px-3 py-1.5 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright note */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm px-5 py-3 rounded-xl font-medium">
            <Icon name="Copyright" size={16} />
            Иванов И.И. · 2026 · Учебный проект
          </div>
          <p className="text-slate-400 text-sm mt-3">
            Все материалы сайта являются учебными и не имеют коммерческого назначения
          </p>
        </div>
      </section>
    </Layout>
  );
}
