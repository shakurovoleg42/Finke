const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/script.js', // Твой основной JS файл
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'js/[name].[contenthash].js', // Выходной файл JS с хешем для кеширования
    clean: true, // Очистка папки dist перед новой сборкой
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Применяем для всех JS файлов
        exclude: /node_modules/,
        use: 'babel-loader', // Для транспиляции JS через Babel (если нужно)
      },
      {
        test: /\.css$/, // Применяем для всех CSS файлов
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(ico)$/i, // Для иконок
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name].[contenthash][ext]', // Иконки в папку dist/assets/icons
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Указываем исходный HTML
      filename: 'index.html', // Выходной файл HTML
      inject: 'body', // Вставка скриптов в body
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css', // Выходной файл CSS с хешем
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Папка public будет обслуживаться сервером
    },
    port: 8080, // Порт для локального сервера
    open: true, // Открытие браузера при старте сервера
    hot: true,  // Горячая перезагрузка
    compress: true, // Сжатие файлов при раздаче
  },
  resolve: {
    extensions: ['.js'], // Расширения для файлов
  },
  mode: 'development', // Режим разработки
};
