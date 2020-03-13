const GetAllNotesService = require('../../../../../src/domains/notes/services/getAllNotesService');

describe('getAllNotesService', () => {
  describe('process', () => {
    test('runs correctly', async () => {
      const exampleRepository = {
        list: jest.fn().mockReturnValue({rows: 'ok'}),
      };
      const service = new GetAllNotesService({ repository: exampleRepository });
      const result = await service.process('');

      expect(result).toBe('ok');

      expect(exampleRepository.list).toBeCalled();
    });
  });
});
