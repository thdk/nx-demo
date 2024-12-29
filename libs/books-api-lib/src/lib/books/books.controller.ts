import { Controller, Get, Logger, UseInterceptors } from '@nestjs/common';
import { ZodResponseValidationInterceptor } from '../validation/zod-response-validation-interceptor';
import { getBooksSchema } from '@thdk/books-api-contracts/schemas';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @UseInterceptors(new ZodResponseValidationInterceptor(getBooksSchema))
  async books() {
    Logger.log('Getting books');
    return this.booksService.getBooks();
  }
}
