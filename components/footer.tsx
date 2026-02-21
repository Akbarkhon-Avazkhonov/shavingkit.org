import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-deep-altitude text-cloud-paper py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-3xl mb-4 text-terminal-amber">Outdoornests</h3>
            <p className="text-cloud-paper/70 leading-relaxed mb-6 max-w-md">
              Precision-engineered luggage for those who find home on the road. Every stitch a promise. Every journey a story.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-cloud-paper/10 hover:bg-terminal-amber hover:text-deep-altitude flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-cloud-paper/10 hover:bg-terminal-amber hover:text-deep-altitude flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-cloud-paper/10 hover:bg-terminal-amber hover:text-deep-altitude flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-cloud-paper/10 hover:bg-terminal-amber hover:text-deep-altitude flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg mb-4 text-cloud-paper">Shop</h4>
            <ul className="space-y-3 text-cloud-paper/70">
              <li>
                <a href="#" className="hover:text-terminal-amber transition-colors">
                  Hardshell Suitcases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-terminal-amber transition-colors">
                  Weekender Bags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-terminal-amber transition-colors">
                  Adventure Backpacks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-terminal-amber transition-colors">
                  Travel Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-terminal-amber transition-colors">
                  Custom Kits
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg mb-4 text-cloud-paper">Support</h4>
            <ul className="space-y-3 text-cloud-paper/70">
              <li>
                <a href="#" className="hover:text-terminal-amber transition-colors">
                  Packing Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-terminal-amber transition-colors">
                  Warranty Claims
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-terminal-amber transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-terminal-amber transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cloud-paper/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cloud-paper/50 text-sm">&copy; 2025 Outdoornests.com. All rights reserved.</p>

          <div className="flex gap-6 text-sm text-cloud-paper/50">
            <a href="#" className="hover:text-terminal-amber transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-terminal-amber transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-terminal-amber transition-colors">
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
