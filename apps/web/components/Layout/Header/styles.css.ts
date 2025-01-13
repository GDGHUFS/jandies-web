import { rem, theme } from '@jandies/style';
import { breakpoint } from '@jandies/style/dist/responsive.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  ...theme.layouts.center,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: theme.sizes.headerMobile,
  paddingInline: theme.sizes.appInline,
  gap: rem(26),

  ...breakpoint({ tablet: { height: theme.sizes.header } }),
});

export const branding = style({
  position: 'static',
  top: 'auto',
  left: theme.sizes.appInline,
  transform: 'none',

  ...breakpoint({
    tablet: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  }),
});

export const nav = style({
  ...theme.layouts.centerY,
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  height: '100%',
  paddingInline: 0,
  marginInline: 'auto',

  ...breakpoint({ tablet: { paddingInline: theme.sizes.appInline } }),
});

globalStyle(`${nav} ul`, {
  ...theme.layouts.centerY,
  listStyle: 'none',
  gap: rem(13),
});

export const user = style({
  ...theme.layouts.centerY,
  position: 'absolute',
  top: '50%',
  right: theme.sizes.appInline,
  transform: 'translateY(-50%)',
  gap: rem(13),
});
