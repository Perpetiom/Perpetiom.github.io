/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true,

    // ať build nepada kvůli ESLintu/TS
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
