import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a14 50%, #0a0a0a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239,68,68,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Icon */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 24,
            background: "linear-gradient(135deg, #ec4899, #ef4444)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
            boxShadow: "0 20px 60px rgba(236,72,153,0.5)",
          }}
        >
          <svg width="62" height="62" viewBox="0 0 24 24" fill="white">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
          </svg>
        </div>

        {/* App name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            background: "linear-gradient(90deg, #f9a8d4, #ec4899, #f87171)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-2px",
            marginBottom: 16,
          }}
        >
          SnapTok
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 28, color: "#9ca3af", fontWeight: 400, textAlign: "center", maxWidth: 680 }}>
          Save any TikTok video — no watermark, no limits, no sign-up
        </div>

        {/* Badge row */}
        <div style={{ display: "flex", gap: 16, marginTop: 36 }}>
          {["Free", "HD Quality", "No Watermark", "Instant"].map((badge) => (
            <div
              key={badge}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100,
                padding: "8px 20px",
                color: "#e5e7eb",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
