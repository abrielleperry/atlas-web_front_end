const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // This line is fine if you plan to use the dist directory later
  },
  devServer: {
    static: [
      path.join(__dirname, 'Cookies_local_storage') // Serve Cookies_local_storage directory
    ],
    compress: true,
    port: 8080,
  },
};
