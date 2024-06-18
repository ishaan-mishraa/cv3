import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = process.env.PORT || 5000;

// Proxy requests to the React development server
app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:5173',
    changeOrigin: true,
  })
);

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
