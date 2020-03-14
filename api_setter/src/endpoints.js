const AddNoteEndpoint = require('./domains/notes/endpoints/addNoteEndpoint');

const AddNoteService = require('./domains/notes/services/addNoteService');

const NotesCache = require('./domains/notes/notesCache');

module.exports = ({ logger, cacheConnection}) => {
  const notesCache = new NotesCache({ logger, cache: cacheConnection });

  const addNoteService = new AddNoteService({ cache: notesCache });

  return [
    new AddNoteEndpoint({ logger, service: addNoteService }),
  ];
};
