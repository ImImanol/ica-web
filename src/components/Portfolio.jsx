import { ExternalLink } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const projects = [
  {
    title: "Patagonia Inversiones",
    category: "Landing Page",
    description:
      "Plataforma web profesional para empresa de inversiones. Diseño elegante que transmite confianza y solidez.",
    tags: ["React", "Diseño UI/UX", "SEO", "WhatsApp"],
    image: "/patagonia-inversiones.webp",
    link: "#",
  },
  {
    title: "La Casa de Hunter Cabañas",
    category: "Landing Page",
    description:
      "Landing page para complejo de cabañas. Enfocada en mostrar las instalaciones y facilitar reservas.",
    tags: ["React", "Diseño UI/UX", "SEO", "WhatsApp"],
    image: "/la-casa-de-hunter.webp",
    link: "https://lacasadehunter.com/",
  },
  {
    title: "Sistema Ferretería",
    category: "Sistema a Medida",
    description:
      "Sistema integral de gestión con facturación, control de stock y administración. Solución completa a medida.",
    tags: ["Sistema", "Facturación", "Stock"],
    image: "/sistema-ferreteria.webp",
    link: "#",
  },
];

export default function Portfolio() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.1);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Proyectos realizados
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Algunos de los proyectos en los que trabajamos. Cada uno adaptado a
            las necesidades del cliente.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group bg-navy-900/50 border border-navy-800 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/5 ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: gridVisible ? `${i * 150}ms` : "0ms" }}
            >
              {/* Project image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} desarrollada por ICA`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/10 transition-colors duration-500" />
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-8 h-8 bg-navy-900/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-500"
                  >
                    <ExternalLink size={14} className="text-gold-400" />
                  </a>
                )}
              </div>

              <div className="p-6">
                <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-navy-800 text-gray-300 px-3 py-1 rounded-full group-hover:bg-navy-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
