import { createRemixStub } from '@remix-run/testing';
import { render, screen, waitFor } from '@testing-library/react';
import Index, { loader } from '../../app/routes/_index';

import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const books = [
  {
    id: '1',
    title: 'The lord of the rings',
  },
  // ...
];

export const restHandlers = [
  http.get('http://localhost:3000/api/books', () => {
    return HttpResponse.json(books);
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

test('renders loader data', async () => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: Index,
      loader,
    },
  ]);

  render(<RemixStub />);

  await waitFor(() => screen.findByText('The lord of the rings'));
});
