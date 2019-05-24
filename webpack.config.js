const autoprefixer = require('autoprefixer');
var path = require("path");

module.exports = [
  {
    entry: './scss/app.scss',
    output: {
      path: path.join(__dirname, 'dist'),
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: 'style-bundle.js',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
              implementation: require('dart-sass'),
              fiber: require('fibers'),
            }
          },
        ]
      }]
    },
  },
  {
    entry: "./js/app.js",
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "bundle.js"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }]
    },
  }
];
