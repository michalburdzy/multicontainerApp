const GetAllNotesEndpoint = require('./domains/values/endpoints/getAllNotesEndpoint');
const AddNoteEndpoint = require('./domains/values/endpoints/addNoteEndpoint');
const GetCurrentValueEndpoint = require('./domains/values/endpoints/getCurrentValueEndpoint');

const GetAllNotesService = require('./domains/values/services/getAllNotesService');
const AddNoteService = require('./domains/values/services/addNoteService');
const GetCurrentValueService = require('./domains/values/services/getCurrentValueService');

const ValuesRepository = require('./domains/values/notesRepository');
const ValuesCache = require('./domains/values/notesCache');

module.exports = ({config, logger, dbConnection, cacheConnection}) => {
  const notesRepository = new ValuesRepository({ logger, db: dbConnection });
  const notesCache = new ValuesCache({ logger, cache: cacheConnection });

  const getAllNotesService = new GetAllNotesService({ repository: notesRepository, cache: notesCache });
  const getCurrentValueService = new GetCurrentValueService({ repository: notesRepository, cache: notesCache });
  const addNoteService = new AddNoteService({ repository: notesRepository, cache: notesCache });

  return [
    new GetAllNotesEndpoint({ logger, service: getAllNotesService }),
    new GetCurrentValueEndpoint({ logger, service: getCurrentValueService }),
    new AddNoteEndpoint({ logger, service: addNoteService }),
  ];
};
