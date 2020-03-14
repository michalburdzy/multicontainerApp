const BaseRepository = require('./core/baseRepository');
const AppError = require('./core/appError');

class NotesRepository extends BaseRepository {
  constructor({ db, logger }) {
    super(logger);
    this.db = db;
  }

  async create(note) {
    this.logger.info('DB: CREATE')
    // return this.db.query(`select column_name,data_type from information_schema.columns where table_name = 'notes';`);
    // return this.db.query(`DROP TABLE notes`);
    return this.db.query('INSERT INTO notes(note) VALUES ($1)', [note]);
  }
}

module.exports = ({db, logger}) => new NotesRepository({db, logger});
