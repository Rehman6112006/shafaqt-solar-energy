import { motion } from 'framer-motion'

export default function Logo({ size = 32, textClassName = '' }) {
  return (
    <a href="#home" className="flex items-center gap-2.5 group">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.line
              key={i}
              x1="32" y1="8" x2="32" y2="18"
              stroke="url(#goldGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${angle} 32 32)`}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
            />
          ))}
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDB813" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </motion.svg>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="12" fill="#FDB813" />
            <circle cx="16" cy="16" r="8" fill="#FFD700" />
          </svg>
        </motion.div>

        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          className="absolute inset-0"
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="20" y="40" width="24" height="16" rx="2" fill="#0F4C81" />
          <rect x="22" y="42" width="9" height="5" rx="1" fill="#1E5A9E" />
          <rect x="33" y="42" width="9" height="5" rx="1" fill="#1E5A9E" />
          <rect x="22" y="49" width="9" height="5" rx="1" fill="#1E5A9E" />
          <rect x="33" y="49" width="9" height="5" rx="1" fill="#1E5A9E" />
          <rect x="28" y="56" width="8" height="4" rx="1" fill="#1E5A9E" />
        </motion.svg>
      </div>

      <span className={`font-extrabold tracking-tight transition-all duration-300 ${textClassName || 'text-white'}`}>
        Shafaqt Solar
        <span className="hidden sm:inline"> Energy</span>
      </span>
    </a>
  )
}
