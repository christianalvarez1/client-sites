import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Client photos/logos live in Supabase Storage (public `media` bucket).
      { protocol: "https", hostname: "**.supabase.co" },
    ],
  },
};

export default nextConfig;
