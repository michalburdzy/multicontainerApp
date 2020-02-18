const { Pool: pgPool } = require('pg');

const AppError = require('./core/appError');

class PgClientFactory  {
  constructor(config, Pool) {
    this.pgClient = new Pool({
      user: config.pgUser,
      host: config.pgHost,
      database: config.pgDatabase,
      password: config.pgPassword,
      port: config.pgPort,
    });

    this.pgClient.on('error', (error) => {
      throw AppError.serviceUnavailable('PostgreSQL - lost connection', error);
    });
    this.pgClient.query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err => console.log(err));
  }

};

module.exports = (config, PostgreSQLPool = pgPool) => new PgClientFactory(config, PostgreSQLPool).pgClient;
