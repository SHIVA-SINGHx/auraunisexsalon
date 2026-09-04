'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Star } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/utils'

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay },
})

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] md:h-screen md:min-h-[640px] max-h-[1080px] overflow-hidden flex items-center"
      aria-label="Hero section — The Aura Unisex Salon"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Premium luxury salon interior at The Aura Unisex Salon Noida"
        fill
        priority
        quality={85}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col justify-center container-luxury pt-24 sm:pt-28 md:pt-20 pb-20 md:pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.2)}
            className="eyebrow text-[#C9A46C] mb-4 sm:mb-6"
          >
            The Aura Unisex Salon
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            {...fadeUp(0.35)}
            className="text-display-xl font-serif font-bold text-white mb-5 sm:mb-6 leading-none"
          >
            Beauty That Feels
            <br />
            <span className="italic text-[#C9A46C]">Like You.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.5)}
            className="text-sm sm:text-base md:text-lg font-sans font-light text-white/85 leading-relaxed mb-8 sm:mb-10 max-w-lg"
          >
            Premium hair, beauty and makeup services designed to help you look confident, feel beautiful and express your best self.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.65)} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-sm py-3.5 sm:py-4 px-6 sm:px-8 text-center justify-center"
              aria-label="Book an appointment at The Aura Salon via WhatsApp"
            >
              Book Appointment
            </a>
            <button
              onClick={scrollToServices}
              className="btn-outline border-white text-white hover:bg-white hover:!text-[#111111] text-sm py-3.5 sm:py-4 px-6 sm:px-8 text-center justify-center"
              aria-label="Explore our services"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            {...fadeUp(0.8)}
            className="flex flex-wrap items-center gap-6 mt-12"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-[#C9A46C] text-[#C9A46C]" />
                ))}
              </div>
              <span className="text-xs font-sans text-white/80 font-medium">
                Trusted by hundreds of happy clients
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#C9A46C]" />
              <span className="text-xs font-sans text-white/80">
                Noida Sector 110
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors group hidden md:flex"
        aria-label="Scroll down to explore"
      >
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
