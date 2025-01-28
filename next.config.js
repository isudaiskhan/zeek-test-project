/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: "dist",
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    // just to hide warnings in the console should remove when nextjs provides this feature
    silenceDeprecations: ["legacy-js-api"],
  },
};

module.exports = nextConfig;
