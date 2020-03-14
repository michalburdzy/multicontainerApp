const addNoteValidator = require('../../../../../src/domains/notes/validators/addNoteValidator');
const testValidator = require('../../../../testValidator');

describe('addNoteValidator', () => {
  test('runs correctly', async () => {
    const exampleData = { body: {note: 'asd'} };
    const result = testValidator(addNoteValidator, exampleData);

    expect(result.value).toMatchObject(exampleData);
  });
});
