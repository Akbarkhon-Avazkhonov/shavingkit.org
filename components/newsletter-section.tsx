'use client'

import { Plane } from 'lucide-react'
import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section id="newsletter" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-terminal-amber via-terminal-amber/90 to-deep-altitude relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cloud-paper rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cloud-paper rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-deep-altitude mb-6 shadow-xl">
            <Plane className="h-10 w-10 text-terminal-amber" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-deep-altitude mb-4 text-balance">
            Build Your Custom Kit
          </h2>

          <p className="text-lg sm:text-xl text-deep-altitude/80 max-w-2xl mx-auto">
            Join 50,000+ travelers. Get exclusive deals, packing guides, and first access to new collections.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-6 py-4 rounded-xl bg-cloud-paper/90 border-2 border-deep-altitude/20 text-deep-altitude placeholder:text-deep-altitude/40 focus:border-deep-altitude focus:outline-none transition-colors shadow-lg"
            required
          />

          <button
            type="submit"
            className="px-8 py-4 bg-deep-altitude text-cloud-paper font-semibold rounded-xl hover:shadow-xl hover:shadow-deep-altitude/30 transition-all duration-300"
          >
            Get Started
          </button>
        </form>

        <p className="text-center text-deep-altitude/60 text-sm mt-6">
          No spam. Unsubscribe anytime. Your inbox is sacred territory.
        </p>
      </div>
    </section>
  )
}
