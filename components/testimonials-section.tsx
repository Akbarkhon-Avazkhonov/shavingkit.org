'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'James Mitchell',
    role: 'Barber & Grooming Expert',
    content: 'ShavingKit.org transformed my morning ritual. The precision and quality are unmatched. This is what luxury grooming should be.',
    avatar: '/images/avatar-james.jpg',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'CEO & Entrepreneur',
    content: 'I\'ve tried everything. These razors are surgical instruments. Worth every penny. The customer service is equally sharp.',
    avatar: '/images/avatar-marcus.jpg',
    rating: 5,
  },
  {
    name: 'David Turner',
    role: 'Lifestyle Influencer',
    content: 'From the packaging to the shave itself, every detail screams precision. ShavingKit.org isn\'t a product—it\'s an experience.',
    avatar: '/images/avatar-david.jpg',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="ritual" className="py-24 px-4 sm:px-6 lg:px-8 bg-lather-white dark:bg-midnight-steel">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-midnight-steel dark:text-lather-white mb-4">
            The Perfect Glide
          </h2>
          <p className="text-lg sm:text-xl text-midnight-steel/70 dark:text-lather-white/70 max-w-2xl mx-auto">
            Hear from those who\'ve discovered the edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative frosted-glass border border-electric-chrome/30 p-8 rounded-2xl hover:border-razor-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-razor-cyan/10 hover:-translate-y-2"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-razor-cyan/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              {/* Rating */}
              <div className="relative flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-razor-cyan text-razor-cyan" />
                ))}
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <p className="text-lg text-midnight-steel dark:text-lather-white leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-electric-chrome/20">
                  <div className="flex items-center gap-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-razor-cyan/50" />
                    <div>
                      <p className="font-display font-bold text-midnight-steel dark:text-lather-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-midnight-steel/60 dark:text-lather-white/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-razor-cyan to-cyber-purple group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
