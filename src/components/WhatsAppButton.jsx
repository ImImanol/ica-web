import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5492942553671?text=Hola!%20Vi%20tu%20web%20y%20me%20interesa%20un%20proyecto."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all duration-200 hover:scale-110 cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  )
}
