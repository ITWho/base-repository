/**
 * postcss 是一种对css编译的工具，类似babel对js的处理，常见的功能如：
 * 使用下一代css语法、自动补全浏览器前缀、自动把px代为转换成rem、css 代码压缩等等
 * author: 胡江浩
 * description: 详情请参考postcss中文文档：https://www.postcss.com.cn/
 * @createTime: 1/6/2022, 11:56:17 AM
 */

const path = require('path');

module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import')({
      resolve(id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3));
        }
        if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2));
        }
        if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1));
        }
        return id;
      },
    }),
    require('postcss-nested'),
    require('postcss-windicss-postcss7'),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5',
    }),
  ],
};
