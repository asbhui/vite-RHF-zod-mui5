import '@fontsource/nunito/300.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';

import { createTheme } from '@mui/material';

const themeNunito = createTheme({
  typography: {
    fontFamily: 'nunito',
  },
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

export default themeNunito;
