import { GetBooksDto } from '@thdk/books-api-contracts/types';
import { got } from 'got';

export type Book = {
  id: string;
  title: string;
};

export async function findBooks(): Promise<Book[]> {
  const booksResponse: GetBooksDto = await got
    .get(`${process.env['API_URL']}/books`)
    .json();

  // Map getBooksDto[] to Books[]
  return booksResponse
    .map((book) => ({
      id: book.id.toString(),
      title: book.title,
    }))
    .reverse();
}
