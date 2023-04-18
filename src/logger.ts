import * as winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'src/logs/error.log', level: "error" }),
    new winston.transports.File({ filename: 'src/logs/debug.log', level: "debug" }),
    new winston.transports.File({ filename: 'src/logs/verbose.log', level: "verbose" })
  ]
})

export default logger;