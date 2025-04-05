import { rem, theme } from '@jandies/style';
import { style } from '@vanilla-extract/css';

export const root = style({
  justifyContent: 'space-between',
  minHeight: rem(240),
  gap: rem(24),
});

export const farm = style({
  color: theme.colors.gray600,
  fontSize: theme.fontSizes.base,
  fontWeight: 500,
});

export const name = style({
  marginTop: rem(2),
  color: theme.colors.black,
  fontSize: theme.fontSizes.xxl,
  fontWeight: 500,
});

export const updateContainer = style({
  ...theme.layouts.column,
  gap: rem(8),
});

export const update = style({
  color: theme.colors.gray600,
  fontSize: theme.fontSizes.base,
  fontWeight: 500,
});
