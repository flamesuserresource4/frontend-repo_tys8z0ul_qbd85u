import { Rocket, Search, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white text-lg">
              Nebula Services
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-8">
            <div className="flex items-center gap-2 w-full rounded-xl border border-white/10 bg-white/5 focus-within:bg-white/10 transition-colors">
              <Search className="ml-3 h-4 w-4 text-white/60" />
              <input
                className="w-full bg-transparent outline-none px-3 py-2.5 text-sm text-white placeholder-white/50"
                placeholder="Search services, skills, or providers..."
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white transition">
              Sign in
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-black bg-white hover:bg-white/90 transition">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg border border-white/10 text-white/80 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5">
              <Search className="ml-3 h-4 w-4 text-white/60" />
              <input
                className="w-full bg-transparent outline-none px-3 py-2.5 text-sm text-white placeholder-white/50"
                placeholder="Search services, skills, or providers..."
              />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white transition border border-white/10">
                Sign in
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-black bg-white hover:bg-white/90 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
