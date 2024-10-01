import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const Root = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        bgcolor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
