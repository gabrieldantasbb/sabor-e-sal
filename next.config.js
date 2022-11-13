/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: ['cdn.sanity.io'],
    dangerouslyAllowSVG: true,
	},
}

module.exports = nextConfig
