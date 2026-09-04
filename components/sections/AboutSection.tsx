'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '@/lib/utils'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '8', label: 'Certified Professionals' },
  { value: '100s', label: 'Happy Clients' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[#F2EFE9] overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/service-haircut.jpg"
                alt="Expert stylists at The Aura Unisex Salon Noida providing premium beauty services"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            {/* Accent bar */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C9A46C] opacity-20 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-[#C9A46C] opacity-30 hidden lg:block" />
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="eyebrow mb-5">About The Aura</p>
              <h2 className="text-display-md font-serif font-bold text-[#111111] mb-6">
                More Than Beauty.
                <br />
                <span className="italic text-[#C9A46C]">It&apos;s Confidence.</span>
              </h2>
              <div className="divider-accent" />
              <p className="text-[#6B6B6B] font-sans text-base leading-[1.85] mb-8">
                We are a team of certified beauty professionals with over 10 years of experience. From everyday beauty services to bridal transformations and special occasions, we focus on delivering personalised experiences for every client.
              </p>
              <p className="text-[#6B6B6B] font-sans text-base leading-[1.85] mb-10">
                At The Aura, we believe beauty is deeply personal. Our experts take the time to understand your individual style, skin type and preferences before crafting the perfect look just for you.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col border-l-2 border-[#C9A46C] pl-3 sm:pl-4"
                >
                  <span className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-[#111111] leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[#6B6B6B] font-sans text-[11px] sm:text-xs leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Meet our team at The Aura Salon"
              >
                Meet Our Team
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
