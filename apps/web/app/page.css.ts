import { rem, theme } from '@jandies/style';
import { breakpoint } from '@jandies/style/dist/responsive.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const intro = style({
  ...theme.layouts.column,
  marginTop: rem(75),
});

export const heading = style({
  color: theme.colors.grass900,
  fontSize: rem(48),
  fontWeight: 600,
  lineHeight: '130%',
  wordBreak: 'keep-all',
});

export const description = style({
  marginTop: rem(25),
  color: theme.colors.gray700,
  fontSize: theme.fontSizes.lg,
  fontWeight: 500,
  lineHeight: '160%',
  wordBreak: 'keep-all',
});

export const highlight = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  columnGap: rem(24),
  rowGap: rem(28),
  marginTop: rem(82),

  ...breakpoint({ tablet: { gridTemplateColumns: `2fr 3fr` } }),
});

export const pair = style({
  ...theme.layouts.column,
  gap: rem(28),
});

export const card = style({
  width: '100%',
  border: `${rem(1)} solid rgba(0, 0, 0, 0.06)`,
  borderRadius: rem(12),
  backgroundColor: theme.colors.gray100,
  overflow: 'hidden',
});

export const image = style({
  position: 'relative',
  top: rem(56),
  left: rem(56),
});

globalStyle(`${card} img`, {
  objectFit: 'cover',
  userSelect: 'none',
  filter: `drop-shadow(0px 131px 79px rgba(0, 0, 0, 0.05)) 
           drop-shadow(0px 233px 93px rgba(0, 0, 0, 0.01)) 
           drop-shadow(0px 364px 102px rgba(0, 0, 0, 0.00))`,
});
