import { breakpoint, rem, theme } from '@jandies/style';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  minHeight: rem(240),
});

export const item = style({
  ...theme.layouts.column,
  position: 'relative',
  width: '100%',
  minHeight: rem(240),
  padding: rem(32),
  marginRight: rem(16),
  borderRadius: rem(12),
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  overflow: 'hidden',
  transform: 'translateZ(0)',
});

export const cover = style({
  position: 'absolute',
  display: 'none',
  top: 0,
  right: 0,
  width: '33%',
  height: '100%',
  userSelect: 'none',

  ...breakpoint({ tablet: { display: 'block' } }),
});

globalStyle(`${cover} > img`, {
  objectFit: 'cover',
});

export const category = style({
  color: theme.colors.whiteAlpha60,
  fontSize: theme.fontSizes.xs,
  fontWeight: 300,
  letterSpacing: 1,
});

export const event = style({
  marginTop: rem(6),
  color: theme.colors.white,
  fontSize: theme.fontSizes.xxxl,
  fontWeight: 600,
});

export const description = style({
  marginTop: rem(6),
  color: theme.colors.whiteAlpha90,
  fontSize: theme.fontSizes.base,
  fontWeight: 500,
});

export const controller = style({
  ...theme.layouts.centerY,
  position: 'absolute',
  left: rem(32),
  bottom: rem(32),
  padding: rem(6),
  color: theme.colors.white,
  borderRadius: rem(5),
  gap: rem(6),
  zIndex: theme.zIndices.overlay,
  backgroundColor: theme.colors.whiteAlpha10,
});

export const controllerBar = style({
  width: rem(1),
  height: rem(10),
  backgroundColor: theme.colors.whiteAlpha10,
});

globalStyle(`${controller} button`, {
  opacity: 1,
  transition: 'opacity 200ms',
});

globalStyle(`${controller} button:disabled`, {
  cursor: 'not-allowed',
  opacity: 0.3,
});

globalStyle(`${controller} button:not(:disabled):hover`, {
  opacity: 0.7,
});
