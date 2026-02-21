'use client'

import { ShoppingCart, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'The Nomad Hardshell',
    price: '$289',
    tag: 'Best Seller',
    rating: 4.9,
    description: 'Indestructible polycarbonate shell with TSA-approved locks and silent 360 wheels.',
    image: '/images/product-hardshell.jpg',
  },
  {
    id: 2,
    name: 'Weekend Wanderer Duffel',
    price: '$149',
    tag: 'New',
    rating: 4.8,
    description: 'Premium waxed canvas with full-grain leather handles. Built for the spontaneous escape.',
    image: '/images/product-weekender.jpg',
  },
  {
    id: 3,
    name: 'Summit Trail Pack',
    price: '$199',
    tag: 'Adventure',
    rating: 4.7,
    description: 'Weatherproof ripstop nylon with ergonomic suspension system. From city to summit.',
    image: '/images/product-backpack.jpg',
  },
  {
    id: 4,
    name: 'The Glide Carry-On',
    price: '$219',
    tag: 'Cabin Ready',
    rating: 4.9,
    description: 'Fits every major airline overhead bin. Expandable compartments with built-in charger pocket.',
    image: '/images/product-carryon.jpg',
  },
  {
    id: 5,
    name: 'Nest Organizer Set',
    price: '$69',
    tag: 'Essential',
    rating: 4.6,
    description: 'Six-piece packing cube set with compression zippers. Organize chaos into clarity.',
    image: '/images/product-organizer.jpg',
  },
  {
    id: 6,
    name: 'Executive Garment Bag',
    price: '$179',
    tag: 'Business',
    rating: 4.8,
    description: 'Wrinkle-free garment protection with convertible shoulder strap. Arrive sharp.',
    image: '/images/product-garment.jpg',
  },
]

export function ProductGrid() {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-cloud-paper dark:bg-deep-altitude">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 boarding-pass text-sm font-medium text-deep-altitude dark:text-cloud-paper mb-6">
            <ShoppingCart size={16} className="text-terminal-amber" />
            Curated Collection
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-deep-altitude dark:text-cloud-paper mb-4 text-balance">
            Your Travel Arsenal
          </h2>
          <p className="text-lg sm:text-xl text-deep-altitude/70 dark:text-cloud-paper/70 max-w-2xl mx-auto">
            Every piece is engineered for the road. Tested across 6 continents. Built to last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl journal-card border border-border/40 hover:border-terminal-amber/50 transition-all duration-300 hover:shadow-xl hover:shadow-terminal-amber/10 hover:-translate-y-2"
            >
              {/* Product image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-terminal-amber text-deep-altitude text-xs font-bold rounded-lg shadow-md">
                  {product.tag}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-altitude/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="px-6 py-3 bg-terminal-amber text-deep-altitude font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product details */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-terminal-amber text-terminal-amber" />
                  <span className="text-sm font-medium text-deep-altitude dark:text-cloud-paper">{product.rating}</span>
                </div>
                <h3 className="font-display text-xl text-deep-altitude dark:text-cloud-paper group-hover:text-terminal-amber transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-deep-altitude/60 dark:text-cloud-paper/60 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-deep-altitude dark:text-cloud-paper">
                    {product.price}
                  </span>
                  <span className="text-xs text-passport-teal font-medium">Free Shipping</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
