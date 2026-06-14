export default function manifest() {
  return {
    name: "SnapTok",
    short_name: "SnapTok",
    description:
      "Save any TikTok video without watermark. Free, fast, and instant.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#000000",
    theme_color: "#ec4899",
    categories: ["utilities", "entertainment"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [],
    shortcuts: [
      {
        name: "Download Video",
        short_name: "Download",
        description: "Paste a TikTok URL and download",
        url: "/",
      },
    ],
  };
}
