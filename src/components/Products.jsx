import { useState } from 'react'
import { motion } from 'framer-motion'
import { BsArrowRight, BsSun, BsLightningCharge, BsBatteryCharging, BsFan, BsStarFill } from 'react-icons/bs'
import ProductModal from './ProductModal'

const products = [
  {
    title: 'Solar Panels',
    desc: 'High-efficiency monocrystalline & polycrystalline panels from trusted brands like Longi, Jinko, and Canadian Solar. Available in various wattages.',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    icon: BsSun,
    tag: 'Best Seller',
  },
  {
    title: 'Inverters',
    desc: 'Hybrid, on-grid and off-grid inverters with smart MPPT technology. Reliable power conversion for homes and businesses.',
    img: '/images/inverter.webp',
    icon: BsLightningCharge,
    tag: 'Smart Tech',
  },
  {
    title: 'Lithium Batteries',
    desc: 'Advanced LiFePO4 battery storage with long cycle life, fast charging, and built-in BMS for safe energy backup.',
    img: 'https://thf.bing.com/th/id/OIP.V_9ZW4h6QaungfxlwTI5NQHaEb?w=298&h=180&c=7&r=0&o=7&cb=thfc1falcon3&pid=1.7&rm=3',
    icon: BsBatteryCharging,
    tag: 'Long Life',
  },
  {
    title: 'Solar Stands & Accessories',
    desc: 'Durable galvanized mounting structures, PV cables, MC4 connectors, and all balance-of-system components for complete installation.',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80',
    icon: BsFan,
    tag: 'Complete Kit',
  },
]

export default function Products() {
  const [selected, setSelected] = useState(null)
  const [imgErrors, setImgErrors] = useState({})

  return (
    <section id="products" className="relative py-20 px-5 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deep-blue via-amber-gold to-deep-blue" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-blue mt-2 mb-3">
            Our Premium Products
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Tap any product to view full details, varieties, and pricing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => {
            const Icon = p.icon
            const hasError = imgErrors[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() => setSelected(p)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-deep-blue/10 transition-all duration-500 cursor-pointer border border-gray-100/50"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-deep-blue to-blue-800 flex items-center justify-center">
                  {!hasError && (
                    <img
                      src={p.img}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
                    />
                  )}
                  <Icon className={`text-white/30 transition-all duration-500 ${!hasError ? 'opacity-0 group-hover:opacity-30' : 'opacity-50'}`} size={52} />

                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-gold to-warm-orange text-deep-blue text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                    {p.tag}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <BsStarFill key={s} size={10} className="text-amber-gold" />
                    ))}
                  </div>
                  <h3 className="font-bold text-deep-blue text-base sm:text-lg mb-2 group-hover:text-amber-gold transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {p.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-gold">
                    View Details
                    <BsArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
