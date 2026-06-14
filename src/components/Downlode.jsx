"use client";

import { useState } from "react";

export default function Downlode() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [pasted, setPasted] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text.trim());
      setPasted(true);
      setTimeout(() => setPasted(false), 1500);
      setError("");
    } catch {
      setError("Clipboard access denied — paste manually with Ctrl+V / ⌘V.");
    }
  };

  const handleFetch = async () => {
    if (!url.trim()) { setError("Please enter a TikTok URL"); return; }
    setLoading(true); setError(""); setData(null);
    try {
      const res = await fetch(
        `https://old-studio-tiktok-down.oldhacker7866.workers.dev/?url=${encodeURIComponent(url)}`
      );
      const result = await res.json();
      if (result.status === "success") { setData(result); }
      else { setError(result.message || "Failed to fetch video"); }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Check the URL and try again.");
    } finally { setLoading(false); }
  };

  const handleKeyDown = (e) => { if (e.key === "Enter") handleFetch(); };

  const handleSaveVideo = async () => {
    if (!data?.video) return;
    setDownloading(true);
    try {
      const res = await fetch(`/api/download?url=${encodeURIComponent(data.video)}`);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl; a.download = "tiktok-video.mp4"; a.click();
      URL.revokeObjectURL(blobUrl);
    } catch { setError("Download failed. Please try again."); }
    finally { setDownloading(false); }
  };

  const handleCopy = () => {
    const text = data?.video || url;
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fmtDuration = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white flex flex-col">
      {/* ambient glow orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <main className="relative flex-1 px-4 py-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl mb-4">
              <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
              </svg>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-pink-100 to-pink-300 bg-clip-text text-transparent">
              SnapTok
            </h1>
            <p className="text-gray-400 mt-3 text-lg">
              Save any TikTok video — no watermark, no limits, no sign-up
            </p>
          </div>

          {/* Search Box */}
          <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Input with inline Paste button */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Paste TikTok video URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-white/8 backdrop-blur border border-white/10 rounded-xl pl-5 pr-24 py-4 outline-none focus:border-pink-500/60 focus:ring-2 focus:ring-pink-500/20 transition-all placeholder-gray-600 text-white"
                />
                <button
                  onClick={handlePaste}
                  title="Paste from clipboard"
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 backdrop-blur bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-semibold px-3 py-2 rounded-lg transition-all active:scale-95"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {pasted ? "Done!" : "Paste"}
                </button>
              </div>

              <button
                onClick={handleFetch}
                disabled={loading}
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-semibold shadow-lg shadow-pink-900/40 transition-all active:scale-95"
              >
                {loading ? "Fetching..." : "Get Video"}
              </button>
              <button
                onClick={handleCopy}
                className="backdrop-blur bg-white/8 hover:bg-white/15 border border-white/10 px-6 py-4 rounded-xl transition-all font-medium min-w-[90px] active:scale-95"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {error && (
              <div className="mt-4 flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center mt-14 gap-4 text-gray-400">
              <div className="h-12 w-12 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin" />
              <p className="text-sm">Fetching video info...</p>
            </div>
          )}

          {/* Result */}
          {data && (
            <div className="mt-10 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.7)] ring-1 ring-white/5">
              <div className="relative">
                <img
                  src={data.thumbnail}
                  alt={data.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="text-xl font-bold leading-snug line-clamp-2 drop-shadow-lg">
                    {data.title}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Author", value: data.author },
                    { label: "Duration", value: fmtDuration(data.duration) },
                    { label: "Channel", value: data.channel },
                  ].map(({ label, value }) => (
                    <div key={label} className="backdrop-blur bg-white/5 border border-white/8 rounded-2xl p-4">
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{label}</p>
                      <p className="font-semibold text-sm truncate">{value}</p>
                    </div>
                  ))}
                </div>

                <video controls className="w-full rounded-2xl border border-white/10 shadow-lg" src={data.video} />

                <button
                  onClick={handleSaveVideo}
                  disabled={downloading}
                  className="mt-5 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-bold shadow-lg shadow-pink-900/40 transition-all active:scale-95"
                >
                  {downloading ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download HD Video
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* How it works — shown only on empty state */}
          {!data && !loading && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { n: "1", title: "Copy the URL", desc: "Open TikTok and copy the video link from the share menu." },
                { n: "2", title: "Paste & Fetch", desc: "Paste the URL in the box above and tap Get Video." },
                { n: "3", title: "Download", desc: "Preview the video then tap Download HD Video to save it." },
              ].map(({ n, title, desc }) => (
                <div key={n} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 transition-all">
                  <div className="text-3xl font-extrabold text-pink-500 mb-2">{n}</div>
                  <h3 className="font-semibold text-base mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

    </div>
  );
}
