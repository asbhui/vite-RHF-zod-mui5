import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { WrappedViewRoutes, routesFromElements } from './ViewRoutes';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<WrappedViewRoutes />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Home');
  });

  // it('Renders not found if invalid path', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
  //       <ViewRoutes />
  //     </MemoryRouter>,
  //   );
  //   expect(
  //     screen.getByRole('heading', {
  //       level: 1,
  //     }),
  //   ).toHaveTextContent('404');
  // });

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
