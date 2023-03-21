/** @type {import('next').NextConfig} */

const withSVGR = require('next-plugin-svgr');

module.exports = withSVGR({
  reactStrictMode: false,
  images:{
    domains:["images.unsplash.com"]
  }
});
