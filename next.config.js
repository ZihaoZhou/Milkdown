const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // For PWA Updater
  skipWaiting: false,
  register: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export', // Ensure static export
};

module.exports = withPWA(nextConfig);
