const REQUIRED_CONFIG_FIELDS = [ 'API_SETTER_PORT', 'REDIS_PORT', 'REDIS_HOST', 'PG_USER', 'PG_HOST', 'PG_DATABASE', 'PG_PASSWORD', 'PG_PORT'];

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
    nodeEnv: config.NODE_ENV,
    pgUser: config.PG_USER,
    pgHost: config.PG_HOST,
    pgDatabase: config.PG_DATABASE,
    pgPassword: config.PG_PASSWORD,
    pgPort: config.PG_PORT,
  };
};
