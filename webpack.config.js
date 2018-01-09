let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

//出口文件
let buildPath=path.resolve(__dirname,'build')


let plugins = [
  //压缩js 
  // new webpack.optimize.UglifyJsPlugin(),
  //提公用js到common.js文件中
  new webpack.optimize.CommonsChunkPlugin({
    name:'common'
  }),
  new webpack.DefinePlugin({
    "process.env": { 
       NODE_ENV: JSON.stringify("production") 
     }
  }),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("style.css", {
    allChunks: true
  }),

];


module.exports = {
  //入口文件 main.js
  entry: {
    build: './src/main.tsx'
  },
  //输出的文件名
  output: {
    path: buildPath,
    filename: '[name].js',
    publicPath : 'build/',
    chunkFilename: '[id].build.js?[chunkhash]'
  },
  module:{
    rules:[
      {
        test: /\.tsx$/,
        use: 'ts-loader',
      },
      {
        test: /\.less$/,
        use:ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','less-loader']
        })
      },
      {
        test: /\.css$/,
        use:ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      },
      {
        test: /\.(png|jpg|ttf)$/,
        use: 'url-loader?limit=8000&name=imgs/[name].[hash].[ext]'
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.tsx', '.js', '.ts', ' ']
  },
  plugins: plugins
};
