import { BsWhatsapp } from 'react-icons/bs'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Logo from './Logo'

const quickLinks = ['Home', 'Products', 'About', 'Contact']

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-footer-bg via-deep-blue to-footer-bg text-white overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-gold via-warm-orange to-amber-gold" />

      {/* Glow effects */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-amber-gold/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-warm-orange/5 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="mb-4">
              <Logo size={38} textClassName="!text-2xl bg-gradient-to-r from-amber-gold to-warm-orange bg-clip-text text-transparent" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted partner for premium solar solutions in Chishtian. Powering a brighter,
              sustainable tomorrow with authentic products and dedicated service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-amber-gold mb-4 text-sm uppercase tracking-[0.1em]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/60 hover:text-amber-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-gold/60" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-amber-gold mb-4 text-sm uppercase tracking-[0.1em]">Contact</h4>
            <div className="space-y-3.5 text-sm">
              <a
                href="tel:03290302477"
                className="flex items-center gap-3 text-white/60 hover:text-amber-gold transition-colors duration-200"
              >
                <span className="w-8 h-8 rounded-lg bg-amber-gold/10 flex items-center justify-center shrink-0">
                  <FiPhone size={14} className="text-amber-gold" />
                </span>
                0329-0302477
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <span className="w-8 h-8 rounded-lg bg-amber-gold/10 flex items-center justify-center shrink-0">
                  <FiMapPin size={14} className="text-amber-gold" />
                </span>
                <span>Khawajah Bazaar, Electronics Chishtian</span>
              </div>
              <a
                href="https://wa.me/923290302477"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-green-400 transition-colors duration-200"
              >
                <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <BsWhatsapp size={14} className="text-green-400" />
                </span>
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Work Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-amber-gold mb-4 text-sm uppercase tracking-[0.1em]">Working Hours</h4>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex justify-between">
                <span>Mon – Thu, Sat – Sun</span>
                <span className="text-white/80 font-medium">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span className="text-red-400 font-medium">Closed</span>
              </div>
            </div>
            <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-amber-gold/10 to-warm-orange/5 border border-amber-gold/20">
              <p className="text-sm text-white/70">
                <span className="text-amber-gold font-bold">Call us today</span> for a free consultation and quote!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Shafaqt Solar Energy. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Powered by Solar Energy ☀️</p>
        </motion.div>
      </div>
    </footer>
  )
}
