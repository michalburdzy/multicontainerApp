const BaseEndpoint = require('../../../core/baseEndpoint');
const AppResponse = require('../../../core/appResponse');
const AppError = require('../../../core/appError');

const getAllValues = require('../validators/getAllValuesValidator');

class ExampleEndpoint extends BaseEndpoint {
  constructor({ service, logger }) {
    super('GET', '/values', logger);
    this.service = service;
  }

  get validator() {
    return getAllValues;
  }

  async process(req) {
    this.logger.info('ENDPOINT: getAllValuesEndpoint');

    const response = await this.service.process(req);

    if (!response) {
      throw new AppError();
    }

    return new AppResponse(200, response);
  }
}

module.exports = ExampleEndpoint;
