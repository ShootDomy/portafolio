import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/src/image/**",
        search: "",
      },
    ],
    remotePatterns: [new URL("https://gqtcjoehbteqyaofqbpt.supabase.co/**")],
  },
  /* config options here */
};

export default nextConfig;
