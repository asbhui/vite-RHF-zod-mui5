import { createTheme } from '@mui/material';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

const themePoppins = createTheme({
  typography: {
    fontFamily: 'poppins',
  },
  palette: {
    primary: {
      main: '#0152cc',
    },
    secondary: {
      main: '#e1f2ff',
    },
  },
});

export default themePoppins;
