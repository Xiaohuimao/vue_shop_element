module.exports = {
  configureWebpack: {
    resolve : {
      // 别名的配置
      alias: {
          // 项目更目录默认为@
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}