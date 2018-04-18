const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const PATHS = {
  root: path.resolve(__dirname, './'),
  nodeModules: path.resolve(__dirname, './node_modules'),
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
}

module.exports = (env = {}) => {
  console.log({ env });

  const isBuild = !!env.build
  const isDev = !env.build
  const isSourceMap = !!env.sourceMap || isDev
  const DEV_SERVER = {
    hot: isDev,
    hotOnly: isDev,
    historyApiFallback: true,
    overlay: true,
    // stats: 'verbose',
    // proxy: {
    //   '/api': 'http://localhost:3000'
    // },
    port: 8070
  }

  return {
    cache: true,
    devtool: isDev ? 'eval-source-map' : 'source-map',
    devServer: DEV_SERVER,

    context: PATHS.root,

    entry: './src/App.tsx',
    output: {
      path: PATHS.dist,
      publicPath: '',
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js'
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      modules: ['src', 'node_modules'],
    },

    // Add the loader for .ts files.
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: PATHS.src,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                compilerOptions: {
                  'sourceMap': isSourceMap,
                  'target': isDev ? 'es2015' : 'es5',
                  'isolatedModules': true,
                  'noEmitOnError': false,
                  'removeComments': false
                },
              },
            },
          ]
        }
      ]
    },
    optimization: {
      // splitChunks: {
        // cacheGroups: {
          // vendors: {
          //   test: /[\\/]node_modules[\\/]/,
          //   name: "vendors",
          //   chunks: "all",
          // },
        // }
      // },
      namedModules: true,
      minimize: isBuild
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
        },
      }),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      ...(isDev ? [
        new webpack.HotModuleReplacementPlugin({
          // multiStep: true, // better performance with many files
        }),
      ] : []),
      ...(isBuild ? [
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
      ] : []),
    ]
  }
}
