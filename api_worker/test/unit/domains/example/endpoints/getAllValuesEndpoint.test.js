const GetAllNotesEndpoint = require('../../../../../src/domains/values/endpoints/getAllNotesEndpoint');

const fakeLogger = {
  info: jest.fn()
}

describe('GetAllNotesEndpoint', () => {
  describe('process', () => {
    test('runs correctly', async () => {
      const exampleService = {
        process: jest.fn().mockReturnValue('ok'),
      };
      const endpoint = new GetAllNotesEndpoint({ service: exampleService, logger: fakeLogger });
      const result = await endpoint.process('data');

      expect(result.body).toBe('ok');
      expect(fakeLogger.info).toBeCalled();
      expect(exampleService.process).toBeCalledWith('data');
    });
  });
});
