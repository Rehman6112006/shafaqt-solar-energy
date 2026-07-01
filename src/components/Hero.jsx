import { FiPhone, FiArrowDown } from 'react-icons/fi'
import { BsSun, BsLightningCharge, BsShieldCheck } from 'react-icons/bs'
import { motion } from 'framer-motion'

const stats = [
  { icon: BsSun, label: 'Solar Solutions', value: 'Premium' },
  { icon: BsLightningCharge, label: 'Energy Savings', value: 'Up to 80%' },
  { icon: BsShieldCheck, label: 'Warranty', value: 'Certified' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const floatingSunVariants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-deep-blue/80" />

      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-amber-gold/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-warm-orange/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        className="absolute top-1/4 right-1/4 text-amber-gold/20 hidden md:block"
        variants={floatingSunVariants}
        animate="animate"
      >
        <BsSun size={80} />
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-5 max-w-3xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block bg-amber-gold/20 backdrop-blur-sm text-amber-gold text-xs sm:text-sm font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-amber-gold/30">
            Shafaqt Solar Energy — Chishtian
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-5"
        >
          <span className="bg-gradient-to-r from-amber-gold via-sunray to-warm-orange bg-clip-text text-transparent">
            Your Trusted Solar Energy Partner
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-200 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed px-2"
        >
          Premium solar panels, hybrid inverters, lithium batteries & solar stands —
          authentic products with certified warranties for homes & businesses.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="tel:03290302477"
            className="group flex items-center gap-2 bg-gradient-to-r from-amber-gold to-warm-orange text-deep-blue px-8 py-3.5 rounded-full font-bold text-sm hover:shadow-xl hover:shadow-amber-gold/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <FiPhone size={16} className="group-hover:rotate-12 transition-transform" />
            Get Free Quote
          </a>
          <a
            href="#products"
            className="flex items-center gap-2 text-white border-2 border-white/30 px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Explore Products
            <FiArrowDown size={14} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center divide-x divide-white/10">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5"
              >
                <Icon className="text-amber-gold shrink-0" size={16} />
                <div className="text-left">
                  <p className="text-white font-bold text-xs sm:text-sm">{s.value}</p>
                  <p className="text-white/60 text-[10px] sm:text-xs">{s.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
