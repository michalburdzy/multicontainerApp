const pino = require('pino');

class Logger {
  constructor({ logger, config }) {
    this.logger = logger({
      prettyPrint: true,
      name: config.appName,
      level: config.loggerLevel,
    });
  }

  info(message, context = {}) {
    this.logger.info(context, message);
  }

  error(message, context = {}) {
    this.logger.error(context, message);
  }
}

module.exports = (config) => new Logger({ logger: pino, config });
