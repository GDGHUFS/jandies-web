import './reset.css';

import { globalStyle } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle('body', {
  paddingBottom: 'env(safe-area-inset-bottom)',
  fontFamily: theme.fonts.sans,
  backgroundColor: theme.colors.white,
  overflowX: 'hidden',
  overflowY: 'scroll',
});

globalStyle('[data-theme="light"]', {
  colorScheme: 'light',
});

globalStyle('[data-theme="dark"]', {
  colorScheme: 'dark',
});

globalStyle('::selection', {
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
});
