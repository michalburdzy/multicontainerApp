const GetAllValuesEndpoint = require('./domains/values/endpoints/getAllValuesEndpoint');
const AddValueEndpoint = require('./domains/values/endpoints/addValueEndpoint');
const GetCurrentValueEndpoint = require('./domains/values/endpoints/getCurrentValueEndpoint');

const GetAllValuesService = require('./domains/values/services/getAllValuesService');
const AddValueService = require('./domains/values/services/addValueService');
const GetCurrentValueService = require('./domains/values/services/getCurrentValueService');

const ValuesRepository = require('./domains/values/valuesRepository');
const ValuesCache = require('./domains/values/valuesCache');

module.exports = ({config, logger, dbConnection, cacheConnection}) => {
  const valuesRepository = new ValuesRepository({ logger, db: dbConnection });
  const valuesCache = new ValuesCache({ logger, cache: cacheConnection });

  const getAllValuesService = new GetAllValuesService({ repository: valuesRepository, cache: valuesCache });
  const getCurrentValueService = new GetCurrentValueService({ repository: valuesRepository, cache: valuesCache });
  const addValueService = new AddValueService({ repository: valuesRepository, cache: valuesCache });

  return [
    new GetAllValuesEndpoint({ logger, service: getAllValuesService }),
    new GetCurrentValueEndpoint({ logger, service: getCurrentValueService }),
    new AddValueEndpoint({ logger, service: addValueService }),
  ];
};
