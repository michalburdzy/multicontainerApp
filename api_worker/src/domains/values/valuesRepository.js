const BaseRepository = require('../../core/baseRepository');
const AppError = require('../../core/appError');

class ExampleRepository extends BaseRepository {
  constructor({ db, logger }) {
    super(logger);
    this.db = db;
  }

  async list() {
    this.logger.info('DB: LIST')
    return this.db.query('SELECT * from values');
  }

  async create(index) {
    this.logger.info('DB: CREATE')
    return this.db.query('INSERT INTO values(number) VALUES ($1)', [index]);
  }
}

module.exports = ExampleRepository;
