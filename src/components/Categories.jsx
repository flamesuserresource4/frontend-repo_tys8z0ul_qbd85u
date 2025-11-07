import { Wrench, GraduationCap, Laptop, Dumbbell, Paintbrush, Scissors, Sprout, Shield } from "lucide-react";

const items = [
  { name: "Handyman", icon: Wrench, color: "from-amber-500 to-rose-500" },
  { name: "Tutoring", icon: GraduationCap, color: "from-sky-500 to-indigo-500" },
  { name: "Tech Support", icon: Laptop, color: "from-emerald-500 to-teal-500" },
  { name: "Fitness", icon: Dumbbell, color: "from-fuchsia-500 to-purple-500" },
  { name: "Design & Creative", icon: Paintbrush, color: "from-pink-500 to-red-500" },
  { name: "Beauty", icon: Scissors, color: "from-purple-500 to-indigo-500" },
  { name: "Gardening", icon: Sprout, color: "from-green-500 to-lime-500" },
  { name: "Security", icon: Shield, color: "from-amber-600 to-orange-600" },
];

export default function Categories() {
  return (
    <section className="relative py-14 sm:py-18 bg-[#080816]">
      <div className="absolute inset-x-0 -top-16 h-24 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Explore categories</h2>
          <button className="text-sm text-white/70 hover:text-white">See all</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(({ name, icon: Icon, color }) => (
            <button
              key={name}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/[0.08] transition`}
            >
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 blur-2xl transition bg-gradient-to-r ${color}`} />
              <div className="relative z-10 flex items-center gap-3">
                <div className={`h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br ${color} text-white shadow-[0_0_20px_rgba(255,255,255,0.15)]`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-white font-medium">{name}</p>
                  <p className="text-xs text-white/60">Discover experts</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
