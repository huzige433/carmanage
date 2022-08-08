const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './dist',   // build输出目录
    indexPath: './templates/index.html',   // 打包后index的位置
    assetsDir: 'static/', // 静态资源目录（js, css, img）
    lintOnSave: false, // 是否开启eslint
})
