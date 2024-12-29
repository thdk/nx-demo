import { LoremIpsum } from 'lorem-ipsum';
import Pino from 'pino';

export function summerizeBook(
  {
    title,
    author,
  }: {
    readonly title: string;
    readonly author: string;
  },
  {
    logger,
  }: {
    logger: Pino.Logger;
  }
): string {
  logger.info(
    {
      title,
      author,
    },
    'Summarizing book'
  );

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  return lorem.generateParagraphs(3);
}
