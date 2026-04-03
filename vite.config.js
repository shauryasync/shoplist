// https://vite.dev/config/
export default {
  server: {
    proxy: {
      "/api": {
        target: "https://fakestoreapi.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
};
