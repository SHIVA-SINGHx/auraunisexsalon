import Link from 'next/link'
import { MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react'
import { WHATSAPP_URL, PHONE_DISPLAY } from '@/lib/utils'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white" role="contentinfo">
      <div className="container-luxury pt-16 md:pt-20 pb-28 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <p className="font-serif font-bold text-2xl text-white tracking-tight">The Aura</p>
              <p className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-[#C9A46C] mt-0.5">
                Unisex Salon
              </p>
            </div>
            <p className="text-sm text-white/60 font-sans leading-relaxed max-w-xs mb-6">
              Premium hair, beauty and makeup services in Noida Sector 110. Where every visit is a transformative experience designed around you.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-[#C9A46C] hover:text-[#C9A46C] transition-colors"
                aria-label="Follow The Aura Salon on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-[#C9A46C] hover:text-[#C9A46C] transition-colors"
                aria-label="Like The Aura Salon on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-[#C9A46C] hover:text-[#C9A46C] transition-colors"
                aria-label="Subscribe to The Aura Salon on YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-[#C9A46C] mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-[#C9A46C] mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919266711535"
                className="flex gap-3 items-start group"
                aria-label="Call The Aura Salon"
              >
                <Phone size={15} className="text-[#C9A46C] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors font-sans">
                  {PHONE_DISPLAY}
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=The+Aura+Unisex+Salon+Sector+110+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start group"
                aria-label="Get directions to The Aura Salon"
              >
                <MapPin size={15} className="text-[#C9A46C] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors font-sans leading-relaxed">
                  SHOP 17A/2, Main Market,<br />
                  Sector 110, Noida – 201304
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-sans">
            © 2026 The Aura Unisex Salon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors font-sans">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors font-sans">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
