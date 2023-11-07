/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com', 'images.unsplash.com'],
        unoptimized: true,
    }, experimental: {
        appDir: true,
    },
    output: 'export',
}

module.exports = nextConfig
