const GetAllNotesEndpoint = require('./domains/notes/endpoints/getAllNotesEndpoint');

const GetAllNotesService = require('./domains/notes/services/getAllNotesService');

const NotesRepository = require('./domains/notes/notesRepository');

module.exports = ({ logger, dbConnection}) => {
  const notesRepository = new NotesRepository({ logger, db: dbConnection });

  const getAllNotesService = new GetAllNotesService({ repository: notesRepository });

  return [
    new GetAllNotesEndpoint({ logger, service: getAllNotesService }),
  ];
};
