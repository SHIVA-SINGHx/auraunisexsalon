'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '@/lib/utils'

export default function FloatingActions() {
  return (
    <div
      className="hidden lg:flex flex-col gap-3 fixed right-6 bottom-8 z-40"
      role="complementary"
      aria-label="Quick contact actions"
    >
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        className="w-[52px] h-[52px] bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={22} className="text-white fill-white" />
      </motion.a>

      <motion.a
        href="tel:+919266711535"
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        className="w-[52px] h-[52px] bg-[#111111] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow hover:bg-[#C9A46C]"
        aria-label="Call The Aura Salon"
        title="Call us now"
      >
        <Phone size={20} className="text-white" />
      </motion.a>
    </div>
  )
}
