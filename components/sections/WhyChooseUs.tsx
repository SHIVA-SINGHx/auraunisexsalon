'use client'

import { motion } from 'framer-motion'
import { Sparkles, Award, FlaskConical, Zap, Sofa, Heart } from 'lucide-react'

const features = [
  {
    Icon: Heart,
    title: 'Personalized Beauty Experience',
    description: 'Every service is tailored to you — your face shape, skin type, hair texture and personal aesthetic.',
    accent: true,
  },
  {
    Icon: Award,
    title: 'Certified Professionals',
    description: 'Our team holds certifications from leading beauty academies and brings years of hands-on expertise.',
    accent: false,
  },
  {
    Icon: Sparkles,
    title: 'Premium Products Only',
    description: 'We use only top-tier, professional-grade beauty products — safe, effective and long-lasting.',
    accent: false,
  },
  {
    Icon: Zap,
    title: 'Modern Techniques',
    description: 'Always up-to-date with the latest trends, colour techniques, skincare protocols and styling methods.',
    accent: false,
  },
  {
    Icon: Sofa,
    title: 'Comfortable Environment',
    description: 'A calm, welcoming space where you can relax, unwind and fully enjoy your beauty experience.',
    accent: false,
  },
  {
    Icon: FlaskConical,
    title: 'Client-Focused Service',
    description: 'From the moment you walk in, everything revolves around making you feel heard, seen and beautiful.',
    accent: true,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#F8F6F2]" aria-label="Why choose The Aura Unisex Salon">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 max-w-xl"
        >
          <p className="eyebrow mb-4">The Aura Difference</p>
          <h2 className="text-display-md font-serif font-bold text-[#111111]">
            Why Clients
            <br />
            <span className="italic text-[#C9A46C]">Choose Us</span>
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E0D8]">
          {features.map((feature, i) => {
            const { Icon } = feature
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group p-6 sm:p-8 lg:p-10 flex flex-col gap-5 transition-colors duration-300 ${
                  feature.accent
                    ? 'bg-[#111111] hover:bg-[#1a1a1a]'
                    : 'bg-[#F8F6F2] hover:bg-[#F2EFE9]'
                }`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center border transition-colors duration-300 ${
                    feature.accent
                      ? 'border-[#C9A46C]/40 group-hover:border-[#C9A46C]'
                      : 'border-[#111111]/20 group-hover:border-[#C9A46C]'
                  }`}
                >
                  <Icon
                    size={20}
                    className={`transition-colors duration-300 ${
                      feature.accent ? 'text-[#C9A46C]' : 'text-[#111111] group-hover:text-[#C9A46C]'
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-serif font-semibold text-lg mb-3 transition-colors ${
                      feature.accent ? 'text-white' : 'text-[#111111]'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm font-sans leading-relaxed ${
                      feature.accent ? 'text-white/60' : 'text-[#6B6B6B]'
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
