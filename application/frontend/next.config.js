/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "play-lh.googleusercontent.com",
				// port: '',
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "live.mrf.io",
				// port: '',
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "reidcycles.com.au",
				// port: '',
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "blixbike.com",
				// port: '',
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "activesport.co",
				// port: '',
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
