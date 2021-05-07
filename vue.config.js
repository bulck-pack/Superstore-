module.exports = {
  // 给配置路径的文件起别名
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
}
