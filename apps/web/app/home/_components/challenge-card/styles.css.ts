import { theme } from '@jandies/style';
import { style } from '@vanilla-extract/css';

export const title = style({
  color: theme.colors.black,
  fontSize: theme.fontSizes.md,
  fontWeight: 600,
});
