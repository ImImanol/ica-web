import { ArrowRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function CTA() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-gold-500/10 to-gold-500/5" />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          ¿Listo para llevar tu negocio al{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            siguiente nivel
          </span>
          ?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          No importa el tamaño de tu negocio. Creamos la solución digital que necesitás para crecer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="group bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-lg shadow-lg shadow-gold-500/20 hover:shadow-gold-400/30 cursor-pointer"
          >
            Contactanos ahora
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/5492942553671"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-500/30 hover:border-green-400/50 bg-green-500/5 hover:bg-green-500/10 text-green-400 font-medium px-8 py-3.5 rounded-xl transition-all duration-200 text-lg cursor-pointer text-center"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
