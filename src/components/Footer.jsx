export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-white font-semibold">Nebula Services</h4>
            <p className="mt-2 text-white/70 text-sm">A sci‑fi marketplace for real‑world help. Instantly find pros, schedule, chat, and pay — all in one place.</p>
          </div>
          <div>
            <h5 className="text-white font-medium">Marketplace</h5>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              <li>Handyman</li>
              <li>Tutoring</li>
              <li>Tech Support</li>
              <li>Beauty</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium">Company</h5>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium">Legal</h5>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Nebula Services. All rights reserved.</p>
          <p>Built with love among the stars.</p>
        </div>
      </div>
    </footer>
  );
}
