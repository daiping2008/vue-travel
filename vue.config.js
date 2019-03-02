// vue.config.js
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://192.168.1.117:3000/',
        changeOrigin: true,
        ws: true
      }
    }
  }
}
