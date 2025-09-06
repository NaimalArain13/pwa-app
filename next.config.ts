const withPWA = require('next-pwa')({
  dest: 'public'
})

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWA(nextConfig);
