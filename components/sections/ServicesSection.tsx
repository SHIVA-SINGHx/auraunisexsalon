'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '@/lib/data/services'
import type { Service } from '@/types'
import { WHATSAPP_URL } from '@/lib/utils'

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: (index % 4) * 0.1 }}
      className="group relative overflow-hidden bg-[#F2EFE9] cursor-pointer"
      role="article"
      aria-label={`${service.name} service at The Aura Salon`}
    >
      {/* Tag */}
      {service.tag && (
        <div className="absolute top-4 left-4 z-10 bg-[#C9A46C] text-white text-[10px] font-sans font-medium tracking-[0.12em] uppercase px-3 py-1">
          {service.tag}
        </div>
      )}

      {/* Image */}
      <div className="relative h-72 md:h-64 lg:h-72 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif font-semibold text-lg text-[#111111] mb-1.5 group-hover:text-[#C9A46C] transition-colors">
            {service.name}
          </h3>
          <p className="text-sm font-sans text-[#6B6B6B] leading-relaxed">
            {service.description}
          </p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-9 h-9 border border-[#111111] flex items-center justify-center group-hover:bg-[#111111] group-hover:border-[#111111] transition-all duration-300 mt-1"
          aria-label={`Book ${service.name} at The Aura Salon`}
        >
          <ArrowUpRight
            size={16}
            className="text-[#111111] group-hover:text-white transition-colors duration-300"
          />
        </a>
      </div>
    </motion.article>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[#F8F6F2]">
      <div className="container-luxury">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">What We Offer</p>
            <h2 className="text-display-md font-serif font-bold text-[#111111]">
              Our Signature
              <br />
              <span className="italic text-[#C9A46C]">Services</span>
            </h2>
          </div>
          <p className="text-base font-sans text-[#6B6B6B] max-w-sm leading-relaxed md:text-right">
            Everything you need to look and feel your absolute best — all under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
            aria-label="Book any service at The Aura Unisex Salon"
          >
            Book a Service
          </a>
        </motion.div>
      </div>
    </section>
  )
}
