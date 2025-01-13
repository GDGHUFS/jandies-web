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
  opacity: 1,
  transform: 'none',
  transition: 'opacity 0.3s ease',

  ':hover': { opacity: 0.7 },

  ...breakpoint({
    tablet: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  }),
});

export const menu = style({
  ...theme.layouts.centerY,
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  height: '100%',
  paddingInline: 0,
  marginInline: 'auto',
  listStyle: 'none',
  gap: rem(13),

  ...breakpoint({ tablet: { paddingInline: theme.sizes.appInline } }),
});

globalStyle(`${menu} > li > a`, {
  ...theme.layouts.centerY,
  color: theme.colors.black,
  fontSize: rem(15),
  fontWeight: 500,
  gap: rem(4),
  opacity: 0.7,
  transition: 'opacity 0.3s ease',
});

globalStyle(`${menu} > li > a:hover`, {
  opacity: 1,
});

export const user = style({
  ...theme.layouts.centerY,
  position: 'absolute',
  top: '50%',
  right: theme.sizes.appInline,
  transform: 'translateY(-50%)',
  gap: rem(13),
});

export const avatar = style({
  width: rem(28),
  height: rem(28),
  overflow: 'hidden',
  backgroundColor: theme.colors.gray100,
  borderRadius: '50%',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
});
