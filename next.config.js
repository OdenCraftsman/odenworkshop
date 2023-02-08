/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns:{
    //   protocol: 'https',
    //   hostname: 'images.microcms-assets.io',
    //   port: '',
    //   pathname: '/assets/2f0cb998abed48edb17f8c249d7a089f',
    // }
    domains: ['images.microcms-assets.io'],
  }
}

module.exports = nextConfig