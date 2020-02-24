const BaseEndpoint = require('../../../core/baseEndpoint');
const AppResponse = require('../../../core/appResponse');

const getAllValues = require('../validators/getAllValuesValidator');

class ExampleEndpoint extends BaseEndpoint {
  constructor({ service, logger }) {
    super('GET', '/values/current', logger);
    this.service = service;
  }

  get validator() {
    return getAllValues;
  }

  async process(req) {
    this.logger.info('ENDPOINT: getCurrentValueEndpoint');
    const response = await this.service.process(req);

    return new AppResponse(200, response);
  }
}

module.exports = ExampleEndpoint;
