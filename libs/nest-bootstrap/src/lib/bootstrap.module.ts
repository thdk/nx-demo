import { Module } from '@nestjs/common';
import { NestLoggerModule } from '@nx-demo/nest-logger';
import pino from 'pino';

@Module({})
export class BootstrapModule {
  static forRoot({ pinoOptions }: { pinoOptions?: pino.LoggerOptions } = {}) {
    return {
      module: BootstrapModule,
      imports: [
        NestLoggerModule.forRoot({
          pinoLogger: pino(pinoOptions),
        }),
      ],
    };
  }
}
