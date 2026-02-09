import { Globe, Layout, Monitor, Wrench } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const services = [
  {
    icon: Layout,
    title: 'Landing Pages',
    description:
      'Páginas de aterrizaje optimizadas para convertir visitantes en clientes. Diseño atractivo y carga rápida.',
  },
  {
    icon: Globe,
    title: 'Sitios Web',
    description:
      'Sitios web completos y profesionales para mostrar tu negocio al mundo. Responsive y modernos.',
  },
  {
    icon: Monitor,
    title: 'Sistemas a Medida',
    description:
      'Soluciones personalizadas: facturación, gestión de stock, administración. Todo lo que tu negocio necesite.',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    description:
      'Hosting, actualizaciones y soporte continuo para que tu sitio esté siempre funcionando perfecto.',
  },
]

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal(0.1)

  return (
    <section id="servicios" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Lo que puedo hacer por vos
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Desde una landing page hasta un sistema completo de gestión, me adapto a lo que tu negocio necesita.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-navy-900/50 border border-navy-800 hover:border-gold-500/30 rounded-2xl p-8 transition-all duration-500 hover:bg-navy-800/50 hover:-translate-y-1 backdrop-blur-sm ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: gridVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                <service.icon size={24} className="text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
