// current local time api

// Opt out of caching for all data requests in the route segment
// export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    currentTime: new Date().toLocaleTimeString(),
  });
}
