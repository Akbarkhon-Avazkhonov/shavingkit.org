'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Lindgren',
    role: 'Travel Photographer',
    content: 'I\'ve dragged the Nomad Hardshell through 34 countries. Sand, rain, airport conveyor belts -- it still looks brand new. This is the only luggage I trust.',
    avatar: '/images/avatar-sarah.jpg',
    rating: 5,
  },
  {
    name: 'Carlos Rivera',
    role: 'Business Consultant',
    content: 'The Glide Carry-On fits perfectly in every overhead bin I\'ve tried. The built-in charger pocket has saved me on more red-eye flights than I can count.',
    avatar: '/images/avatar-carlos.jpg',
    rating: 5,
  },
  {
    name: 'Elena Vasquez',
    role: 'Adventure Blogger',
    content: 'From the Summit Trail Pack on Kilimanjaro to the Weekender in Lisbon -- Outdoornests gets that travel isn\'t one-size-fits-all. Absolute game-changer.',
    avatar: '/images/avatar-elena.jpg',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-cloud-paper dark:bg-deep-altitude">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-deep-altitude dark:text-cloud-paper mb-4 text-balance">
            Stories from the Road
          </h2>
          <p className="text-lg sm:text-xl text-deep-altitude/70 dark:text-cloud-paper/70 max-w-2xl mx-auto">
            Real travelers. Real adventures. Real trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative journal-card border border-border/40 p-8 rounded-2xl hover:border-terminal-amber/40 transition-all duration-300 hover:shadow-lg hover:shadow-terminal-amber/10 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote size={32} className="text-terminal-amber/40 group-hover:text-terminal-amber transition-colors duration-300" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-terminal-amber text-terminal-amber" />
                ))}
              </div>

              {/* Content */}
              <p className="text-deep-altitude dark:text-cloud-paper leading-relaxed mb-8">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border/40">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-terminal-amber/40"
                  />
                  <div>
                    <p className="font-bold text-deep-altitude dark:text-cloud-paper">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-deep-altitude/60 dark:text-cloud-paper/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom hover bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-terminal-amber to-passport-teal group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
