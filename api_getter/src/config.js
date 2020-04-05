const REQUIRED_CONFIG_FIELDS = [
  "API_GETTER_PORT",
  "PG_USER",
  "PG_HOST",
  "PG_DATABASE",
  "POSTGRES_PASSWORD",
  "PG_PORT",
];

const checkConfigData = (config) => {
  if (config.NODE_ENV === "test") {
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
    appPort: config.API_GETTER_PORT,
    loggerLevel: "info",
    nodeEnv: config.NODE_ENV || "development",
    pgUser: config.PG_USER,
    pgHost: config.PG_HOST,
    pgDatabase: config.PG_DATABASE,
    pgPassword: config.POSTGRES_PASSWORD,
    pgPort: config.PG_PORT,
  };
};
