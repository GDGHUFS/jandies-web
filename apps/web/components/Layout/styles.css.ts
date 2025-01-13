import { theme } from '@jandies/style';
import { breakpoint } from '@jandies/style/dist/responsive.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  ...theme.layouts.column,
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  height: '100%',
  marginInline: 'auto',
});

export const main = style({
  ...theme.layouts.column,
  paddingTop: theme.sizes.headerMobile,
  paddingInline: theme.sizes.appInline,
  flex: 1,

  ...breakpoint({ tablet: { paddingTop: theme.sizes.header } }),
});
