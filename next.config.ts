// const nextConfig = {
//   images: {
//     domains: ["images.axa-contento-118412.eu"], // Add the hostname here
//         remotePatterns: [
//           {
//             protocol: "https",
//             hostname: "images.axa-contento-118412.eu",
//           },
//         ],
//   },
//   transpilePackages: ['next-international', 'international-types'],
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   // Uncomment to set base path
//   // basePath: '/base',
//   // Uncomment to use Static Export
//   // output: 'export',
// };

// module.exports = nextConfig;
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig : NextConfig= {
  images: {
    domains: ["images.axa-contento-118412.eu"], // Add the hostname here
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.axa-contento-118412.eu",
          },
        ],
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

export default withNextIntl(nextConfig);
