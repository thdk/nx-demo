import { Inject } from '@nestjs/common';
import { BOOK_SUMMARIZER_TOKEN } from './tokens';

export type BookSummarizerFunction = (data: {
  title: string;
  author: string;
}) => string;

export class BooksService {
  constructor(
    @Inject(BOOK_SUMMARIZER_TOKEN)
    private readonly bookSummarizer: BookSummarizerFunction
  ) {}

  getBooks() {
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
    ].map((book) => ({
      ...book,
      summary: this.bookSummarizer({
        title: book.title,
        author: 'Unknown',
      }),
    }));
  }
}
