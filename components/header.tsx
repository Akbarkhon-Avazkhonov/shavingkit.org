'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Steel Selection', href: '#steel' },
    { label: 'The Ritual', href: '#ritual' },
    { label: 'Lather Science', href: '#science' },
    { label: 'Aftercare', href: '#aftercare' },
    { label: 'Custom Kits', href: '#custom' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 frosted-glass border-b border-electric-chrome/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-razor-cyan to-cyber-purple flex items-center justify-center text-white font-display font-bold text-lg group-hover:shadow-lg transition-shadow duration-300 cyber-glow">
            ⚔
          </div>
          <span className="font-display font-bold text-lg text-midnight-steel dark:text-lather-white hidden sm:block">
            ShavingKit.org
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-midnight-steel dark:text-lather-white hover:text-razor-cyan dark:hover:text-razor-cyan transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-razor-cyan to-cyber-purple group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Right Side - Cart & Menu */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-midnight-steel dark:text-lather-white hover:text-razor-cyan transition-colors duration-300 relative group">
            <ShoppingCart size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-razor-cyan rounded-full cyber-glow"></span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-midnight-steel dark:text-lather-white hover:text-razor-cyan transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden border-t border-electric-chrome/30 bg-lather-white dark:bg-midnight-steel/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-midnight-steel dark:text-lather-white hover:text-razor-cyan transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
