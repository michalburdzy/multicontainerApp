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
    this.subscriber.on('message', (channel, message) => {
      console.log('WORKER MESSAGE', channel, message)
      return this.insertNoteToDb(message)
    });
    this.subscriber.subscribe('insert');

    console.log(`Worker service listening Redis on ${this.config.redisHost}:${this.config.redisPort} and Postgres on ${this.config.pgHost}:${this.config.pgPort}`)
  }
}

module.exports = App;
