import { useState, useEffect } from 'react'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        <Logo
          size={34}
          textClassName={
            scrolled
              ? 'bg-gradient-to-r from-deep-blue to-blue-700 bg-clip-text text-transparent text-base sm:text-lg md:text-xl'
              : 'text-white text-base sm:text-lg md:text-xl'
          }
        />

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm sm:text-base font-medium transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-amber-gold after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? 'text-gray-700 hover:text-deep-blue'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:03290302477"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-gold to-warm-orange text-deep-blue px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-amber-gold/40 hover:scale-105 transition-all duration-300"
          >
            <FiPhone size={15} />
            Call Now
          </a>
        </div>

        <button
          className={`md:hidden p-1 transition-colors duration-300 ${
            scrolled ? 'text-deep-blue' : 'text-white'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-100 overflow-hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-amber-gold/10 hover:to-transparent hover:text-deep-blue border-b border-gray-50 transition-all"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:03290302477"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-gold to-warm-orange text-deep-blue mx-4 my-3 px-4 py-3 rounded-full text-sm font-bold"
            >
              <FiPhone size={15} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
