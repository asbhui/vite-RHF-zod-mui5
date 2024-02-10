import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export const Root = () => {
  return (
    <Box>
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
