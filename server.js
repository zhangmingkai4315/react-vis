const http = require('http');
const express = require('express');
const app = express();

app.use(require('morgan')('short'));
(function () {
  const webpack = require('webpack');
  const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
  const compiler = webpack(webpackConfig);
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
})();
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
if (require.main === module) {
  const server = http.createServer(app);
  server.listen(process.env.PORT || 3000, () => {
    console.log('Listening on %j', server.address());
  });
}
