const validationMiddleware = require('./validationMiddleware');

module.exports = (endpoint) => [validationMiddleware(endpoint)];
