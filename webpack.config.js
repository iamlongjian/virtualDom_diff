const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // publicPath:虚拟路径
    publicPath:'dist',
    // 打包出来的文件名
    filename: 'bundle.js',
  },
  devServer:{
    port:8989,
    // 静态资源文件夹
    contentBase:'www'
  }
};