import { Link } from 'react-router-dom';
import { Button, Container, Stack, Typography } from '@mui/material';

export const Home = () => (
  <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h1">Home</Typography>
    <Stack direction="row" spacing={2}>
      <Button color="secondary" variant="contained" component={Link} to="/typos">
        Typos
      </Button>
      <Button color="secondary" variant="contained" component={Link} to="/comboBox">
        Combo
      </Button>
    </Stack>
  </Container>
);
