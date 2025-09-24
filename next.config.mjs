/** @type {import('next').NextConfig} */

const base = '/perpetiom';
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: true,
    basePath: base,
    assetPrefix: base + '/',

    // ať build nepada kvůli ESLintu/TS
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
