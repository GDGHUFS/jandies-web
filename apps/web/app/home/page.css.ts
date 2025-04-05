import { rem } from '@jandies/style';
import { style } from '@vanilla-extract/css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  gap: rem(24),
});
