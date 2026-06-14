import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import InstallPrompt from "@/components/InstallPrompt";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | SnapTok",
    default: "SnapTok — Download TikTok Videos Without Watermark",
  },
  description:
    "SnapTok lets you download any TikTok video in HD without watermark — free, instant, no sign-up required. The fastest TikTok video saver online.",
  keywords: [
    "tiktok downloader",
    "snaptok",
    "download tiktok video",
    "tiktok no watermark",
    "save tiktok video",
    "tiktok video saver",
    "tiktok hd download",
    "free tiktok downloader",
  ],
  authors: [{ name: "SnapTok" }],
  creator: "SnapTok",
  publisher: "SnapTok",
  openGraph: {
    type: "website",
    siteName: "SnapTok",
    title: "SnapTok — Download TikTok Videos Without Watermark",
    description:
      "Save any TikTok video in HD without watermark. Free, instant, and no sign-up needed.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapTok — Download TikTok Videos Without Watermark",
    description:
      "Save any TikTok video in HD without watermark. Free, instant, and no sign-up needed.",
    creator: "@snaptok",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SnapTok",
  },
  other: { "mobile-web-app-capable": "yes" },
};

export const viewport = {
  themeColor: "#ec4899",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SnapTok",
  url: SITE_URL,
  description: "Download TikTok videos without watermark — free and instant.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?url={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <ServiceWorkerRegister />
        <InstallPrompt />
        <div className="pb-20">
          {children}
          <Footer />
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
