import { z } from 'zod';
import { getBooksSchema } from './get-books.schema';

export type GetBooksDto = z.infer<typeof getBooksSchema>;
