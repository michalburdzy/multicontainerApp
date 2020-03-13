const { Joi } = require('celebrate');

module.exports = {
  query: Joi.object(),
  params: Joi.object(),
  body: Joi.object(),
};
