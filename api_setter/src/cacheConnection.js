const redis = require('redis');

const AppError = require('./core/appError');

const cacheClientFactory = async (config, cache, logger) => {
  const cacheClient = await new Promise(res => {
    const c = cache.createClient({
      host: config.redisHost,
      port: config.redisPort,
      retry_strategy: () => 1000,
    });
    setTimeout(() => {
      res(c)
    }, 200)
  })

  cacheClient.on("error", function(error) {
    throw AppError.serviceUnavailable(error);
  });

  const cachePublisher = cacheClient.duplicate();

  if(cacheClient.connected){
    logger.info('Cache client is connected')
  } else {
    logger.error('Cache client NOT connected')
  }
  return {
    client: cacheClient, publisher: cachePublisher,
  };
};

module.exports = async ({config, redisClient = redis, logger}) => await cacheClientFactory(config, redisClient, logger);
