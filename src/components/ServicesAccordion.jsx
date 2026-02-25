import { useState } from "react";
import { ChevronDown, Layout, Globe, Settings, Wrench } from "lucide-react";

const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas de aterrizaje optimizadas para convertir visitantes en clientes. Diseño atractivo, carga ultra rápida y enfocadas en resultados.",
    icon: Layout,
  },
  {
    title: "Sitios Corporativos",
    description:
      "Sitios web completos y profesionales que comunican la identidad de tu marca. Responsive, modernos y preparados para escalar.",
    icon: Globe,
  },
  {
    title: "Sistemas a Medida",
    description:
      "Soluciones personalizadas: facturación, gestión de stock, administración. Todo lo que tu negocio necesite, hecho a medida.",
    icon: Settings,
  },
  {
    title: "Mantenimiento",
    description:
      "Hosting, actualizaciones y soporte continuo para que tu sitio esté siempre funcionando perfecto y protegido.",
    icon: Wrench,
  },
];

export default function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ActiveIcon = services[activeIndex >= 0 ? activeIndex : 0].icon;

  return (
    <section id="servicios" className="py-32 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-reveal className="mb-20">
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">
            Servicios
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
            Lo que{" "}
            <span className="font-serif italic font-normal">hacemos</span>
          </h2>
          <p className="text-gray-400 font-light mt-4 max-w-2xl">
            Desde una landing page hasta un sistema completo de gestión, nos
            adaptamos a lo que tu negocio necesita.
          </p>
        </div>

        <div data-reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Accordion */}
          <div className="space-y-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="border-t border-gray-800/50 last:border-b"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? -1 : index)
                    }
                    className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={20}
                        className={`transition-colors duration-200 ${
                          activeIndex === index
                            ? "text-violet-400"
                            : "text-gray-600 group-hover:text-violet-400"
                        }`}
                        strokeWidth={1.5}
                      />
                      <h3
                        className={`text-lg md:text-xl font-medium transition-colors duration-200 ${
                          activeIndex === index
                            ? "text-violet-400"
                            : "text-white group-hover:text-violet-400"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-gray-500 transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-40 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-400 font-light text-sm leading-relaxed pl-9 pr-8">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Icon panel (desktop only) */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="sticky top-32 w-full aspect-square max-w-[320px] rounded-2xl border border-gray-800/50 bg-black-800/30 flex items-center justify-center">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Icon
                      size={80}
                      className="text-violet-500/30"
                      strokeWidth={1}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
