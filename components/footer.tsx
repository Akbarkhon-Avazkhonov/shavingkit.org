import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-midnight-steel dark:bg-lather-white text-lather-white dark:text-midnight-steel py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-3xl font-bold mb-4 text-razor-cyan">ShavingKit.org</h3>
            <p className="text-lather-white/70 dark:text-midnight-steel/70 leading-relaxed mb-6">
              Precision. Ritual. Edge. We believe every shave should be a moment of mastery. Surgical-grade tools for the modern gentleman.
            </p>

            
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-lather-white dark:text-midnight-steel">Shop</h4>
            <ul className="space-y-2 text-lather-white/70 dark:text-midnight-steel/70">
              <li>
                <a href="#" className="hover:text-razor-cyan dark:hover:text-razor-cyan transition-colors">
                  All Razors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-razor-cyan dark:hover:text-razor-cyan transition-colors">
                  Brushes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-razor-cyan dark:hover:text-razor-cyan transition-colors">
                  Lathers & Soaps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-razor-cyan dark:hover:text-razor-cyan transition-colors">
                  Custom Kits
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-lather-white dark:text-midnight-steel">Support</h4>
            <ul className="space-y-2 text-lather-white/70 dark:text-midnight-steel/70">
              <li>
                <a href="#" className="hover:text-razor-cyan dark:hover:text-razor-cyan transition-colors">
                  The Ritual
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-razor-cyan dark:hover:text-razor-cyan transition-colors">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-razor-cyan dark:hover:text-razor-cyan transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-razor-cyan dark:hover:text-razor-cyan transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-electric-chrome/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lather-white/70 dark:text-midnight-steel/70 text-sm">© 2025 ShavingKit.org. All rights reserved.</p>

          <div className="flex gap-6 text-sm text-lather-white/70 dark:text-midnight-steel/70">
            <a href="#" className="hover:text-razor-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-razor-cyan transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-razor-cyan transition-colors">
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
