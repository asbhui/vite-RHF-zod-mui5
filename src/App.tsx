import { Box, Button, Container, Typography } from '@mui/material';

export default function App() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 4, mx: 'auto' }} display="flex" gap={2} flexDirection="column">
        <Typography variant="h1" fontWeight="bold">
          Hello Vite + React!
        </Typography>
        <Typography variant="h2">Lorem, ipsum.</Typography>
        <Typography variant="h3">Lorem ipsum dolor sit.</Typography>
        <Typography variant="h4">Lorem ipsum dolor sit amet consectetur.</Typography>
        <Typography variant="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
        <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, numquam!</Typography>
        <Typography variant="body1" color="text.secondary" fontWeight="bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore cumque saepe commodi!
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem aut cumque quo laboriosam sapiente.
        </Typography>
        <Button color="secondary" variant="contained">
          Hello world!
        </Button>
      </Box>
    </Container>
  );
}
