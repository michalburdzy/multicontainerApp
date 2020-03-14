const redis = require('redis');
const {promisify} = require('util');

const AppError = require('./core/appError');

const cacheClientFactory = (config, cache) => {
  const cacheClient = cache.createClient({
    host: config.redisHost,
    port: config.redisPort,
    retry_strategy: () => 1000,
  });

  cacheClient.on("error", function(error) {
    throw AppError.serviceUnavailable(error);
  });

  const subscriber = cacheClient.duplicate();

  return {
    client: cacheClient, subscriber,
  };
};

module.exports = (config, redisClient = redis) => cacheClientFactory(config, redisClient);
