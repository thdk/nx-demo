import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from '../books/books.module';
import { NestLoggerModule } from '@nx-demo/nest-logger';
import pino from 'pino';

@Module({
  imports: [
    BooksModule,
    NestLoggerModule.forRoot({
      pinoLogger: pino(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
