import { GetBooksDto } from './get-books.dto';
import { getBooksSchema } from './get-books.schema';

describe('getBooksSchema', () => {
  it('should validate a valid response ', () => {
    const validResponse: GetBooksDto = [
      {
        id: 1,
        title: 'The Great Gatsby',
      },
    ];

    expect(getBooksSchema.safeParse(validResponse).success).toBe(true);
  });

  it('should not validate an invalid response ', () => {
    const invalidResponse: GetBooksDto = [
      {
        id: 1,
        // @ts-expect-error - title should be a string
        title: 1,
      },
    ];

    expect(getBooksSchema.safeParse(invalidResponse).success).toBe(false);
  });
});
