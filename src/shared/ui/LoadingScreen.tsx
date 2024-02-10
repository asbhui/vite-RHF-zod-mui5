import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';

export function LoadingScreen() {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      <Box display="flex" gap={2} flexDirection="column" alignItems="center">
        <Typography variant="h6" component="h2">
          Loading...
        </Typography>
        <CircularProgress color="inherit" />
      </Box>
    </Backdrop>
  );
}
