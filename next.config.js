/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcLoader: true,
        swcMinify: true,
    },
}

module.exports = nextConfig
