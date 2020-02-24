const BaseRepository = require('../../core/baseRepository');
const AppError = require('../../core/appError');

class ExampleRepository extends BaseRepository {
  constructor({ logger, cache }) {
    super(logger);
    this.cacheClient = cache.client;
    this.cachePublisher = cache.publisher;
  }

  list() {
    this.logger.info('CACHE: LIST')
    return new Promise((res, rej) => {
      this.cacheClient.hgetall('values', (error, values) => {
        if (error) {
          this.logger.info('CACHE: ERROR')
          rej(error)
        }

        return res(values);
      })
    })
  }

  async create(index) {
    this.logger.info('CACHE: CREATE')

    this.cacheClient.hset('values', index, 'placeholder', (error, data) => {
      if(error){
        throw AppError.unprocessableEntity(error)
      }

      this.cachePublisher.publish('insert', index);
    })
  }
}

module.exports = ExampleRepository;
