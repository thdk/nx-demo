import { createRemixStub } from '@remix-run/testing';
import { render } from '@testing-library/react';
import Index from '../../app/routes/_index';

test('renders loader data', async () => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: Index,
    },
  ]);

  render(<RemixStub />);

  // TODO: mock @thdk/books-api-client findBooks function
  // await waitFor(() => screen.findByText('The Great Gatsby'));
});
