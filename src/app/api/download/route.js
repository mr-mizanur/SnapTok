export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get("url");

  if (!videoUrl) {
    return new Response("Missing url parameter", { status: 400 });
  }

  let url;
  try {
    url = new URL(videoUrl);
  } catch {
    return new Response("Invalid url parameter", { status: 400 });
  }

  const videoRes = await fetch(url.toString());

  if (!videoRes.ok) {
    return new Response("Failed to fetch video", { status: 502 });
  }

  const contentType = videoRes.headers.get("content-type") || "video/mp4";

  return new Response(videoRes.body, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": 'attachment; filename="tiktok-video.mp4"',
    },
  });
}
