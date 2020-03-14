class AddNoteService {
  constructor({ cache }) {
    this.cache = cache;
  }

  process(data) {
    return this.cache.create(data);
  }
}

module.exports = AddNoteService;
