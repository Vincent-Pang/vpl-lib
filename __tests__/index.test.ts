import { ConsoleLogger, ILogger } from '../src';

describe('Test index.ts', () => {
  test('test import', () => {

    const logger: ILogger = new ConsoleLogger();

    expect(logger).not.toBeNull();

  });
});
