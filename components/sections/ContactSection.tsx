'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react'
import { WHATSAPP_URL, PHONE_DISPLAY, BUSINESS_ADDRESS, OPENING_HOURS } from '@/lib/utils'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-[#F8F6F2]">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-18"
        >
          <p className="eyebrow mb-4">Find Us</p>
          <h2 className="text-display-md font-serif font-bold text-[#111111]">
            Visit
            <br />
            <span className="italic text-[#C9A46C]">The Aura</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact Details — col span 2 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Phone */}
            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 border border-[#C9A46C] flex items-center justify-center shrink-0 mt-0.5">
                <Phone size={18} className="text-[#C9A46C]" />
              </div>
              <div>
                <p className="text-xs font-sans font-medium text-[#6B6B6B] tracking-[0.12em] uppercase mb-1">
                  Phone
                </p>
                <a
                  href="tel:+919266711535"
                  className="font-serif text-xl text-[#111111] hover:text-[#C9A46C] transition-colors"
                  aria-label="Call The Aura Salon"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 border border-[#C9A46C] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={18} className="text-[#C9A46C]" />
              </div>
              <div>
                <p className="text-xs font-sans font-medium text-[#6B6B6B] tracking-[0.12em] uppercase mb-1">
                  Address
                </p>
                <address className="not-italic font-sans text-[#111111] text-sm leading-[1.9]">
                  SHOP 17A/2 FIRST FLOOR,<br />
                  Main Market, above Vision Care,<br />
                  near Apollo Pharmacy, Shramik Kunj,<br />
                  Sector 110, Noida, UP 201304
                </address>
                <a
                  href="https://maps.google.com/?q=The+Aura+Unisex+Salon+Sector+110+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-[#C9A46C] text-xs font-sans font-medium tracking-wide uppercase hover:underline"
                  aria-label="Get directions to The Aura Salon on Google Maps"
                >
                  <Navigation size={12} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 border border-[#C9A46C] flex items-center justify-center shrink-0 mt-0.5">
                <Clock size={18} className="text-[#C9A46C]" />
              </div>
              <div>
                <p className="text-xs font-sans font-medium text-[#6B6B6B] tracking-[0.12em] uppercase mb-3">
                  Opening Hours
                </p>
                <div className="flex flex-col gap-2">
                  {OPENING_HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between gap-6 text-sm font-sans">
                      <span className="text-[#6B6B6B]">{h.day}</span>
                      <span className="text-[#111111] font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 hover:bg-[#22c55e] transition-colors w-fit"
              aria-label="Message The Aura Salon on WhatsApp"
            >
              <MessageCircle size={20} className="fill-white" />
              <span className="font-sans text-sm font-medium">Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Map — col span 3 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="w-full h-72 md:h-96 lg:h-full min-h-[350px] overflow-hidden border border-[#E5E0D8]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5!2d77.369!3d28.505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5be00000001%3A0x1!2sSector%20110%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Aura Unisex Salon location on Google Maps — Sector 110, Noida"
                aria-label="Google Maps showing location of The Aura Unisex Salon in Sector 110, Noida"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
