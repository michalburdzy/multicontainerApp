const config = require('./config');
const redis = require('redis');
const CalculationsService = require('./service');

const service = new CalculationsService();

class App {
  constructor(config, cache, service){
    this.config = config;
    this.cache = cache;
    this.service = service;
    this.cacheClient = redis.createClient({
      host: config.redisHost,
      port: config.redisPort,
      retry_strategy: () => 1000
    });
    this.subscriber = this.cacheClient.duplicate();
    this._init()
  }

  _init(){
    this.subscriber.on('message', (channel, message) => {
      console.log('WORKER MESSAGE', channel, message)
      this.cacheClient.hset(
        'values',
        message,
        this.service.calculateFibonacciByIndex(
          parseInt(message)
        ),
      );
    });
    this.subscriber.subscribe('insert');

    console.log(`Worker service listening Redis on ${this.config.redisHost}:${this.config.redisPort}`)
  }
}

new App(config, redis, service);
