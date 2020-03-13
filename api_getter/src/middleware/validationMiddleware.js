const { celebrate } = require('celebrate');

module.exports = ({ validator }) => (validator ? celebrate(validator) : []);
