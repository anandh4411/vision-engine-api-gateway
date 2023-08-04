const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

let targetUrl = process.env.NODE_DOMAIN_URL + ":3009";

const chatServiceProxy = createProxyMiddleware({
  target: targetUrl,
  changeOrigin: true,
  pathRewrite: {
    "^/chat": "/",
  },
  onProxyReq: (proxyReq, req, res) => {
    if (req.method === "POST" && req.body) {
      const contentType = proxyReq.getHeader("Content-Type");
      if (contentType && contentType.startsWith("application/json")) {
        const bodyData = JSON.stringify(req.body);
        proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      }
    }
  },
});

module.exports = chatServiceProxy;
