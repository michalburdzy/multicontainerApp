const BaseEndpoint = require('../../../core/baseEndpoint');
const AppResponse = require('../../../core/appResponse');
const AppError = require('../../../core/appError');

const addValueValidator = require('../validators/addValueValidator');

class AddValueEndpoint extends BaseEndpoint {
  constructor({ service, logger }) {
    super('POST', '/values', logger);
    this.service = service;
  }

  get validator() {
    return addValueValidator;
  }

  async process({ body: { index } }) {
    this.logger.info('ENDPOINT: AddValueEndpoint');

    const response = await this.service.process(
      index,
    );

    if (!response) {
      throw new AppError();
    }

    return new AppResponse(200, response);
  }
}

module.exports = AddValueEndpoint;
