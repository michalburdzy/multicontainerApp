class GetAllValuesService {
  constructor({ repository, cache }) {
    this.repository = repository;
    this.cache = cache;
  }

  async process() {
    const answer = await this.repository.list();
    return answer.rows;
  }
}

module.exports = GetAllValuesService;
