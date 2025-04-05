import { rem, theme } from '@jandies/style';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  ...theme.layouts.centerY,
  width: '100%',
  gap: rem(8),
});

export const iconContainer = style({
  position: 'relative',
  flexShrink: 0,
  width: rem(36),
  height: rem(36),
});

globalStyle(`${iconContainer} img`, {
  objectFit: 'cover',
});

export const repositoryIcon = style({
  width: rem(36),
  height: rem(36),
  border: `${rem(1)} solid ${theme.colors.blackAlpha05}`,
  borderRadius: rem(5),
  userSelect: 'none',
  overflow: 'hidden',
});

export const userIcon = style({
  position: 'absolute',
  right: rem(-3),
  bottom: rem(-3),
  width: rem(18),
  height: rem(18),
  border: `${rem(1)} solid ${theme.colors.white}`,
  borderRadius: rem(5),
  userSelect: 'none',
});

export const textContainer = style({
  ...theme.layouts.column,
  width: '100%',
  flex: 1,
});

export const message = style({
  display: '-webkit-box',
  width: '100%',
  color: theme.colors.black,
  fontSize: theme.fontSizes.sm,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
});

export const metadata = style({
  ...theme.layouts.centerY,
  height: 'fit-content',
  gap: rem(8),
});

export const repository = style({
  paddingBlock: rem(1),
  paddingInline: rem(2),
  color: theme.colors.blackAlpha70,
  fontSize: theme.fontSizes.xxs,
  border: `${rem(1)} solid ${theme.colors.blackAlpha05}`,
  borderRadius: rem(5),
});

export const time = style({
  color: theme.colors.blackAlpha70,
  fontSize: theme.fontSizes.xxs,
});
