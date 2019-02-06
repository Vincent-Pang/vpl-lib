import { ConsoleLogger } from '../src/logger/ConsoleLogger';
import { ILogger } from '../src/logger/ILogger';

describe('Test Logger', () => {
  test('info', () => {
    const logger: ILogger = new ConsoleLogger();

    expect( () => logger.info('test info msg %s', 'abc') ).not.toThrow();
  });

  test('warn', () => {
    const logger: ILogger = new ConsoleLogger();

    expect( () => logger.warn('test warn msg') ).not.toThrow();
  });

  test('error', () => {
    const logger: ILogger = new ConsoleLogger();

    expect( () => logger.error('test error msg') ).not.toThrow();
  });

});
