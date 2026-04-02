import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { path: "/", label: "Главная" },
  { path: "/services", label: "Услуги" },
  { path: "/advantages", label: "Преимущества" },
  { path: "/prices", label: "Цены" },
  { path: "/reviews", label: "Отзывы" },
  { path: "/contacts", label: "Контакты" },
  { path: "/author", label: "Об авторе" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-montserrat bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-sky-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center shadow-md group-hover:bg-sky-600 transition-colors">
              <Icon name="Sparkles" size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-sky-700 tracking-tight">
              ЧистоДом
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-sky-500 text-white shadow-sm"
                    : "text-slate-600 hover:bg-sky-50 hover:text-sky-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-sky-50 text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-sky-100 px-6 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? "bg-sky-500 text-white"
                    : "text-slate-600 hover:bg-sky-50 hover:text-sky-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-sky-700 text-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Icon name="Sparkles" size={16} className="text-white" />
                </div>
                <span className="text-lg font-bold">ЧистоДом</span>
              </div>
              <p className="text-sky-200 text-sm leading-relaxed">
                Профессиональный клининг для вашего дома и офиса. Чистота — наша работа.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sky-100">Навигация</h4>
              <div className="grid grid-cols-2 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sky-200 hover:text-white text-sm transition-colors py-0.5"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sky-100">Контакты</h4>
              <div className="space-y-2 text-sky-200 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  <span>info@chistodom.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={14} />
                  <span>Москва, ул. Чистая, д. 1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-sky-600 mt-8 pt-5 text-center text-sky-300 text-sm">
            © Жижин А.Н. 2026. Учебный проект по теме «Клининговые услуги»
          </div>
        </div>
      </footer>
    </div>
  );
}