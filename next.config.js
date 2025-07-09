/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
// const { withPlausibleProxy } = require('next-plausible');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: true,
      },
      {
        source: "/college",
        destination: "https://www.iitm.ac.in/",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/zeus-12",
        permanent: true,
      },
    ];
  },
};

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com;
    child-src *.youtube.com *.google.com *.twitter.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src * blob: data:;
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  // {
  //   key: 'X-Frame-Options',
  //   value: 'DENY',
  // },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

module.exports = withContentlayer(nextConfig);

// = withPlausibleProxy({
//   customDomain: 'https://i-totally-love-easylist.swmg.top',
// })(
// withContentlayer(nextConfig);
// );
