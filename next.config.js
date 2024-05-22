/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["https://cxamqzrimqkhvzqstcsl.supabase.co"],
    },
};

module.exports = nextConfig;
