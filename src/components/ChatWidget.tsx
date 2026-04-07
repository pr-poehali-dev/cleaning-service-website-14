import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  text: string;
  from: "bot" | "user";
  time: string;
}

const getTime = () =>
  new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

const BOT_GREETING =
  "Здравствуйте! Напишите выбранную вами услугу и вашу почту — мы с вами свяжемся в ближайшее время.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [greeted, setGreeted] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && !greeted) {
      setTimeout(() => {
        setMessages([{ id: 1, text: BOT_GREETING, from: "bot", time: getTime() }]);
        setGreeted(true);
      }, 500);
    }
    if (open) setShowBadge(false);
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: Date.now(), text, from: "user", time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botReply: Message = {
        id: Date.now() + 1,
        text: "Спасибо! Мы получили ваш запрос и свяжемся с вами в ближайшее время.",
        from: "bot",
        time: getTime(),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl border border-sky-100 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-sky-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="MessageCircle" size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Онлайн-консультация</p>
                <p className="text-sky-200 text-xs">Обычно отвечаем быстро</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <Icon name="X" size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
                    msg.from === "user"
                      ? "bg-sky-500 text-white rounded-br-sm"
                      : "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-sm"
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                  <p
                    className={`text-[10px] mt-1 ${
                      msg.from === "user" ? "text-sky-200" : "text-slate-400"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <p className="text-slate-400 text-sm">Начните диалог...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-100 bg-white flex gap-2 items-end">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Напишите сообщение..."
              rows={1}
              className="flex-1 resize-none text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-sky-400 transition-colors text-slate-700 placeholder:text-slate-400"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl bg-sky-500 hover:bg-sky-600 disabled:bg-slate-200 text-white flex items-center justify-center transition-colors shrink-0"
            >
              <Icon name="Send" size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center relative"
      >
        <Icon name={open ? "X" : "MessageCircle"} size={24} />
        {showBadge && !open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold">
            1
          </span>
        )}
      </button>
    </div>
  );
}
