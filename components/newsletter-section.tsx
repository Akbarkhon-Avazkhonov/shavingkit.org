'use client'

import { Mail } from 'lucide-react'
import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail('')
  }

  return (
    <section id="custom" className="py-24 px-4 sm:px-6 lg:px-8 bg-lather-white dark:bg-midnight-steel relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-razor-cyan rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-razor-cyan to-cyber-purple mb-6 cyber-glow shadow-lg shadow-razor-cyan/50">
            <Mail className="h-10 w-10 text-white" />
          </div>

          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-midnight-steel dark:text-lather-white mb-4">
            Join the Edge
          </h2>

          <p className="text-lg sm:text-xl text-midnight-steel/70 dark:text-lather-white/70 max-w-2xl mx-auto">
            Get exclusive access to limited editions, grooming rituals, and the edge in shaving mastery.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-lg bg-lather-white dark:bg-midnight-steel border-2 border-electric-chrome text-midnight-steel dark:text-lather-white placeholder:text-midnight-steel/50 dark:placeholder:text-lather-white/50 focus:border-razor-cyan focus:outline-none transition-colors"
            required
          />

          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-razor-cyan to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-razor-cyan/50 transition-all duration-300 cyber-glow"
          >
            Subscribe
          </button>
        </form>

        <p className="text-center text-midnight-steel/60 dark:text-lather-white/60 text-sm mt-6">
          We respect your privacy. Unsubscribe anytime. No spam, just pure grooming wisdom.
        </p>
      </div>
    </section>
  )
}
