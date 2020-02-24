const addValueValidator = require('../../../../../src/domains/values/validators/addValueValidator');
const testValidator = require('../../../../testValidator');

describe('addValueValidator', () => {
  test('runs correctly', async () => {
    const exampleData = { body: {index: 1} };
    const result = testValidator(addValueValidator, exampleData);

    expect(result.value).toMatchObject(exampleData);
  });
});
