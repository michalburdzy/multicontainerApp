class AddNoteService {
  constructor({ cache }) {
    this.cache = cache;
  }

  async process(data) {
    const cacheAnswer = await this.cache.create(data);

    return cacheAnswer;
  }
}

module.exports = AddNoteService;
