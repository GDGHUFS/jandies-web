import { rem, theme } from '@jandies/style';
import { breakpoint } from '@jandies/style/dist/responsive.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  ...theme.layouts.centerY,
  width: '100%',
  height: theme.sizes.headerMobile,

  ...breakpoint({ tablet: { height: theme.sizes.header } }),
});

export const nav = style({
  ...theme.layouts.centerY,
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  height: '100%',
  gap: rem(12),
});
