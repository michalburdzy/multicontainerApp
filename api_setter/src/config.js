const REQUIRED_CONFIG_FIELDS = [ 'API_SETTER_PORT', 'REDIS_PORT', 'REDIS_HOST'];

const checkConfigData = (config) => {
  if (config.NODE_ENV === 'test') {
    return;
  }

  REQUIRED_CONFIG_FIELDS.forEach((key) => {
    if (!(key in config) || config[key].length === 0) {
      throw new Error(`"${key}" is not defined`);
    }
  });
};

module.exports = (config = process.env) => {
  checkConfigData(config);

  return {
    appPort: config.API_SETTER_PORT,
    loggerLevel: 'info',
    redisPort: config.REDIS_PORT,
    redisHost: config.REDIS_HOST,
    nodeEnv: config.NODE_ENV || "development",
  };
};
