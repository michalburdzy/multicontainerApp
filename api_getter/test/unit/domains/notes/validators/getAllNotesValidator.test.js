const getAllNotesValidator = require('../../../../../src/domains/notes/validators/getAllNotesValidator');
const testValidator = require('../../../../testValidator');

describe('getAllNotesValidator', () => {
  test('runs correctly', async () => {
    const exampleData = { body: {}, params: {}, query: {} };
    const result = testValidator(getAllNotesValidator, exampleData);

    expect(result.value).toMatchObject(exampleData);
  });
});
