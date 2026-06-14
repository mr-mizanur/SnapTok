import Link from "next/link";

export const metadata = {
  title: "About SnapTok",
  description:
    "SnapTok is a free, fast, and private TikTok video downloader. No watermark, no sign-up, no limits.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SnapTok — Free TikTok Video Downloader",
    description: "SnapTok is a free, fast TikTok video downloader with no watermark and no sign-up.",
    url: "/about",
  },
};

const techStack = [
  { name: "Next.js 16", desc: "React framework with App Router and streaming SSR" },
  { name: "Tailwind CSS 4", desc: "Utility-first CSS with glassmorphism design" },
  { name: "TikTok CDN API", desc: "Source video data directly from TikTok servers" },
];

const values = [
  {
    title: "Privacy first",
    desc: "We don't track you, store your downloads, or ask for any personal information.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Always free",
    desc: "No subscriptions, no credits, no ads in your face. This tool is and will stay free.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Fast & reliable",
    desc: "Downloads complete in seconds. No queues, no waiting rooms, no captchas.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <main className="relative max-w-3xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl mb-5">
            <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-pink-100 to-pink-300 bg-clip-text text-transparent">
            About
          </h1>
          <p className="text-gray-400 mt-3 text-lg max-w-lg mx-auto leading-relaxed">
            A fast, private, and free TikTok video downloader built with modern web technologies.
          </p>
        </div>

        {/* About section */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mb-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">What is this?</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            SnapTok is a web app that lets you save any public TikTok video to your device without the watermark. Paste a link, get your video — no sign-up, no extensions, no fuss.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            The tool works by requesting video metadata and the source file directly from TikTok&apos;s infrastructure, then proxying the download through our server so your browser receives a clean file with a proper filename.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {values.map(({ title, desc, icon }) => (
            <div key={title} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-all">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-3">
                {icon}
              </div>
              <h3 className="font-bold text-sm mb-1">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-xl font-bold mb-5">Built with</h2>
          <div className="space-y-3">
            {techStack.map(({ name, desc }) => (
              <div key={name} className="flex items-start gap-4 bg-white/4 border border-white/8 rounded-xl px-5 py-4">
                <svg className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-sm">{name}</span>
                  <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="backdrop-blur-xl bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 mb-8">
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-300 text-sm mb-1">Disclaimer</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Downloading and re-distributing TikTok content without creator permission may violate TikTok&apos;s Terms of Service and applicable copyright laws. Always respect content creators and their work.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 px-8 py-4 rounded-xl font-bold shadow-lg shadow-pink-900/40 transition-all active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download a Video
          </Link>
        </div>

      </main>
    </div>
  );
}
