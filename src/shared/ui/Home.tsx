import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home = () => (
  <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
    <Typography variant="h1">Home</Typography>
    <Button color="secondary" variant="contained" component={Link} to="/typos">
      Typos
    </Button>
  </Container>
);
