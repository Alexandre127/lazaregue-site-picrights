/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/', destination: '/litige-afp-picrights/', permanent: false },
    ]
  },
};

export default nextConfig;
