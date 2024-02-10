import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';

import { routesFromElements, WrappedViewRoutes } from './ViewRoutes';

describe('App', () => {
  it('Renders hello world', async () => {
    render(<WrappedViewRoutes />);
    await waitFor(() => screen.getByRole('heading', { level: 1 }));

    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Home');
  });

  it('Renders not found if invalid path', async () => {
    const inMemoryRouter = createMemoryRouter(routesFromElements, {
      initialEntries: ['/', '/this-route-does-not-exist'],
      initialIndex: 1,
    });

    render(<RouterProvider router={inMemoryRouter} />);

    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent('404');
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
