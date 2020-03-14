const BaseEndpoint = require('./core/baseEndpoint');
const middlewareFactory = require('./middleware');
const AppResponse = require('./core/appResponse');

class App {
  constructor({
    config, logger, notesRepository, cacheConnection,
  }) {
    this.config = config;
    this.logger = logger;
    this.notesRepository = notesRepository;
    this.subscriber = cacheConnection.subscriber;
  }

  async insertNoteToDb(note){
     const result = await this.notesRepository.create(note)
     this.logger.info(`DB INSERT RESULT: ${JSON.stringify(result)}`)
  }

  async start() {
    const { appPort } = this.config;
    this.subscriber.on('message', (channel, message) => {
      console.log('WORKER MESSAGE', channel, message)
      return this.insertNoteToDb(message)
    });
    this.subscriber.subscribe('insert');

    console.log(`Worker service listening Redis on ${this.config.redisHost}:${this.config.redisPort}`)
  }
}

module.exports = App;
