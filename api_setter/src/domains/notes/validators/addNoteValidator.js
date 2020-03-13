const { Joi } = require('celebrate');

module.exports = {
  body: Joi.object({
    note: Joi.string(),
  }),
};
