import {
  Send,
  MessageCircle,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const WEB3FORMS_KEY = "489dc59c-252d-4dfd-8080-1f7e57748ff6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo mensaje de ${formData.name} - ICA Web`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Empecemos tu proyecto
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Contanos tu idea y te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">
              Hablemos de tu próximo proyecto
            </h3>

            <a
              href="https://wa.me/5492942553671"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-navy-900/50 border border-navy-800 hover:border-green-500/30 rounded-xl p-5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <MessageCircle size={22} className="text-green-400" />
              </div>
              <div>
                <div className="text-white font-medium">WhatsApp</div>
                <div className="text-gray-500 text-sm">Respuesta inmediata</div>
              </div>
            </a>

            <a
              href="mailto:imacastro06@gmail.com"
              className="flex items-center gap-4 bg-navy-900/50 border border-navy-800 hover:border-gold-500/30 rounded-xl p-5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <Mail size={22} className="text-gold-400" />
              </div>
              <div>
                <div className="text-white font-medium">Email</div>
                <div className="text-gray-500 text-sm">
                  imacastro06@gmail.com
                </div>
              </div>
            </a>

            <a
              href="tel:+542942553671"
              className="flex items-center gap-4 bg-navy-900/50 border border-navy-800 hover:border-gold-500/30 rounded-xl p-5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <Phone size={22} className="text-gold-400" />
              </div>
              <div>
                <div className="text-white font-medium">Teléfono</div>
                <div className="text-gray-500 text-sm">+54 2942 553671</div>
              </div>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-navy-900/50 border border-navy-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-navy-900/50 border border-navy-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-navy-900/50 border border-navy-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                placeholder="Contanos sobre tu proyecto..."
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3">
                <CheckCircle size={18} />
                <span className="text-sm">
                  Mensaje enviado correctamente. Te responderemos pronto.
                </span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <AlertCircle size={18} />
                <span className="text-sm">
                  Error al enviar. Intentá por WhatsApp o email directo.
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
