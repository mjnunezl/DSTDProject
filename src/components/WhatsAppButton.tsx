import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, defaultPhone } from '../utils/whatsapp'

interface WhatsAppButtonProps {
  phone?: string
  message?: string
  variant?: 'floating' | 'inline'
  label?: string
  className?: string
}

export default function WhatsAppButton({
  phone = defaultPhone,
  message,
  variant = 'inline',
  label = 'WhatsApp',
  className = '',
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl({ phone, message })

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-10 left-6 sm:bottom-6 sm:left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 ${className}`}
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} strokeWidth={2} />
      </a>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#1ebe5d] ${className}`}
    >
      <MessageCircle size={18} />
      {label}
    </a>
  )
}
