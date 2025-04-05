import { rem, theme } from '@jandies/style';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  justifyContent: 'space-between',
  minHeight: rem(240),
});

export const day = style({
  color: theme.colors.gray600,
  fontSize: rem(16),
});

export const date = style({
  marginTop: rem(4),
  color: theme.colors.black,
  fontSize: rem(32),
});

export const fortune = style({
  color: theme.colors.gray600,
  fontSize: rem(20),
  textAlign: 'end',
});

globalStyle(`${fortune} em`, {
  fontWeight: 'bold',
});
