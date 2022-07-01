/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_EMAIL: process.env.NEXT_EMAIL,
    NEXT_PASS: process.env.NEXT_PASS,
    SUPABASE_URL: process.env.NEXT_SUPABASE_URL,
    SUPABASE_ANON: process.env.NEXT_SUPABASE_ANON,
  },
};

module.exports = nextConfig;
