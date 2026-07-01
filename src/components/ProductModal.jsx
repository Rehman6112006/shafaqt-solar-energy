import { FiX, FiPhone } from 'react-icons/fi'
import { BsWhatsapp, BsCheckCircle } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'

const details = {
  'Solar Panels': {
    subtitle: 'High-Efficiency Solar Modules',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    specs: [
      { label: 'Types', value: 'Monocrystalline, Polycrystalline, Bifacial' },
      { label: 'Brands', value: 'Longi, Jinko, Canadian Solar, Trina' },
      { label: 'Wattages', value: '330W, 400W, 450W, 550W, 600W+' },
      { label: 'Efficiency', value: 'Up to 22.5%' },
      { label: 'Warranty', value: '12–25 years product & performance' },
    ],
    varieties: [
      'Longi Hi-MO 5 550W — Mono PERC',
      'Jinko Tiger Neo 540W — N-Type',
      'Canadian Solar 450W — BiHiKU',
      'Trina Vertex 660W — 210mm cells',
    ],
  },
  Inverters: {
    subtitle: 'Smart Power Conversion Solutions',
    image: '/images/inverter.webp',
    specs: [
      { label: 'Types', value: 'Hybrid, On-Grid, Off-Grid' },
      { label: 'Power Range', value: '3kW, 5kW, 8kW, 10kW, 12kW' },
      { label: 'Features', value: 'MPPT, WiFi monitoring, Dual output' },
      { label: 'Topologies', value: 'Single-phase, Three-phase' },
      { label: 'Warranty', value: '5–10 years' },
    ],
    varieties: [
      'Hybrid 5kW — Dual MPPT, Backup support',
      'On-Grid 10kW — Smart meter ready',
      'Off-Grid 3kW — Pure sine wave',
      'Hybrid 8kW — WiFi + LCD display',
    ],
  },
  'Lithium Batteries': {
    subtitle: 'Advanced Energy Storage Systems',
    image: 'https://thf.bing.com/th/id/OIP.V_9ZW4h6QaungfxlwTI5NQHaEb?w=298&h=180&c=7&r=0&o=7&cb=thfc1falcon3&pid=1.7&rm=3',
    specs: [
      { label: 'Types', value: 'LiFePO4, Wall-mounted, Rack-mounted' },
      { label: 'Capacities', value: '100Ah, 150Ah, 200Ah, 300Ah' },
      { label: 'Voltage', value: '12V, 24V, 48V' },
      { label: 'Cycle Life', value: '6,000+ cycles at 80% DoD' },
      { label: 'Warranty', value: '5–10 years' },
    ],
    varieties: [
      'Wall-Mount 5kWh — 48V LiFePO4',
      'Rack-Mount 10kWh — Stackable design',
      'Power Wall 15kWh — Solar ready',
      'Portable 100Ah — 12V with BMS',
    ],
  },
  'Solar Stands & Accessories': {
    subtitle: 'Mounting Structures & BOS Components',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    specs: [
      { label: 'Structures', value: 'Ground mount, Roof mount, Adjustable tilt' },
      { label: 'Material', value: 'Galvanized steel, Aluminum alloy' },
      { label: 'Cables', value: 'Solar PV 4mm², 6mm² — TUV certified' },
      { label: 'Connectors', value: 'MC4, MC4-Evo 2, Branch connectors' },
      { label: 'Extras', value: 'Junction boxes, fuses, monitoring meters' },
    ],
    varieties: [
      'Ground Mount Kit — 4-panel adjustable',
      'Roof Mount Rails — Aluminum, universal',
      'MC4 Connectors — 50-pack, IP67 rated',
      'Solar Cable 6mm² — 100m roll, TUV',
    ],
  },
}

export default function ProductModal({ product, onClose }) {
  if (!product) return null
  const data = details[product.title]
  if (!data) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <FiX size={18} />
          </button>

          <div className="relative h-52 sm:h-64 overflow-hidden">
            <img
              src={data.image}
              alt={product.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{product.title}</h2>
              <p className="text-white/80 text-sm">{data.subtitle}</p>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {data.specs.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                  <p className="text-xs font-semibold text-amber-gold uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="text-sm text-gray-700 font-medium">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-deep-blue text-sm mb-3">Popular Varieties</h3>
              <div className="space-y-2">
                {data.varieties.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 bg-gradient-to-r from-amber-gold/5 to-transparent rounded-lg px-3.5 py-2.5"
                  >
                    <BsCheckCircle className="text-green-500 shrink-0" size={14} />
                    <span className="text-sm text-gray-700">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:03290302477"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-gold to-warm-orange text-deep-blue px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-amber-gold/30 transition-all duration-300"
              >
                <FiPhone size={16} />
                Call Now — 0329-0302477
              </a>
              <a
                href={`https://wa.me/923290302477?text=Assalam-o-Alaikum!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(product.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
              >
                <BsWhatsapp size={16} />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
