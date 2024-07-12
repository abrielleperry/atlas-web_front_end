const path = require('path');

module.exports = {
  mode: 'development', // Consider setting the mode explicitly as suggested by the warning
  entry: '/src/index.js', // Corrected path
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: [
      path.join(__dirname, 'Cookies_local_storage')
    ],
    compress: true,
    port: 8080,
  },
};
