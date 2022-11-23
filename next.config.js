const withPWA = require("next-pwa");
/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    skipwaiting: true,
    disable: process.env.NODE_ENV == "development",
  },
});
