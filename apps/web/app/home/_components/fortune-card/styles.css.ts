import { rem, theme } from '@jandies/style';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  justifyContent: 'space-between',
  minHeight: rem(240),
});

export const fortune = style({
  color: theme.colors.gray700,
  fontSize: theme.fontSizes.base,
  textAlign: 'end',
  wordBreak: 'keep-all',
});

globalStyle(`${fortune} em`, {
  fontWeight: 'bold',
});
