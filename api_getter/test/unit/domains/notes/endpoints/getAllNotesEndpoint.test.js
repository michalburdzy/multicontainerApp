const GetAllNotesEndpoint = require('../../../../../src/domains/notes/endpoints/getAllNotesEndpoint');

const fakeLogger = {
  info: jest.fn()
}

describe('GetAllNotesEndpoint', () => {
  describe('process', () => {
    test('runs correctly', async () => {
      const getAllNotesService = {
        process: jest.fn().mockReturnValue('ok'),
      };
      const endpoint = new GetAllNotesEndpoint({ service: getAllNotesService, logger: fakeLogger });
      const result = await endpoint.process('data');

      expect(result.body).toBe('ok');
      expect(fakeLogger.info).toBeCalled();
      expect(getAllNotesService.process).toBeCalled();
    });
  });
});
