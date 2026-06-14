import Link from "next/link";

export const metadata = {
  title: "How It Works",
  description:
    "Learn how to download TikTok videos without watermark in 4 simple steps using SnapTok — the fastest free TikTok video saver.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How SnapTok Works — 4 Simple Steps",
    description: "Download any TikTok video without watermark in 4 easy steps.",
    url: "/how-it-works",
  },
};

const steps = [
  {
    n: "01",
    title: "Open TikTok & find your video",
    desc: "Browse TikTok on mobile or desktop. Find the video you want to save. You can use any TikTok link — from the app, the website, or shared by someone else.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Copy the video link",
    desc: "On mobile: tap Share → Copy link. On desktop: click the share button or copy the URL from your browser's address bar. Both work perfectly.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-4 10h6a2 2 0 002-2v-8a2 2 0 00-2-2h-6a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Paste the link here",
    desc: 'Go to the Home page, paste the copied link into the input field, then press Enter or tap "Get Video". The tool fetches the video within seconds.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Preview & download",
    desc: 'The video thumbnail, author, and duration are shown. Preview the video in the player, then tap "Download HD Video" to save it to your device — no watermark.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
];

const features = [
  { title: "No watermark", desc: "Videos are served from TikTok's CDN without the in-app watermark overlay." },
  { title: "HD quality", desc: "We always request the highest quality version available for the video." },
  { title: "No sign-up", desc: "No account, no email, no tracking. Just paste a link and download." },
  { title: "All devices", desc: "Works on iPhone, Android, Mac, Windows, and any modern browser." },
  { title: "Instant", desc: "Processing usually takes under 2 seconds from paste to download." },
  { title: "Free forever", desc: "This tool is completely free with no hidden fees or premium tiers." },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <main className="relative max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-pink-100 to-pink-300 bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-gray-400 mt-3 text-lg max-w-xl mx-auto">
            Save any TikTok video without watermark in 4 simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-5 mb-14">
          {steps.map(({ n, title, desc, icon }) => (
            <div
              key={n}
              className="flex gap-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all shadow-lg"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                {icon}
              </div>
              <div>
                <div className="text-xs font-bold text-pink-500 tracking-widest uppercase mb-1">
                  Step {n}
                </div>
                <h2 className="text-lg font-bold mb-1">{title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Why use this tool?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map(({ title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/8 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-sm">{title}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 px-8 py-4 rounded-xl font-bold shadow-lg shadow-pink-900/40 transition-all active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Start Downloading
          </Link>
        </div>
      </main>
    </div>
  );
}
