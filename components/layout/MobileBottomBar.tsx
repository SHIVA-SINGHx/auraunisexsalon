'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/utils'

export default function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#111111] border-t border-white/10 safe-area-inset-bottom"
      role="complementary"
      aria-label="Mobile quick contact bar"
    >
      <div className="flex h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <a
          href="tel:+919266711535"
          className="flex-1 flex flex-col items-center justify-center gap-1 hover:bg-white/5 transition-colors"
          aria-label="Call The Aura Salon at +91 92667 11535"
        >
          <Phone size={18} className="text-[#C9A46C]" />
          <span className="text-[10px] font-sans font-medium text-white tracking-wide uppercase">
            Call Now
          </span>
        </a>

        <div className="w-px bg-white/10" />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#C9A46C] hover:bg-[#A8823F] transition-colors"
          aria-label="Book an appointment via WhatsApp"
        >
          <MessageCircle size={18} className="text-white" />
          <span className="text-[10px] font-sans font-bold text-white tracking-wide uppercase">
            Book Appointment
          </span>
        </a>
      </div>
    </div>
  )
}
