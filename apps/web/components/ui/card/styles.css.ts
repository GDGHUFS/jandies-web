import { rem, theme } from '@jandies/style';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  ...theme.layouts.column,
  padding: rem(24),
  border: `${rem(1)} solid ${theme.colors.gray200}`,
  borderRadius: rem(12),
  backgroundColor: theme.colors.white,
});

export const header = style({
  ...theme.layouts.column,
  gap: rem(2),
});

globalStyle(`${root} > h2`, {
  color: theme.colors.black,
  fontSize: theme.fontSizes.xxxl,
  fontWeight: 500,
});

globalStyle(`${header} > h3`, {
  color: theme.colors.black,
  fontSize: theme.fontSizes.xxl,
  fontWeight: 500,
});

globalStyle(`${header} > h4`, {
  color: theme.colors.gray700,
  fontSize: theme.fontSizes.base,
  fontWeight: 500,
});

globalStyle(`${header} > h5`, {
  color: theme.colors.gray600,
  fontSize: theme.fontSizes.xs,
  fontWeight: 500,
});
