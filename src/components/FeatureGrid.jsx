import { ShieldCheck, MessageSquare, CalendarClock, CreditCard, Star, Rocket } from "lucide-react";

const features = [
  {
    title: "Verified Pros",
    desc: "Provider verification with documents and reviews keeps the marketplace safe.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Real‑time Chat",
    desc: "Message providers before or after booking, with notifications and media.",
    icon: MessageSquare,
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Smart Scheduling",
    desc: "Book instantly from live availability calendars and get reminders.",
    icon: CalendarClock,
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    title: "Built‑in Payments",
    desc: "Secure checkout via Stripe/PayPal with automatic commissions and receipts.",
    icon: CreditCard,
    color: "from-amber-500 to-rose-500",
  },
  {
    title: "Ratings & Reviews",
    desc: "Trust through transparent ratings, reviews, and dispute resolution.",
    icon: Star,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Admin Console",
    desc: "Moderate users, verify providers, track revenue and growth analytics.",
    icon: Rocket,
    color: "from-purple-500 to-indigo-500",
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative py-16 bg-[#0B0B16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Everything you need to get it done</h2>
        <p className="mt-2 text-center text-white/70 max-w-2xl mx-auto">Sci‑fi aesthetics, enterprise‑grade backbone. A marketplace built for speed, trust, and scale.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon, color }) => (
            <div key={title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className={`absolute -inset-1 opacity-0 hover:opacity-100 blur-2xl transition bg-gradient-to-r ${color}`} />
              <div className="relative z-10">
                <div className={`h-11 w-11 grid place-items-center rounded-xl bg-gradient-to-br ${color} text-white shadow-[0_0_20px_rgba(255,255,255,0.15)]`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-white font-semibold">{title}</h3>
                <p className="mt-1 text-white/70 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
