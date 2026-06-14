import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 backdrop-blur-xl bg-black/60">
      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Top row — brand + links */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-900/40 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent tracking-tight">
                SnapTok
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left max-w-[220px] leading-relaxed">
              Save any TikTok video — no watermark, no limits, no sign-up.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-500 hover:text-pink-400 text-sm font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 mb-5" />

        {/* Bottom row — copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-gray-500 font-semibold">SnapTok</span>
            {" "}— Free to use. Respect content creators.
          </p>
          <p className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Built for creators, by creators
          </p>
        </div>
      </div>
    </footer>
  );
}
