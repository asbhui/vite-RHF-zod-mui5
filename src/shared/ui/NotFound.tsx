import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <Container sx={{ textAlign: 'center' }}>
    <Typography variant="h1">404</Typography>
    <Typography variant="h2">Page not found</Typography>
    <Box maxWidth={100} m="auto">
      <Button color="secondary" variant="contained" component={Link} to="/">
        Home
      </Button>
    </Box>
  </Container>
);
