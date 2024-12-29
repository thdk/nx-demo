import pino from 'pino';
import { summerizeBook } from './lorem-book-summarizer';

describe('summarizeBook', () => {
  it('should add a generated summary', () => {
    expect(
      summerizeBook(
        {
          author: 'F. Scott Fitzgerald',
          title: 'The Great Gatsby',
        },
        {
          logger: pino({ level: 'silent' }),
        }
      )
    ).toEqual(expect.any(String));
  });
});
