'use client'

import { Shield, Globe, Recycle, Compass } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Indestructible Build',
    description: 'Military-grade polycarbonate and ballistic nylon. Drop-tested from 10 feet. Survive any airport.',
  },
  {
    icon: Globe,
    title: 'Global Ready',
    description: 'TSA-approved locks, universal power pockets, and sizing that fits every airline in the world.',
  },
  {
    icon: Recycle,
    title: 'Eco-Engineered',
    description: 'Made from recycled ocean plastics and organic cotton linings. Travel light on the planet.',
  },
  {
    icon: Compass,
    title: 'Adventure Tested',
    description: 'Field-tested across 6 continents. From Saharan heat to Arctic cold. Your gear, battle-proven.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-deep-altitude">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cloud-paper mb-4 text-balance">
            Built for the Journey
          </h2>
          <p className="text-lg sm:text-xl text-cloud-paper/70 max-w-2xl mx-auto">
            Every stitch, every zipper, every wheel is a promise. We build luggage that outlasts the adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-cloud-paper/10 bg-cloud-paper/5 hover:bg-cloud-paper/10 hover:border-terminal-amber/40 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Amber glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-terminal-amber/5 to-passport-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-terminal-amber/20 flex items-center justify-center text-terminal-amber group-hover:bg-terminal-amber group-hover:text-deep-altitude transition-all duration-300 group-hover:shadow-lg group-hover:shadow-terminal-amber/30">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display text-xl text-cloud-paper group-hover:text-terminal-amber transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-cloud-paper/60 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-terminal-amber to-passport-teal group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
