export default function CTA() {
  return (
    <section className="relative bg-[#06040F] text-white py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-700/30 via-fuchsia-700/20 to-indigo-700/30 p-8 md:p-12 backdrop-blur shadow-[0_0_60px_0_rgba(99,102,241,0.25)]">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold drop-shadow-[0_0_25px_rgba(139,92,246,0.35)]">Step into the future interface</h3>
            <p className="mt-3 text-white/80">Start building with an interface forged in neon and stardust. Your users will feel the difference.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:from-fuchsia-500 hover:to-indigo-500 transition-colors">Create project</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors">Documentation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
