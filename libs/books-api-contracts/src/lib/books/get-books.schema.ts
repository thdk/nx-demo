import { z } from 'zod';

export const getBooksSchema = z.array(
  z.object({
    title: z.string(),
    id: z.number(),
  })
);
