'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  const current = testimonials[active]

  return (
    <section id="reviews" className="section-padding bg-[#111111] overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow text-[#C9A46C] mb-5">Client Stories</p>
            <h2 className="text-display-md font-serif font-bold text-white mb-6">
              Loved By
              <br />
              <span className="italic text-[#C9A46C]">Our Clients</span>
            </h2>
            <p className="text-white/50 font-sans text-sm leading-relaxed mb-10 max-w-sm">
              Don&apos;t just take our word for it — hear what our clients have to say about their experience at The Aura.
            </p>

            {/* Dots & Controls */}
            <div className="flex items-center gap-6">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#C9A46C] hover:text-[#C9A46C] text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`View testimonial ${i + 1}`}
                    className={`h-[2px] transition-all duration-300 ${
                      i === active ? 'w-8 bg-[#C9A46C]' : 'w-4 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#C9A46C] hover:text-[#C9A46C] text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right — Card */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-[#1C1C1C] p-8 md:p-10 border border-white/5"
                role="tabpanel"
                aria-label={`Testimonial from ${current.name}`}
              >
                {/* Quote icon */}
                <Quote size={32} className="text-[#C9A46C] opacity-40 mb-6" fill="currentColor" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#C9A46C] text-[#C9A46C]" />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="text-white/80 font-sans text-base leading-[1.9] mb-8 italic">
                  &ldquo;{current.review}&rdquo;
                </blockquote>

                {/* Client */}
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 bg-[#C9A46C] flex items-center justify-center shrink-0">
                    <span className="font-serif font-bold text-white text-sm">
                      {current.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-white text-sm">{current.name}</p>
                    {current.service && (
                      <p className="font-sans text-white/40 text-xs mt-0.5">{current.service}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
