import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/routes.config.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from './stores/SessionContext';
import { queryClient } from './config/queryClient.config.ts';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
