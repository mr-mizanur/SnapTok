"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Is it free to download TikTok videos?",
    a: "Yes, completely free. There are no hidden charges, no premium plans, and no registration required. Just paste the link and download.",
  },
  {
    q: "Will the downloaded video have a watermark?",
    a: "No. Videos downloaded through this tool are sourced directly from TikTok's servers without the watermark overlay that the TikTok app adds.",
  },
  {
    q: "What types of TikTok links are supported?",
    a: "Any public TikTok video link works — from tiktok.com/@ URLs, short vm.tiktok.com links, or links shared from the TikTok mobile app.",
  },
  {
    q: "Why can't I download a video?",
    a: "Private or deleted videos cannot be downloaded. Make sure the account is public and the video still exists. Also double-check that you've copied the full video URL.",
  },
  {
    q: "What quality is the downloaded video?",
    a: "We always request the highest quality version from TikTok's CDN, which is typically 720p or 1080p depending on the original upload.",
  },
  {
    q: "Can I download TikTok videos on iPhone or Android?",
    a: 'Yes. Open this site in Safari (iOS) or Chrome (Android), paste the link, and tap Download. On iOS you may need to use the share sheet → "Save to Files" to store the video.',
  },
  {
    q: "Is it legal to download TikTok videos?",
    a: "Redistributing, re-uploading, or using videos commercially without the creator's permission may violate TikTok's Terms of Service and copyright law. Always credit creators and get permission before reposting their content.",
  },
  {
    q: "Do you store my downloaded videos?",
    a: "No. Videos are streamed directly from TikTok's servers to your device. We never store, cache, or have access to the video files.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:bg-white/8">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-sm md:text-base">{q}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-pink-400 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/8 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
      </div>

      <main className="relative max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-pink-100 to-pink-300 bg-clip-text text-transparent">
            FAQ
          </h1>
          <p className="text-gray-400 mt-3 text-lg">
            Answers to the most common questions.
          </p>
        </div>

        <div className="space-y-3 mb-12">
          {faqs.map((item) => (
            <FaqItem key={item.q} {...item} />
          ))}
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Check the step-by-step guide or go straight to the downloader.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/how-it-works"
              className="backdrop-blur bg-white/8 hover:bg-white/15 border border-white/10 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
            >
              How It Works
            </Link>
            <Link
              href="/"
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-pink-900/40 transition-all"
            >
              Download a Video
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
