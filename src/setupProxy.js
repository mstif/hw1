const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/fact', // 👈🏽 your API endpoint goes here.
    createProxyMiddleware({
      target: 'https://catfact.ninja/', // 👈🏽 your API URL goes here.
      changeOrigin: true,
    })
  );
};