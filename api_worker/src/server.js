const App = require('./app');
const configFactory = require('./config');
const loggerFactory = require('./logger');
const dbConnectionFactory = require('./dbConnection');
const cacheConnectionFactory = require('./cacheConnection');

async function start() {
  const config = configFactory();
  const logger = loggerFactory(config);
  const dbConnection = dbConnectionFactory(config);
  const cacheConnection = cacheConnectionFactory(config);

  const app = new App({
    config,
    logger,
    dbConnection,
    cacheConnection,
  });
  await app.start();
}

start();
