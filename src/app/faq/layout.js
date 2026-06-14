export const metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Common questions about SnapTok — how to download TikTok videos, watermark removal, supported devices, and more.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | SnapTok",
    description: "Answers to common questions about downloading TikTok videos with SnapTok.",
    url: "/faq",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SnapTok FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | SnapTok",
    description: "Answers to common questions about downloading TikTok videos with SnapTok.",
    images: ["/opengraph-image"],
  },
};

export default function FaqLayout({ children }) {
  return children;
}
