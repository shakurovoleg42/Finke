const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/script.js', // Главный JS-файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/script.js', // Расположение выходного JS
    clean: true, // Очищает dist перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Транспиляция JS через Babel
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Извлечение CSS в отдельный файл
          'css-loader', // Обработка CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[contenthash][ext]', // Путь для изображений
        },
      },
      {
        test: /\.(ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name].[contenthash][ext]', // Путь для иконок
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон для сборки HTML
      filename: 'index.html', // Выходной HTML
      inject: 'body', // Вставляет <script> в конец <body>
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css', // Путь для CSS
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'src/assets'), 
          to: path.resolve(__dirname, 'dist/assets'), // Копирование assets
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Статические файлы из dist
    },
    port: 8080,
    open: true, // Автоматически открывать в браузере
    hot: true, // Горячая перезагрузка
    compress: true, // Сжатие контента
  },
  resolve: {
    extensions: ['.js'], // Поддерживаемые расширения файлов
  },
  mode: 'development', // Режим разработки
};
