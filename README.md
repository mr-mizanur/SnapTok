# SnapTok — TikTok Video Downloader

A fast, no-watermark TikTok video downloader built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. No sign-up required.

## Features

- Download TikTok videos without watermark
- One-click clipboard paste
- Video preview before downloading
- Shows author, duration, and channel info
- PWA support (installable on mobile/desktop)
- Deployed on Cloudflare Pages via `next-on-pages`

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 4 |
| Styling | React Compiler enabled |
| Deployment | Cloudflare Pages |
| Worker API | Cloudflare Workers (video metadata) |

## Project Structure

```
src/
├── app/
│   ├── page.js              # Home page
│   ├── layout.js            # Root layout
│   ├── about/page.js        # About page
│   ├── faq/page.js          # FAQ page
│   ├── how-it-works/page.js # How it works page
│   └── api/download/route.js# Video proxy API route
├── components/
│   ├── Downlode.jsx         # Main downloader UI
│   ├── Footer.jsx           # Footer
│   ├── BottomNav.jsx        # Mobile bottom navigation
│   ├── InstallPrompt.jsx    # PWA install prompt
│   └── ServiceWorkerRegister.jsx
public/
└── sw.js                    # Service worker
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

1. User pastes a TikTok video URL
2. The app calls a Cloudflare Worker to fetch video metadata (title, thumbnail, direct video URL)
3. The video is previewed in-browser
4. On download, the request goes through `/api/download` (a Next.js API route) which proxies the video and serves it as `tiktok-video.mp4`

## Build & Deploy

```bash
# Production build
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
