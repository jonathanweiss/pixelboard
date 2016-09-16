const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const PORT = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  }

  console.log('Listening at http://localhost:3000/'); // eslint-disable-line no-console
});
