/*
 * @Description: πε¨θΏιεδ½ ηζθΏ°
 * @Autor: ζΉθζΏ
 * @Date: 2022-02-25 09:59:16
 * @LastEditTime: 2022-07-04 10:44:10
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    port: 5500
  }
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .tap((options) => {
  //       options.compilerOptions = {
  //         ...options.compilerOptions,
  //         isCustomElement: (tag) => tag.startsWith('a-')
  //       }
  //       return options
  //     })
  // }
})
