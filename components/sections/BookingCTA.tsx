'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { WHATSAPP_URL, PHONE_DISPLAY } from '@/lib/utils'

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden" aria-label="Book an appointment at The Aura Salon">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/service-hair-styling.jpg"
          alt="Book an appointment at The Aura Unisex Salon Noida"
          fill
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#111111]/80" />
      </div>

      <div className="relative z-10 container-luxury py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <p className="eyebrow text-[#C9A46C] mb-5">Ready For a Change?</p>

            {/* Headline */}
            <h2 className="text-display-lg font-serif font-bold text-white mb-6 leading-tight">
              Ready For Your
              <br />
              <span className="italic text-[#C9A46C]">Next Look?</span>
            </h2>

            {/* Subheadline */}
            <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
              Book your appointment today and let our experts take care of the rest. We&apos;d love to see you.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full sm:w-auto justify-center text-sm py-4 px-8 gap-2"
                aria-label="Book your appointment at The Aura Salon via WhatsApp"
              >
                <MessageCircle size={16} />
                Book Appointment
              </a>
              <a
                href="tel:+919266711535"
                className="btn-outline border-white text-white hover:bg-white hover:!text-[#111111] w-full sm:w-auto justify-center text-sm py-4 px-8 gap-2"
                aria-label="Call The Aura Salon to book an appointment"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Phone */}
            <p className="mt-6 text-white/40 font-sans text-sm">{PHONE_DISPLAY}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
