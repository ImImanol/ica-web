import {
  Send,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
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
    <section id="contacto" className="py-32 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">
            Contacto
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
            Empecemos tu{" "}
            <span className="font-serif italic font-normal">proyecto</span>
          </h2>
          <p className="text-gray-400 font-light mt-4 max-w-2xl">
            Contanos tu idea y te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-8 flex flex-col justify-center">
            <a
              href="https://wa.me/5492942553671"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <MessageCircle size={20} className="text-gray-500 group-hover:text-green-400 transition-colors" />
              <div>
                <div className="text-white font-medium text-sm">WhatsApp</div>
                <div className="text-gray-500 text-xs font-light">Respuesta inmediata</div>
              </div>
            </a>

            <a
              href="mailto:contacto@icaweb.dev"
              className="flex items-center gap-4 group"
            >
              <Mail size={20} className="text-gray-500 group-hover:text-violet-400 transition-colors" />
              <div>
                <div className="text-white font-medium text-sm">contacto@icaweb.dev</div>
                <div className="text-gray-500 text-xs font-light">Email</div>
              </div>
            </a>

            <a
              href="tel:+542942553671"
              className="flex items-center gap-4 group"
            >
              <Phone size={20} className="text-gray-500 group-hover:text-violet-400 transition-colors" />
              <div>
                <div className="text-white font-medium text-sm">+54 2942 553671</div>
                <div className="text-gray-500 text-xs font-light">Teléfono</div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <MapPin size={20} className="text-gray-500" />
              <div>
                <div className="text-white font-medium text-sm">Buenos Aires, AR</div>
                <div className="text-gray-500 text-xs font-light">Ubicación</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="text-xs text-gray-500 tracking-wide mb-3 block font-light">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-gray-800 px-0 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors font-light"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 tracking-wide mb-3 block font-light">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-gray-800 px-0 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors font-light"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 tracking-wide mb-3 block font-light">
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-0 border-b border-gray-800 px-0 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors resize-none font-light"
                placeholder="Contanos sobre tu proyecto..."
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 text-sm font-light">
                <CheckCircle size={16} />
                <span>Mensaje enviado correctamente. Te responderemos pronto.</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm font-light">
                <AlertCircle size={16} />
                <span>Error al enviar. Intentá por WhatsApp o email directo.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex items-center gap-2 text-white font-medium border-b border-white/60 hover:border-violet-400 pb-1 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
