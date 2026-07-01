import { FiPhone, FiClock, FiMapPin } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { motion } from 'framer-motion'

const contactCards = [
  {
    icon: FiMapPin,
    label: 'Address',
    content: (
      <>
        Shafqat Solar Energy<br />
        Khawajah Bazaar, Electronics Chishtian
      </>
    ),
  },
  {
    icon: FiPhone,
    label: 'Phone',
    content: <a href="tel:03290302477" className="hover:text-amber-gold transition-colors">0329-0302477</a>,
  },
  {
    icon: FiClock,
    label: 'Working Hours',
    content: (
      <>
        Mon – Thu, Sat – Sun: 9:00 AM – 8:00 PM<br />
        Friday: Closed
      </>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-5 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-deep-blue/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-amber-gold/5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-blue mt-2 mb-3">
            Contact & Location
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Reach out for quotes, inquiries, or expert advice — we are here to help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            {contactCards.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-amber-gold/20 to-warm-orange/20 flex items-center justify-center shrink-0">
                      <Icon className="text-amber-gold" size={18} />
                    </div>
                  <div>
                    <h3 className="font-bold text-deep-blue text-sm mb-1">{c.label}</h3>
                    <div className="text-gray-600 text-sm sm:text-base leading-relaxed">{c.content}</div>
                  </div>
                </motion.div>
              )
            })}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              href="https://wa.me/923290302477?text=Assalam-o-Alaikum!%20I%20am%20interested%20in%20your%20solar%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-bold text-sm hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
            >
              <BsWhatsapp size={22} />
              Chat on WhatsApp — Quick Reply
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[300px] sm:h-[350px] lg:h-[450px]"
          >
            <iframe
              title="Shafqat Solar Energy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6789!2d72.8610950!3d29.7983320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
