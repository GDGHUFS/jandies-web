import { breakpoint, rem } from '@jandies/style';
import { style } from '@vanilla-extract/css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: rem(24),

  ...breakpoint({ mobile: { gridTemplateColumns: '1fr 2fr' } }),
});
