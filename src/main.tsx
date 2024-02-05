import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline, ThemeProvider, responsiveFontSizes } from '@mui/material';

// import themePoppins from './theme/themePoppins';
import themeNunito from './theme/themeNunito';
import { WrappedViewRoutes } from './app/ViewRoutes';

const theme = responsiveFontSizes(themeNunito);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WrappedViewRoutes />
    </ThemeProvider>
  </React.StrictMode>,
);
