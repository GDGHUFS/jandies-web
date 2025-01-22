import { rem, theme } from '@jandies/style';
import { style } from '@vanilla-extract/css';

export const root = style({
  ...theme.layouts.center,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: theme.sizes.header,
  gap: rem(26),
  backgroundColor: theme.colors.white,
});

export const inner = style({
  ...theme.layouts.rowBetween,
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  height: '100%',
  marginInline: 'auto',
  paddingInline: theme.sizes.appInline,
});

export const branding = style({
  width: rem(71),
  flexShrink: 0,
  opacity: 1,
  transform: 'none',
  transition: 'opacity 0.3s ease',

  ':hover': { opacity: 0.7 },
});

export const user = style({
  ...theme.layouts.centerY,
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
