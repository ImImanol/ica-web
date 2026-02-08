import { MapPin, GraduationCap } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="sobre-mi" className="py-24 relative">
      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image / Visual side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-800 rounded-2xl aspect-square max-w-md mx-auto overflow-hidden">
              <img
                src="/yo-about.webp"
                alt="Imanol Castro - Desarrollador web y Técnico Superior en Diseño y Programación Web"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -right-4 lg:right-8 bg-navy-800 border border-navy-700 rounded-xl px-5 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">
                  Disponible para proyectos
                </span>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
              Sobre mí
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Imanol Castro
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Desarrollador web apasionado por crear soluciones digitales que
              realmente hagan la diferencia. Creo que cada negocio merece tener
              presencia en internet, sin importar su tamaño.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Mi objetivo es ayudar a emprendedores y empresas a dar el salto
              digital con sitios web profesionales, rápidos y que realmente
              generen resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <GraduationCap size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    Técnico Superior en Diseño y Programación Web
                  </div>
                  <div className="text-gray-500 text-sm">
                    Facultad Da Vinci
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <MapPin size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    Ubicación
                  </div>
                  <div className="text-gray-500 text-sm">
                    Buenos Aires, Argentina
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
