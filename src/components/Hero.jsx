import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useCallback } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />

      {/* Decorative glows - parallax */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl transition-transform duration-500 ease-out"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,168,48,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,168,48,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-navy-800/60 border border-navy-700/50 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <Sparkles size={14} className="text-gold-400" />
          <span className="text-sm text-gray-300">
            Desarrollo web & soluciones digitales
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Llevamos tu negocio
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            al mundo digital
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Diseñamos y desarrollamos sitios web, landing pages y sistemas a
          medida que hacen crecer tu negocio.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contacto"
            className="group bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-3.5 rounded-xl transition-all duration-200 flex items-center gap-2 text-lg shadow-lg shadow-gold-500/20 hover:shadow-gold-400/30 cursor-pointer"
          >
            Empezar un proyecto
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#portfolio"
            className="border border-navy-700 hover:border-gold-500/50 text-gray-300 hover:text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 text-lg cursor-pointer"
          >
            Ver trabajos
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">3+</div>
            <div className="text-sm text-gray-500 mt-1">Proyectos</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">
              100%
            </div>
            <div className="text-sm text-gray-500 mt-1">Satisfacción</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">
              24/7
            </div>
            <div className="text-sm text-gray-500 mt-1">Soporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}
