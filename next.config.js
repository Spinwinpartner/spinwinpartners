/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");
const nextConfig = {
  reactStrictMode: true,
  i18n,
  async headers() {
    return [
      {
        source:
          "/:all*(svg|jpg|png|mp4|webp|woff|woff2|eot|ttf|otf|gif|js|css|json|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Strict-Transport-Security",
            value: "public, max-age=9999999999, must-revalidate",
          },
          {
            key: "X-Robots-Tag",
            value: "all",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
