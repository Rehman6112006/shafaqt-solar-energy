import { BsShieldCheck, BsHeadset, BsStars, BsAward } from 'react-icons/bs'
import { motion } from 'framer-motion'

const highlights = [
  { icon: BsShieldCheck, text: 'Authentic warranty on all products' },
  { icon: BsStars, text: 'High-efficiency, brand-certified stock' },
  { icon: BsHeadset, text: 'Dedicated after-sales customer care' },
  { icon: BsAward, text: 'Trusted name in Chishtian since 2015' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 px-5 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-amber-gold/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-deep-blue/5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full lg:w-[45%]"
          >
            <div className="relative h-[400px] sm:h-[450px]">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-amber-gold/30" />
              <img
                src="/images/f.jpeg"
                alt="Shafaqat Ali — Owner"
                className="relative rounded-2xl w-full h-full object-cover shadow-xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-5 left-5 sm:left-auto sm:-right-5 bg-gradient-to-br from-amber-gold to-warm-orange text-deep-blue rounded-xl px-5 py-3 shadow-lg"
              >
                <p className="font-extrabold text-lg leading-none">10+</p>
                <p className="text-xs font-semibold leading-tight">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="w-full lg:w-[55%]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="text-amber-gold font-semibold text-sm tracking-[0.15em] uppercase"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-blue mt-2 mb-4"
            >
              Meet <span className="text-amber-gold">Shafaqat Ali</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-base leading-relaxed mb-3"
            >
              Founded by <span className="font-semibold text-deep-blue">Shafaqat Ali</span>,
              Shafaqt Solar Energy has been a trusted name in Chishtian for premium solar
              solutions. We are committed to providing authentic, high-efficiency solar products
              backed by genuine warranties and dedicated customer service.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-base leading-relaxed mb-6"
            >
              Our mission is to help our community move toward energy independence with confidence,
              offering expert guidance from consultation to installation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-amber-gold/5 hover:to-transparent transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-gold to-warm-orange flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="text-white" size={16} />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{h.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">
            Our Team
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-deep-blue mt-2 mb-8">
            Meet Our <span className="text-amber-gold">Owners</span>
          </h3>
          <div className="max-w-md mx-auto">
            <div className="relative h-[350px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-amber-gold/30 z-0" />
              <img
                src="/images/c.jpeg"
                alt="Our Owners"
                className="relative w-full h-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Our dedicated team working together to serve you better.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
