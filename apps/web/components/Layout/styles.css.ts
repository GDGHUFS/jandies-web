import { theme } from '@jandies/style';
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
  paddingTop: theme.sizes.header,
  paddingInline: theme.sizes.appInline,
  flex: 1,
});
