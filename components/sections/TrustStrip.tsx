const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '8', label: 'Certified Professionals' },
  { value: '100s', label: 'Happy Clients' },
  { value: 'Premium', label: 'Beauty Services' },
]

export default function TrustStrip() {
  return (
    <section
      className="bg-[#111111] py-10 md:py-12"
      aria-label="Key statistics about The Aura Unisex Salon"
    >
      <div className="container-luxury">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-6 px-4 text-center ${
                i % 2 === 0 ? 'border-r border-white/10' : ''
              } ${i < 2 ? 'border-b lg:border-b-0 border-white/10' : ''} ${
                i < 3 ? 'lg:border-r border-white/10' : 'lg:border-r-0'
              }`}
            >
              <span className="font-serif font-bold text-[#C9A46C] text-3xl md:text-4xl leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-white/60 font-sans text-xs tracking-[0.1em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
