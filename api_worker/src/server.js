const App = require('./app');
const configFactory = require('./config');
const loggerFactory = require('./logger');
const dbConnectionFactory = require('./dbConnection');
const cacheConnectionFactory = require('./cacheConnection');
const notesRepositoryFactory = require('./notesRepository')

async function start() {
  const config = configFactory();
  const logger = loggerFactory(config);
  const dbConnection = dbConnectionFactory(config);
  const notesRepository = notesRepositoryFactory({db: dbConnection, logger})
  const cacheConnection = cacheConnectionFactory(config);

  const app = new App({
    config,
    logger,
    notesRepository,
    cacheConnection,
  });
  await app.start();
}

start();
