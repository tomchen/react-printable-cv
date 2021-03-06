const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin')
  .default
const RemovePlugin = require('remove-files-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const postcssNormalize = require('postcss-normalize')
const cssnano = require('cssnano')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const { exec } = require('child_process')
const settings = require('./settings')

module.exports = (env, argv) => {
  const dev = argv.mode === 'development'
  const outputPath = path.join(__dirname, 'dist')
  const jsPath = 'scripts/'
  const cssPath = 'styles/'

  const config = {
    entry: './src/index.js',
    output: {
      filename: `${jsPath}[name].[contenthash].js`,
      chunkFilename: `${jsPath}[id].[contenthash].js`,
      path: outputPath,
    },
    devServer: {
      port: 8080,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        // {
        //   test: /\.html$/,
        //   use: {
        //     loader: 'html-loader',
        //   },
        // },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: cssPath ? '../' : '', // need this hack because `filename: 'css/...'` (has cssPath)
                hmr: dev,
                reloadAll: true,
              },
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: dev,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: true,
                plugins: () => [
                  postcssPresetEnv(),
                  postcssNormalize(),
                  cssnano(),
                ],
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            dev || (argv.mode === 'production' && !settings.inline_resources)
              ? {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'images/',
                  },
                }
              : {
                  loader: 'url-loader',
                  // options: {
                  //   limit: 8192,
                  // },
                },
            !dev && {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                disable: true,
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ].filter((a) => a !== false),
        },
        {
          test: /\.pdf$/i,
          use: [
            dev || (argv.mode === 'production' && !settings.inline_resources)
              ? {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'pdf/',
                  },
                }
              : {
                  loader: 'url-loader',
                  // options: {
                  //   limit: 8192,
                  // },
                },
          ],
        },
        {
          test: /\.ico$/i,
          use: [
            dev || (argv.mode === 'production' && !settings.inline_resources)
              ? {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'icons/',
                  },
                }
              : {
                  loader: 'url-loader',
                  // options: {
                  //   limit: 8192,
                  // },
                },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            dev || (argv.mode === 'production' && !settings.inline_resources)
              ? {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'fonts/',
                  },
                }
              : 'base64-inline-loader',
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgo: true,
                svgoConfig: {
                  plugins: {
                    removeViewBox: false,
                    ...(dev
                      ? {}
                      : {
                          addAttributesToSVGElement: false,
                          addClassesToSVGElement: false,
                          cleanupAttrs: true,
                          cleanupEnableBackground: true,
                          cleanupIDs: true,
                          cleanupListOfValues: true,
                          cleanupNumericValues: { floatPrecision: 2 },
                          collapseGroups: true,
                          convertColors: true,
                          convertPathData: true,
                          convertShapeToPath: true,
                          convertStyleToAttrs: true,
                          convertTransform: true,
                          mergePaths: true,
                          minifyStyles: true,
                          moveElemsAttrsToGroup: true,
                          moveGroupAttrsToElems: true,
                          removeAttrs: true,
                          removeComments: true,
                          removeDesc: true,
                          removeDimensions: true,
                          removeDoctype: true,
                          removeEditorsNSData: true,
                          // removeElementsByAttr: true,
                          removeEmptyAttrs: true,
                          removeEmptyContainers: true,
                          removeEmptyText: true,
                          removeHiddenElems: true,
                          removeMetadata: true,
                          removeNonInheritableGroupAttrs: true,
                          removeStyleElement: true,
                          removeTitle: true,
                          removeUnknownsAndDefaults: true,
                          removeUnusedNS: true,
                          removeUselessDefs: true,
                          removeUselessStrokeAndFill: true,
                          removeXMLNS: false,
                          removeXMLProcInst: true,
                          sortAttrs: true,
                          transformsWithOnePath: true,
                        }),
                  },
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.ejs',
        templateParameters: {
          noindex: settings.noindex,
        },
        filename: './index.html',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: dev
          ? `${cssPath}[name].css`
          : `${cssPath}[name].[hash:8].css`,
        chunkFilename: dev
          ? `${cssPath}[id].css`
          : `${cssPath}[id].[hash:8].css`,
      }),

      !dev &&
        settings.less_script_chunks &&
        new webpack.optimize.LimitChunkCountPlugin({
          // produce one script chunk and / or inline script in index.html
          maxChunks: 1,
        }), // then remove /dist/*.js

      ...(!dev && settings.inline_resources
        ? [
            new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/.*/]),
            new HTMLInlineCSSWebpackPlugin(),
            new RemovePlugin({
              after: {
                root: outputPath,
                test: [
                  {
                    folder: jsPath ? `./${jsPath}` : '.',
                    method: (absoluteItemPath) => {
                      return /\.(js|txt)$/i.test(absoluteItemPath)
                    },
                  },
                ],
              },
            }),
          ]
        : []),

      // {
      //   apply: (compiler) => {
      //     compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
      //       exec('node test.js', (err, stdout, stderr) => {
      //         if (stdout) process.stdout.write(stdout)
      //         if (stderr) process.stderr.write(stderr)
      //       })
      //     })
      //   },
      // },
    ].filter((a) => a !== false),

    resolve: {
      alias: {
        Src: path.resolve(__dirname, 'src/'),
        Data: path.resolve(__dirname, 'data/'),
        Settings: path.resolve(__dirname, 'settings/'),
      },
    },

    devtool: dev ? 'source-map' : false,

    optimization: {
      minimize: !dev,
      minimizer: [
        new TerserJSPlugin({
          test: /\.js(\?.*)?$/i,
          sourceMap: dev,
        }),
      ],
      moduleIds: 'hashed',
      runtimeChunk: !dev && settings.less_script_chunks ? false : 'single',
      splitChunks:
        !dev && settings.less_script_chunks
          ? {}
          : {
              cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all',
                },
              },
            },
    },
  }

  return config
}
