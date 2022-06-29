/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_EMAIL: process.env.NEXT_EMAIL,
    NEXT_PASS: process.env.NEXT_PASS,
  },
};

module.exports = nextConfig;
