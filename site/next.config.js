/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'test evironment',
    description: 'My test environment for KASM images.',
    icon: 'https://lieme-sudo.github.io/kasm-registry/1.0/icon.png',
    listUrl: 'https://lieme-sudo.github.io/kasm-registry/',
    contactUrl: 'https://lieme-sudo.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
