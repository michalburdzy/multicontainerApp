const { Joi } = require('celebrate');

module.exports = {
  body: Joi.object({
    index: Joi.number().min(0).max(30),
  }),
};
