import Download from "@/components/Downlode";

export const metadata = {
  title: "SnapTok — Download TikTok Videos Without Watermark",
  description:
    "Paste any TikTok URL to download HD videos without watermark for free. Instant results, no sign-up, no limits.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SnapTok — Download TikTok Videos Without Watermark",
    description: "Paste any TikTok URL to instantly download HD videos without watermark.",
    url: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SnapTok",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Download TikTok videos without watermark in HD. Free and instant.",
  featureList: [
    "No watermark",
    "HD quality",
    "Free to use",
    "No registration required",
    "Instant download",
    "Works on any device",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Download />
    </>
  );
}
