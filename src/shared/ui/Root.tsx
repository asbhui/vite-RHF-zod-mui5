import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const Root = () => {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#f5f5f5' }}>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
