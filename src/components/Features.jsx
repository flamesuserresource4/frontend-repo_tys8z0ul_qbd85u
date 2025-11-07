import { Code2, Sparkles, Shield, Cpu } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Neon-fast UI',
    desc: 'Responsive components and micro-animations tuned for futuristic flow.'
  },
  {
    icon: Cpu,
    title: '3D-native',
    desc: 'Seamless Spline integration so your interface feels alive.'
  },
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'Hardened defaults, privacy-first patterns, and safe interactions.'
  },
  {
    icon: Code2,
    title: 'Developer centric',
    desc: 'Composable building blocks with clean, modern APIs.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#070513] text-white py-20 md:py-28 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{background:"radial-gradient(600px 200px at 20% 10%, rgba(168,85,247,.25), transparent), radial-gradient(400px 160px at 80% 90%, rgba(99,102,241,.25), transparent)"}} />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-[0_0_25px_rgba(139,92,246,0.35)]">Warp-speed features</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Designed for cyberpunk aesthetics and real-world productivity.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_0_30px_0_rgba(139,92,246,0.15)]">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_2px_rgba(139,92,246,0.35)]">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
