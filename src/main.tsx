import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline, ThemeProvider, responsiveFontSizes } from '@mui/material';
import App from './App';

// import themePoppins from './theme/themePoppins';
import themeNunito from './theme/themeNunito';

const theme = responsiveFontSizes(themeNunito);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
