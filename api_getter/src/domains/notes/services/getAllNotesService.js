class GetAllNotesService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async process() {
    const answer = await this.repository.list();
    return answer.rows;
  }
}

module.exports = GetAllNotesService;
