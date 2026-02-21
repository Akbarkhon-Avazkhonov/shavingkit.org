'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Luggage } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Hardshells', href: '#products' },
    { label: 'Weekenders', href: '#products' },
    { label: 'Backpacks', href: '#products' },
    { label: 'Travel Tips', href: '#features' },
    { label: 'Custom Kit', href: '#newsletter' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 journal-card border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-terminal-amber flex items-center justify-center text-deep-altitude transition-all duration-300 group-hover:shadow-lg departure-glow">
            <Luggage size={22} />
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-lg text-deep-altitude dark:text-cloud-paper leading-none block">
              Outdoornests
            </span>
            <span className="text-xs text-passport-teal font-medium">.com</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-deep-altitude dark:text-cloud-paper hover:bg-terminal-amber/10 hover:text-terminal-amber rounded-lg transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-terminal-amber group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#newsletter"
            className="hidden sm:inline-flex px-5 py-2.5 bg-terminal-amber text-deep-altitude font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-terminal-amber/30 transition-all duration-300 departure-glow"
          >
            Build Your Kit
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-deep-altitude dark:text-cloud-paper hover:text-terminal-amber transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden border-t border-border/40 bg-cloud-paper dark:bg-deep-altitude/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-deep-altitude dark:text-cloud-paper hover:bg-terminal-amber/10 hover:text-terminal-amber rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#newsletter"
              className="mt-2 px-5 py-3 bg-terminal-amber text-deep-altitude font-semibold text-sm rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Build Your Kit
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
