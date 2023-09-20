const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '/Users/chxxah/eclipse-workspace/oct04/src/main/resources/static',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:80',
        changeOrigin: true,//cors
        ws: false,//웹소켓 기능 끔, 1:1통신, 웹소켓 막아버림, 계속 정보를 날리는 걸 막음
      }
    }
  }
})
