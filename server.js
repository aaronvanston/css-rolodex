import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from './webpack.config.babel.js';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(2323, '0.0.0.0', (err) => {
  if (err) {
    console.error(err); // eslint-disable-line no-console
  }
});
