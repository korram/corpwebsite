// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   i18n: {
//     defaultLocale: 'th',
//     locales: ['th','en'],
//     localeDetection: false,
//   },
//   reloadOnPrerender: process.env.NODE_ENV === 'development',
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.axa-contento-118412.eu"], // Add the hostname here
  },
  transpilePackages: ['next-international', 'international-types'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Uncomment to set base path
  // basePath: '/base',
  // Uncomment to use Static Export
  // output: 'export',
};

module.exports = nextConfig;
