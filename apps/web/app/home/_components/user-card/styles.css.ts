import { rem, theme } from '@jandies/style';
import { style } from '@vanilla-extract/css';

export const root = style({
  justifyContent: 'space-between',
  minHeight: rem(240),
});

export const hej = style({
  color: theme.colors.gray600,
  fontSize: theme.fontSizes.base,
  fontWeight: 500,
});

export const name = style({
  marginTop: rem(2),
  color: theme.colors.black,
  fontSize: theme.fontSizes.xxxl,
  fontWeight: 500,
});

export const update = style({
  marginBottom: rem(8),
  color: theme.colors.gray600,
  fontSize: theme.fontSizes.base,
  fontWeight: 500,
});
