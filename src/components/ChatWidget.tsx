import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Smile, ShieldAlert, BadgeInfo } from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! Welcome to Bright Smile Dental Clinic. I am your virtual smile coordinator. How can I help you today?",
      time: "Just now"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessageBadge, setHasNewMessageBadge] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Suggested quick-clicks to drive engagement
  const suggestions = [
    { text: "🦷 Check tooth pain", response: "Oh no! Persistent dental discomfort shouldn't be ignored. If you have intense pain, severe throbbing, or swelling in your cheek, you could have a deep pulp infection needing root canal therapy or professional tooth drainage. Please call our Emergency line at +1 (555) 123-4567 directly so we can schedule a priority same-day relief slot." },
    { text: "💵 Insurance coverages", response: "We are in-network with popular PPO plans, including Delta Dental, Cigna, Aetna, MetLife, Guardian, and Unitedhealthcare. Our clinic coordinators will handle all authorization claims directly. Just upload your carrier detail when you book an appointment!" },
    { text: "📆 Cost of Teeth Whitening", response: "Our premium Philips Zoom in-clinic teeth whitening ranges between $250 - $499 depending on your current enamel shade target. It is safe, quick, and lightens teeth by up to 8 shades in a single visit without sensitivity! Would you like to schedule a session?" },
    { text: "🚗 Parking & Location", response: "We are in Downtown Medical Center at 123 Wellness Avenue, New York, NY 10001 (Ground Floor - Suite A). Complimentary underground clinical parking is available for all visitors with a validated parking ticket!" }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Show a small bounce delay to notify user of chat availability
    const timer = setTimeout(() => {
      setHasNewMessageBadge(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessageBadge(false);
    }
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // 1. Add user message
    const userMsg: Message = {
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // 2. Generate responsive reply contextually or general fall-back
    setTimeout(() => {
      let botResponse = "Thank you for reaching out! To give you accurate clinical assistance, Dr. Sarah Johnson's team would love to speak to you. Please call us at +1 (555) 123-4567 or use our Online Scheduler above, and we'll confirm details immediately.";
      const cleanText = text.toLowerCase();

      if (cleanText.includes("pain") || cleanText.includes("hurt") || cleanText.includes("ache")) {
        botResponse = "If you are experiencing painful tooth pressure or throbbing, it's highly recommended to schedule an emergency consultation. Please call our emergency clinical line at +1 (555) 123-4567 or open our Booking form to request a same-day priority visit.";
      } else if (cleanText.includes("insurance") || cleanText.includes("pay") || cleanText.includes("cost")) {
        botResponse = "We handle major PPO plans including MetLife, Delta Dental, Cigna, Guardian, and Aetna. We can also set up interest-free monthly financing for braces, implants, or cosmetic makeovers! What insurance carrier do you have?";
      } else if (cleanText.includes("hour") || cleanText.includes("open") || cleanText.includes("sunday")) {
        botResponse = "We are open Monday to Saturday from 9:00 AM to 8:00 PM. On Sundays, our physical lobby is closed, but our doctors accept emergency sessions on-call. Reach out here or call if you have a clinical trauma!";
      } else if (cleanText.includes("implant") || cleanText.includes("veneer") || cleanText.includes("cleans")) {
        botResponse = "Dr. Johnson specializes in premium Restorative structures and Cosmetic porcelain work. We achieve highly life-like enamel translucent light reactions. Our consultation has zero-obligations!";
      }

      const botMsg: Message = {
        sender: "bot",
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded chat window */}
      {isOpen && (
        <div className="bg-white hover:shadow-2xl shadow-xl w-80 md:w-96 h-[480px] rounded-2xl border border-slate-100 flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-6 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 bg-teal-50/10 rounded-full flex items-center justify-center border border-white/20">
                <Smile className="h-5 w-5 text-teal-100" />
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-tight font-display">Smile Virtual Assistant</h4>
                <p className="text-[10px] text-teal-100/90 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 bg-green-400 rounded-full inline-block animate-pulse"></span>
                  Replies immediately (clinical-support)
                </p>
              </div>
            </div>
            <button
              onClick={handleOpenToggle}
              className="p-1 hover:bg-white/10 rounded-lg text-teal-100 hover:text-white transition"
              aria-label="Close Assistant"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* HIPAA message */}
          <div className="bg-slate-50 border-b border-slate-100 px-3 py-1.5 text-[9px] text-slate-500 flex items-center gap-1 leading-none justify-center">
            <BadgeInfo className="h-3 w-3 text-teal-600 shrink-0" />
            <span>Complies with clinical data confidentiality protection.</span>
          </div>

          {/* Chats container */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50"
            id="chat-messages-container"
          >
            {messages.map((m, index) => (
              <div
                key={index}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    m.sender === "user"
                      ? "bg-teal-600 text-white rounded-br-none"
                      : "bg-white text-slate-700 border border-slate-100 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.text}</p>
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">
                  {m.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="bg-white border border-slate-100 px-4 py-2.5 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1 text-xs text-slate-400">
                  <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                  <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          {/* Suggested answers */}
          {messages.length === 1 && (
            <div className="p-3 border-t border-slate-100 bg-white space-y-1.5">
              <p className="text-[10px] font-semibold text-slate-400 mb-1 px-1">Or click to learn details:</p>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMessages((prev) => [...prev, { sender: "user", text: s.text, time: "Just now" }]);
                      setIsTyping(true);
                      setTimeout(() => {
                        setMessages((p) => [...p, { sender: "bot", text: s.response, time: "Just now" }]);
                        setIsTyping(false);
                      }, 800);
                    }}
                    className="text-[11px] bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-200 text-slate-600 hover:text-teal-700 font-medium px-2 py-1.5 rounded-xl transition text-left"
                  >
                    {s.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Form write */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage(input);
              }}
              placeholder="Ask a question or describe high pain..."
              className="flex-1 bg-slate-50 text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-500 focus:bg-white transition"
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="p-2 bg-teal-600 text-white hover:bg-teal-700 rounded-xl transition shadow-md shrink-0"
              aria-label="Send query"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>
      )}

      {/* Floating launcher button */}
      <button
        id="live-chat-floating-launcher"
        onClick={handleOpenToggle}
        className="h-14 w-14 rounded-full bg-teal-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center relative group"
        aria-label="Toggle Clinical live assistant drawer"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageSquare className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            {hasNewMessageBadge && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm animate-bounce">
                1
              </span>
            )}
          </>
        )}
      </button>
    </div>
  );
}
