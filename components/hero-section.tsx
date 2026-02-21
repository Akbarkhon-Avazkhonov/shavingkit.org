'use client'

import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden relative" style={{backgroundImage: 'url(/images/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-lather-white/80 dark:bg-midnight-steel/80"></div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className="space-y-4">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-midnight-steel dark:text-lather-white leading-tight">
              Shaving, <br />
              <span className="iridescent-gradient bg-clip-text text-transparent">
                Sharpened.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-midnight-steel/70 dark:text-lather-white/70 max-w-2xl leading-relaxed">
              Precision tools for the ultimate skin ritual. From surgical-grade steel to nutrient-rich lathers—discover the kit that defines your edge.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-razor-cyan to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-razor-cyan/50 transition-all duration-300 flex items-center justify-center gap-2 cyber-glow">
              Explore Collection
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-electric-chrome text-midnight-steel dark:text-lather-white font-semibold rounded-lg hover:bg-electric-chrome/10 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8 text-sm text-midnight-steel/60 dark:text-lather-white/60">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-razor-cyan/20 flex items-center justify-center text-razor-cyan font-bold">✓</span>
              Surgical-Grade Steel
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-razor-cyan/20 flex items-center justify-center text-razor-cyan font-bold">✓</span>
              Lifetime Warranty
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-razor-cyan/20 flex items-center justify-center text-razor-cyan font-bold">✓</span>
              Eco-Friendly
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-96 lg:h-full min-h-96 lg:min-h-screen flex items-center justify-center">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-razor-cyan/10 to-cyber-purple/10 rounded-3xl blur-3xl"></div>
          
          {/* Chrome element */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full iridescent-gradient opacity-20 blur-3xl animate-pulse"></div>

          {/* Main visual - Razor blade effect */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center float-animation">
            <div className="absolute w-full h-full rounded-3xl frosted-glass border border-electric-chrome/50 shadow-2xl shadow-razor-cyan/20 flex items-center justify-center overflow-hidden">
              {/* Water droplet effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-razor-cyan/10 via-transparent to-cyber-purple/10 rounded-3xl"></div>
              
              {/* Razor blade image */}
              <img
                src="/images/hero-razor.jpg"
                alt="Premium straight razor on dark leather"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-80"
              />

              {/* Content */}
              <div className="relative z-10 text-center space-y-4">
                <div className="text-6xl sm:text-7xl font-bold">⚔</div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-midnight-steel dark:text-lather-white">
                  The Perfect Glide
                </p>
                <p className="text-sm text-midnight-steel/60 dark:text-lather-white/60">
                  Precision Redefined
                </p>
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-12 right-12 w-20 h-20 rounded-full border-2 border-razor-cyan/30 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 left-12 w-16 h-16 rounded-full border-2 border-cyber-purple/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        </div>
      </div>
    </section>
  )
}
