class AddValueService {
  constructor({ repository, cache }) {
    this.repository = repository;
    this.cache = cache;
  }

  async process(index) {
    const dbAnswer = await this.repository.create(index);
    const cacheAnswer = await this.cache.create(index);

    return {
      db: dbAnswer.rows,
      cache: cacheAnswer,
    };
  }
}

module.exports = AddValueService;
