import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.webp" alt="ICA Logo" className="h-8 rounded-lg" />
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} ICA. Todos los derechos reservados.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#servicios" className="text-sm text-gray-500 hover:text-gold-400 transition-colors">
              Servicios
            </a>
            <a href="#portfolio" className="text-sm text-gray-500 hover:text-gold-400 transition-colors">
              Portfolio
            </a>
            <a href="#contacto" className="text-sm text-gray-500 hover:text-gold-400 transition-colors">
              Contacto
            </a>
            <a
              href="https://github.com/ImImanol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
