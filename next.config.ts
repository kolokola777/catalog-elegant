import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: [
      "next",
      "react",
      "react-dom"
    ],
  },
  headers: async () => {
    return [
      {
        source: "/",
        headers: [
          {
            key: "DEVELOPED-BY",
            value: "KHAETBEK"
          }
        ]
      }
    ]
  },
};

export default nextConfig;
