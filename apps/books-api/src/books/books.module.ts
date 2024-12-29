import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { summerizeBook } from '@nx-demo/lorem-book-summarizer';
import { PINO_LOGGER_TOKEN } from '@nx-demo/nest-logger';
import { Logger } from 'pino';
import { BOOK_SUMMARIZER_TOKEN } from './tokens';
import { BooksService } from './books.service';

@Module({
  controllers: [BooksController],
  providers: [
    BooksService,
    {
      provide: BOOK_SUMMARIZER_TOKEN,
      useFactory: (logger: Logger) => {
        return (data: { title: string; author: string }) => {
          return summerizeBook(data, { logger });
        };
      },
      inject: [{ token: PINO_LOGGER_TOKEN, optional: false }],
    },
  ],
})
export class BooksModule {}
