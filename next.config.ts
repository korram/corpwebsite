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
