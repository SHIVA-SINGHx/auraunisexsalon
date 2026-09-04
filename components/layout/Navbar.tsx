'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_URL } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'bg-[#F8F6F2] border-b border-[#E5E0D8] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-luxury flex items-center justify-between h-[72px] md:h-[80px]">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col leading-none group"
            aria-label="The Aura Unisex Salon — go to homepage"
          >
            <span
              className={`font-serif font-bold text-xl tracking-tight transition-colors duration-300 ${
                scrolled || mobileOpen ? 'text-[#111111]' : 'text-white'
              } group-hover:text-[#C9A46C]`}
            >
              The Aura
            </span>
            <span
              className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-[#C9A46C] transition-colors duration-300"
            >
              Unisex Salon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-sans font-medium tracking-wide transition-colors duration-300 hover:text-[#C9A46C] ${
                  scrolled ? 'text-[#111111]' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center text-xs font-sans font-medium tracking-[0.08em] uppercase py-3 px-6 transition-all duration-300 ${
                scrolled
                  ? 'bg-[#111111] text-white hover:bg-[#C9A46C]'
                  : 'bg-[#C9A46C] text-white hover:bg-[#A8823F]'
              }`}
              aria-label="Book an appointment via WhatsApp"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-sm transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={22} className="text-[#111111]" />
            ) : (
              <Menu size={22} className={scrolled ? 'text-[#111111]' : 'text-white'} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-[#F8F6F2] flex flex-col pt-[72px] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col px-8 py-10 gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="text-[2rem] font-serif font-medium text-[#111111] hover:text-[#C9A46C] transition-colors py-3 border-b border-[#E5E0D8]"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="px-8 mt-4 flex flex-col gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full justify-center text-center"
                aria-label="Book appointment via WhatsApp"
              >
                Book Appointment
              </a>
              <a
                href="tel:+919266711535"
                className="btn-outline w-full justify-center text-center"
                aria-label="Call The Aura Salon"
              >
                Call Now
              </a>
            </motion.div>

            <div className="px-8 mt-auto pb-8">
              <p className="text-xs text-[#6B6B6B] font-sans">
                📍 Sector 110, Noida, Uttar Pradesh
              </p>
              <p className="text-xs text-[#6B6B6B] font-sans mt-1">
                +91 92667 11535
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
