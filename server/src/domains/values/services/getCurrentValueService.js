class GetCurrentValueService {
  constructor({ repository, cache }) {
    this.repository = repository;
    this.cache = cache;
  }

  async process() {
    return this.cache.list();
  }
}

module.exports = GetCurrentValueService;
