const BaseEndpoint = require('../../../core/baseEndpoint');
const AppResponse = require('../../../core/appResponse');
const AppError = require('../../../core/appError');

const getAllNotes = require('../validators/getAllNotesValidator');

class GetAllNotesEndpoint extends BaseEndpoint {
  constructor({ service, logger }) {
    super('GET', '/notes', logger);
    this.service = service;
  }

  get validator() {
    return getAllNotes;
  }

  async process() {
    this.logger.info('ENDPOINT: getAllNotesEndpoint');

    const notes = await this.service.process();

    if (!notes) {
      throw new AppError();
    }

    return new AppResponse(200, notes);
  }
}

module.exports = GetAllNotesEndpoint;
