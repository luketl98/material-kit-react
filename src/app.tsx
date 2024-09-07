import 'src/global.css';

import Fab from '@mui/material/Fab';

import { Router } from 'src/routes/sections';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { ThemeProvider } from 'src/theme/theme-provider';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  const scrollToTopButton = (
    <Fab
      size="medium"
      aria-label="Scroll to Top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls to top when clicked
      sx={{
        zIndex: 9,
        right: 20,
        bottom: 20,
        width: 44,
        height: 44,
        position: 'fixed',
        bgcolor: 'grey.800',
        color: 'common.white',
      }}
    >
      ↑ {/* This represents an upward arrow for the scroll button */}
    </Fab>
  );

  return (
    <ThemeProvider>
      <Router />
      {scrollToTopButton} {/* Renders the scroll-to-top button */}
    </ThemeProvider>
  );
}
