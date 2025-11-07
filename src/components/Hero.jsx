import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[84vh] grid place-items-center overflow-hidden bg-gradient-to-b from-black via-[#0B0B16] to-[#080816]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
        >
          The Sci‑Fi Hub for Real‑World Help
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto"
        >
          Connect with specialists across galaxies of skills — book instantly, chat in real time, and pay securely.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition">
            I need help
          </button>
          <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:from-fuchsia-400 hover:to-indigo-400 transition">
            I offer services
          </button>
        </motion.div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-48 w-[110%] rounded-[50%] blur-3xl opacity-30 pointer-events-none bg-gradient-to-r from-fuchsia-500/40 via-sky-500/30 to-indigo-500/40" />
    </section>
  );
}
