// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

import { Theme, ThemeProvider } from '@mui/material';

import themeNunito from '../theme/themeNunito';

export const WithTheme = ({ children }: { children: React.ReactNode }) => {
  const theme: Theme = themeNunito;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
