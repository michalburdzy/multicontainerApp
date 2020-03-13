const express = require('express');
const cors = require('cors');

const endpointsFactory = require('./endpoints');
const BaseEndpoint = require('./core/baseEndpoint');
const middlewareFactory = require('./middleware');
const AppResponse = require('./core/appResponse');

class App {
  constructor({
    config, logger, dbConnection,
  }) {
    this.app = express();
    this.config = config;
    this.logger = logger;
    this.dbConnection = dbConnection;
    this._init();
  }

  _init() {
    this.app.use(express.json());
    this.app.use(cors());
    this._addEndpoints(endpointsFactory({
      config: this.config,
      logger: this.logger,
      dbConnection: this.dbConnection,
    }))
  };

  _addEndpoints(endpoints) {
    endpoints.forEach((endpoint) => {
      if (!(endpoint instanceof BaseEndpoint)) {
        throw new TypeError('endpoint must be a BaseEndpoint');
      }
      this.app[endpoint._method](
        endpoint._url,
        middlewareFactory(endpoint),
        this._buildRoute(endpoint),
      );
    });
  }

  _buildRoute(endpoint) {
    return async (req, res, next) => {
      try {
        const response = await endpoint._execute(req, res);

        if (!(response instanceof AppResponse)) {
          return new TypeError('response must be instance of AppResponse');
        }
        return res.status(response.statusCode).send(response.body);
      } catch (err) {
        return next(err);
      }
    };
  }

  async start() {
    const { appPort } = this.config;
    return new Promise(() => {
      this.app.listen(appPort, () => {
        this.logger.info(`server is running`, {appPort});
      });
    });
  }
}

module.exports = App;
