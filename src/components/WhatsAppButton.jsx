import { BsWhatsapp } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923290302477?text=Assalam-o-Alaikum!%20I%20am%20interested%20in%20your%20solar%20products."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-50 bg-gradient-to-br from-green-400 to-green-600 text-white w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-shadow duration-300"
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(34, 197, 94, 0.6)',
            '0 0 0 12px rgba(34, 197, 94, 0)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        className="absolute inset-0 rounded-full"
      />
      <BsWhatsapp size={28} className="relative z-10" />
    </motion.a>
  )
}
