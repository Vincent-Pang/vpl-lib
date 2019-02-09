import * as moment from 'moment';
import * as winston from 'winston';
import { ILogger } from './ILogger';

export class ConsoleLogger implements ILogger {
  private logger: winston.Logger;

  public constructor(logLevel: string = 'info') {
    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.splat(),
        winston.format.timestamp({format: moment().format()}),
        winston.format.printf(info => {
          return `${info.timestamp} ${info.level.toUpperCase()} ${info.message}`;
        }),
      ),
      level: logLevel,
    });
  }

  public error(msg: string, ...meta: any[]): void {
    this.logger.error(msg, ...meta);
  }

  public info(msg: string, ...meta: any[]): void {
    this.logger.info(msg, ...meta);
  }

  public warn(msg: string, ...meta: any[]): void {
    this.logger.warn(msg, ...meta);
  }
}
