'use client'

import { ArrowRight, Plane, Shield, Globe } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden relative"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cloud-paper/90 via-cloud-paper/80 to-terminal-amber/20 dark:from-deep-altitude/90 dark:via-deep-altitude/80 dark:to-terminal-amber/10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Boarding-pass badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 boarding-pass text-sm font-medium text-deep-altitude dark:text-cloud-paper">
            <Plane size={16} className="text-terminal-amber" />
            Your Next Adventure Starts Here
          </div>

          <div className="space-y-6">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-deep-altitude dark:text-cloud-paper leading-tight">
              Pack the World.{' '}
              <span className="sunset-gradient bg-clip-text text-transparent">
                Carry the Comfort.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-deep-altitude/70 dark:text-cloud-paper/70 max-w-xl leading-relaxed">
              Precision-engineered luggage for those who find home on the road. From indestructible hardshells to versatile weekenders -- your next nest is right here.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="px-8 py-4 bg-terminal-amber text-deep-altitude font-semibold rounded-xl hover:shadow-xl hover:shadow-terminal-amber/30 transition-all duration-300 flex items-center justify-center gap-2 departure-glow"
            >
              Explore Collection
              <ArrowRight size={20} />
            </a>
            <a
              href="#features"
              className="px-8 py-4 border-2 border-deep-altitude/20 dark:border-cloud-paper/20 text-deep-altitude dark:text-cloud-paper font-semibold rounded-xl hover:bg-deep-altitude/5 dark:hover:bg-cloud-paper/5 transition-all duration-300"
            >
              Travel Smart
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-deep-altitude/60 dark:text-cloud-paper/60">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-passport-teal" />
              Lifetime Guarantee
            </div>
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-passport-teal" />
              Free Global Shipping
            </div>
            <div className="flex items-center gap-2">
              <Plane size={18} className="text-passport-teal" />
              TSA Approved
            </div>
          </div>
        </div>

        {/* Right Visual - Floating Suitcase Card */}
        <div className="relative flex items-center justify-center min-h-80 lg:min-h-[500px]">
          {/* Warm glow behind */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-terminal-amber/15 blur-3xl animate-pulse" />

          {/* Main card */}
          <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] float-cargo">
            <div className="w-full h-full rounded-3xl journal-card border border-terminal-amber/20 shadow-2xl shadow-deep-altitude/20 overflow-hidden">
              {/* Product image */}
              <img
                src="/images/product-hardshell.jpg"
                alt="Premium hardshell suitcase on mountain ridge"
                className="w-full h-full object-cover"
              />
              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-deep-altitude/80 to-transparent">
                <p className="font-display text-xl text-cloud-paper">The Explorer Series</p>
                <p className="text-sm text-cloud-paper/80">Indestructible. Elegant. Yours.</p>
              </div>
            </div>

            {/* Price tag floating */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-terminal-amber text-deep-altitude font-bold rounded-xl shadow-lg departure-glow text-sm">
              From $189
            </div>
          </div>

          {/* Floating decorations */}
          <div className="absolute top-8 right-8 w-16 h-16 rounded-full border-2 border-terminal-amber/30 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-16 left-8 w-12 h-12 rounded-full border-2 border-passport-teal/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        </div>
      </div>
    </section>
  )
}
