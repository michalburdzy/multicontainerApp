const { Joi } = require('celebrate');

const options = {
  abortEarly: false,
};

module.exports = (schema, data) => {
  const result = Joi.object({ ...schema }).validate(data, options);

  if (result.error) {
    result.error.fields = result.error.details.map((d) => d.path.join('/'));
  }

  return result;
};
