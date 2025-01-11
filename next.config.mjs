/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**', // Permite todas las rutas desde Cloudinary
          },
        ],
      },
      async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.vercel.app https://*.spaceuis.com",
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://*.vercel.app https://*.spaceuis.com',
          },
        ],
      },
    ];
  },

};

export default nextConfig;
