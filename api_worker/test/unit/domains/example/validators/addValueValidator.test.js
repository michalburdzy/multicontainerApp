const addNoteValidator = require('../../../../../src/domains/values/validators/addNoteValidator');
const testValidator = require('../../../../testValidator');

describe('addNoteValidator', () => {
  test('runs correctly', async () => {
    const exampleData = { body: {index: 1} };
    const result = testValidator(addNoteValidator, exampleData);

    expect(result.value).toMatchObject(exampleData);
  });
});
