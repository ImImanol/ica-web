import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Contacto',
    description: 'Me contás qué necesitás. Analizo tu negocio y te propongo la mejor solución.',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Diseño',
    description: 'Creo el diseño de tu sitio. Te muestro cómo va a quedar antes de desarrollarlo.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Desarrollo',
    description: 'Programo tu sitio con las mejores tecnologías. Rápido, seguro y responsive.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Entrega',
    description: 'Publico tu sitio y te doy soporte continuo. Tu web siempre funcionando.',
  },
]

export default function Process() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [stepsRef, stepsVisible] = useScrollReveal(0.1)

  return (
    <section id="proceso" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
            Proceso
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Cómo trabajo
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Un proceso simple y transparente. Desde la idea hasta tu sitio en línea.
          </p>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative transition-all duration-500 ${
                stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: stepsVisible ? `${i * 120}ms` : '0ms' }}
            >
              <div className="bg-navy-900/50 border border-navy-800 rounded-2xl p-8 h-full hover:border-gold-500/30 hover:-translate-y-1 transition-all duration-300">
                <span className="text-5xl font-black text-navy-800">{step.step}</span>

                <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center mt-4 mb-4">
                  <step.icon size={20} className="text-gold-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-navy-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
