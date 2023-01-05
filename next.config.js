/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com'],
    loader: 'custom',
    path:'/'
  },
  typescript: {
    ignoreBuildErrors: true
}
}

module.exports = nextConfig
