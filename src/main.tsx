import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';

import App from './App.tsx';
import { darkTheme } from '~/themes';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
      <CssBaseline enableColorScheme />
    </ThemeProvider>
  </StrictMode>
);
