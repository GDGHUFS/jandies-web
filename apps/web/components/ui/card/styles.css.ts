import { rem, theme } from '@jandies/style';
import { style } from '@vanilla-extract/css';

export const root = style({
  ...theme.layouts.column,
  padding: rem(32),
  border: `${rem(1)} solid ${theme.colors.gray200}`,
  borderRadius: rem(12),
  backgroundColor: theme.colors.white,
});
