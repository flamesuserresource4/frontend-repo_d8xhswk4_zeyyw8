import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 w-full grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-24"
        >
          <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">Enterprise Web Agency</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Design. Host. Maintain.
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            We craft high‑performance websites, manage secure hosting, and provide proactive maintenance — so you can focus on growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/services" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">Explore Services</a>
            <a href="/contact" className="px-5 py-3 rounded-lg bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 transition">Get a Quote</a>
          </div>
          <div className="mt-6 text-sm text-gray-500">Contact: info@liteweb.my</div>
        </motion.div>
      </div>
    </section>
  )
}
