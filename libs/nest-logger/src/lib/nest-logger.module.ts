import { Global, Module } from '@nestjs/common';
import { NestPinoLogger } from './nest-logger.service';
import pino, { Logger } from 'pino';
import { PINO_LOGGER_TOKEN } from './tokens';

@Global()
@Module({})
export class NestLoggerModule {
  static forRoot({ pinoLogger }: { pinoLogger?: Logger }) {
    return {
      module: NestLoggerModule,
      providers: [
        {
          provide: PINO_LOGGER_TOKEN,
          useValue: pinoLogger ? pinoLogger : pino(),
        },
        NestPinoLogger,
      ],
      exports: [NestPinoLogger, PINO_LOGGER_TOKEN],
    };
  }
}
