import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ZodResponseValidationInterceptor } from '../validation/zod-response-validation-interceptor';
import { getBooksSchema } from '@thdk/books-api-contracts/schemas';

@Controller('books')
export class BooksController {
  @Get()
  @UseInterceptors(new ZodResponseValidationInterceptor(getBooksSchema))
  async books() {
    return [
      { id: 1, title: 'The Great Gatsby' },
      { id: 2, title: 'The Catcher in the Rye' },
      { id: 3, title: 'To Kill a Mockingbird' },
      { id: 4, title: '1984' },
      { id: 5, title: 'The Lord of the Rings' },
      { id: 6, title: 'Pride and Prejudice' },
      { id: 7, title: 'The Book Thief' },
      { id: 8, title: 'Harry Potter' },
      { id: 9, title: 'The Hobbit' },
      { id: 10, title: 'The Chronicles of Narnia' },
      { id: 11, title: 'The Hunger Games' },
    ];
  }
}
