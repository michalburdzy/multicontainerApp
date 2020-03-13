const App = require('./app');
const configFactory = require('./config');
const loggerFactory = require('./logger');
const cacheConnectionFactory = require('./cacheConnection');

async function start() {
  const config = configFactory();
  const logger = loggerFactory(config);
  const cacheConnection = await cacheConnectionFactory({config, logger});

  const app = new App({
    config,
    logger,
    cacheConnection,
  });
  await app.start();
}

start();
