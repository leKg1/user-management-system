const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  // Proxy configuration for development trying to avoid CORS issues
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // API endpoint
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },

  // Environment variables setup
  publicPath:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",

  // Performance optimizations for production
  productionSourceMap: false,

  // Custom path aliases
  configureWebpack: {
    resolve: {
      alias: {
        "@components": "@/components",
      },
    },
  },
});
