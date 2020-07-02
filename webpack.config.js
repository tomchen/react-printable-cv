const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const RemovePlugin = require('remove-files-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const postcssNormalize = require('postcss-normalize')
const cssnano = require('cssnano')
const settings = require('./settings')

module.exports = (env, argv) => {
  const config = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    devServer: {
      port: 8080,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: argv.mode === 'development',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: argv.mode === 'development',
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
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: argv.mode === 'development',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: argv.mode === 'development',
                plugins: () => [
                  postcssPresetEnv(),
                  postcssNormalize(),
                  cssnano(),
                ],
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
    ],
  }

  if (argv.mode === 'development') {
    config.devtool = 'source-map'
    config.module.rules.push()
  }

  if (
    argv.mode === 'development' ||
    (argv.mode === 'production' && !settings.inline_resources)
  ) {
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      ],
    })

    // url-loader (transforming ressources into base64 URI)
    // can be used instead of file-loader (get ressources' URL)
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|ico)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    })
  }

  if (argv.mode === 'production') {

    if (settings.inline_resources) {
      config.module.rules.push({
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'base64-inline-loader',
      })

      config.module.rules.push({
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   limit: 8192,
            // },
          },
        ],
      })
    }

    if (settings.one_chunk) {
      config.plugins.push(
        // produce one script chunk and / or inline script in index.html
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }), // then manually remove /dist/*.js
      )
    }

    if (settings.inline_resources) {
      config.plugins.push(
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.js$/]),
        new RemovePlugin({
          after: {
            root: config.output.path,
            include: ['bundle.js'],
            trash: true,
          },
        }),
      )
    }
  }

  return config
}
