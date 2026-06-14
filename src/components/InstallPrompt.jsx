"use client";

import { useState, useEffect } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Already installed — never show
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    if (sessionStorage.getItem("install-dismissed")) return;

    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(ios);

    if (ios) {
      setShow(true);
      return;
    }

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setShow(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("install-dismissed", "1");
  };

  if (!show || dismissed) return null;

  return (
    <div className="fixed top-3 left-3 right-3 z-[60] max-w-lg mx-auto animate-in slide-in-from-top-4 duration-300">
      <div className="backdrop-blur-2xl bg-black/80 border border-white/15 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.8)] flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-white">Install SnapTok</p>
          {isIOS ? (
            <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
              Tap the <span className="inline-flex items-center gap-0.5 text-pink-400 font-medium">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </span>, then <strong className="text-white">Add to Home Screen</strong>.
            </p>
          ) : (
            <p className="text-gray-400 text-xs mt-0.5">
              Add to your home screen for quick access — works offline too.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 flex-shrink-0">
          {!isIOS && (
            <button
              onClick={handleInstall}
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95"
            >
              Install
            </button>
          )}
          <button
            onClick={handleDismiss}
            className="text-gray-500 hover:text-gray-300 text-xs text-center transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
