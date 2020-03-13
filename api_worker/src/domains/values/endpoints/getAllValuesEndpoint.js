const BaseEndpoint = require('../../../core/baseEndpoint');
const AppResponse = require('../../../core/appResponse');
const AppError = require('../../../core/appError');

const getAllNotes = require('../validators/getAllNotesValidator');

class ExampleEndpoint extends BaseEndpoint {
  constructor({ service, logger }) {
    super('GET', '/values', logger);
    this.service = service;
  }

  get validator() {
    return getAllNotes;
  }

  async process(req) {
    this.logger.info('ENDPOINT: getAllNotesEndpoint');

    const response = await this.service.process(req);

    if (!response) {
      throw new AppError();
    }

    return new AppResponse(200, response);
  }
}

module.exports = ExampleEndpoint;
