const GetAllValuesEndpoint = require('../../../../../src/domains/values/endpoints/getAllValuesEndpoint');

const fakeLogger = {
  info: jest.fn()
}

describe('GetAllValuesEndpoint', () => {
  describe('process', () => {
    test('runs correctly', async () => {
      const exampleService = {
        process: jest.fn().mockReturnValue('ok'),
      };
      const endpoint = new GetAllValuesEndpoint({ service: exampleService, logger: fakeLogger });
      const result = await endpoint.process('data');

      expect(result.body).toBe('ok');
      expect(fakeLogger.info).toBeCalled();
      expect(exampleService.process).toBeCalledWith('data');
    });
  });
});
