module.exports = {
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST
    HOST_API_KEY: 'https://api-dev-minimal-v4.vercel.app',
    API_BASE_URL: process.env.API_BASE_URL,
    MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN,
  },
  // basePath: '/',
};

console.log(process.env.MIXPANEL_TOKEN);
