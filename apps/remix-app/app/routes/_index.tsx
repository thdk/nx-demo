import { findBooks } from '@thdk/books-api-client';
import { useLoaderData } from '@remix-run/react';

export async function loader() {
  return {
    books: await findBooks(),
  };
}

export default function Index() {
  const books = useLoaderData<typeof loader>().books;
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}
