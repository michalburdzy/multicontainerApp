const App = require('./app');
const configFactory = require('./config');
const loggerFactory = require('./logger');
const dbConnectionFactory = require('./dbConnection');

async function start() {
  const config = configFactory();
  const logger = loggerFactory(config);
  const dbConnection = dbConnectionFactory(config);

  const app = new App({
    config,
    logger,
    dbConnection,
  });
  await app.start();
}

start();
