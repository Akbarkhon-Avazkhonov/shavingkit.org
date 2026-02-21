'use client'

import { Zap, Shield, Leaf, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Precision Engineered',
    description: 'Every blade honed to perfection. Surgical-grade steel meets decades of craftsmanship.',
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Invest once. Use forever. We stand behind every product with unconditional quality assurance.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'Eco-conscious sourcing without compromising on luxury. Real performance, real responsibility.',
  },
  {
    icon: Sparkles,
    title: 'The Ritual',
    description: 'Transform your routine into a moment of presence. Shaving as meditation, not a chore.',
  },
]

export function FeaturesSection() {
  return (
    <section id="science" className="py-24 px-4 sm:px-6 lg:px-8 bg-midnight-steel dark:bg-lather-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-lather-white dark:text-midnight-steel mb-4">
            The Science of Sharp
          </h2>
          <p className="text-lg sm:text-xl text-lather-white/70 dark:text-midnight-steel/70 max-w-2xl mx-auto">
            Built on precision. Driven by passion. Designed for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative frosted-glass border border-electric-chrome/20 p-8 rounded-2xl hover:border-razor-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-razor-cyan/10 hover:-translate-y-2"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-razor-cyan/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Content */}
                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-razor-cyan to-cyber-purple flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-razor-cyan/50 transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-lather-white dark:text-midnight-steel group-hover:text-razor-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-lather-white/70 dark:text-midnight-steel/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-razor-cyan to-cyber-purple group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
