import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Enable SCSS absolute-like imports by adding src to Sass load paths
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
  },
};

export default nextConfig;
