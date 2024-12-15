/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        config.resolve.fallback = { fs: false, path: false };
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        dimensions: false,
                    },
                },
            ],
        })
        return config;
    },
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default nextConfig