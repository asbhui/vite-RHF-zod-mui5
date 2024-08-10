import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

export const Home = () => (
  <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
    <Typography variant="h1">Home</Typography>
    <Button color="secondary" variant="contained" component={Link} to="/typos">
      Typos
    </Button>
    <Button color="secondary" variant="contained" component={Link} to="/comboBox">
      Combo
    </Button>
  </Container>
);
