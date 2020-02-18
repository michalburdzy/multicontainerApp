const GetAllValuesService = require('../../../../../src/domains/values/services/getAllValuesService');

describe('getAllValuesService', () => {
  describe('process', () => {
    test('runs correctly', async () => {
      const exampleRepository = {
        list: jest.fn().mockReturnValue({rows: 'ok'}),
      };
      const service = new GetAllValuesService({ repository: exampleRepository });
      const result = await service.process('');

      expect(result).toBe('ok');

      expect(exampleRepository.list).toBeCalled();
    });
  });
});
