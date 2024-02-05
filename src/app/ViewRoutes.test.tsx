import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ViewRoutes, WrappedViewRoutes } from './ViewRoutes';

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
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <ViewRoutes />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('404');
  });
});
