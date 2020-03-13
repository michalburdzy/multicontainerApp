const AddNoteService = require('../../../../../src/domains/notes/services/addNoteService');

describe('addNoteService', () => {
  describe('process', () => {
    test('runs correctly', async () => {
      const notesCache = {
        create: jest.fn().mockReturnValue('ok'),
      };
      const service = new AddNoteService({ cache: notesCache });
      const result = await service.process({note: 'note'});

      expect(result).toBe('ok');

      expect(notesCache.create).toBeCalledWith({note: 'note'});
    });
  });
});
