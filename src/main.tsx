import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';

import { WrappedViewRoutes } from './app/ViewRoutes';
import { LoadingScreen } from './shared/ui/LoadingScreen';
// import themePoppins from './theme/themePoppins';
import themeNunito from './theme/themeNunito';

const theme = responsiveFontSizes(themeNunito);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<LoadingScreen />}>
        <WrappedViewRoutes />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
);
