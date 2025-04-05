import { rem } from '@jandies/style';
import { style } from '@vanilla-extract/css';

export const root = style({
  justifyContent: 'space-between',
  minHeight: rem(240),
  gap: rem(24),
});
