const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: 'localhost',
    },
    resolve: {
      alias: {
        cpns: path.join(__dirname, '/src/components/')
      }
    }
  }
})
