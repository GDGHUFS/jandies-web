import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

import { rem } from './pxto';

const sizes = {
  appWidth: rem(1200),
  appInline: rem(24),

  header: rem(63),
};

const fonts = {
  mono: `"Courier New", Courier, "Pretendard Variable", "Pretendard", monospace`,
  sans: `"Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const layouts = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const zIndices = {
  behind: '-1',
  overlay: '100',
  headerContainer: '150',
  modal: '200',
};

const fontSizes = {
  xxxl: rem(28),
  xxl: rem(24),
  xl: rem(20),
  lg: rem(18),
  md: rem(16),
  sm: rem(14),
  xs: rem(12),
  xxs: rem(10),
  xxxs: rem(8),
};

const typographies = {};

const layerStyles = {};

export const modeColors = createThemeContract({});

export const colors = {
  white: '#FFFFFF',
  whiteAlpha05: 'rgba(255, 255, 255, 0.05)',
  whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
  whiteAlpha20: 'rgba(255, 255, 255, 0.2)',
  whiteAlpha30: 'rgba(255, 255, 255, 0.3)',
  whiteAlpha40: 'rgba(255, 255, 255, 0.4)',
  whiteAlpha50: 'rgba(255, 255, 255, 0.5)',
  whiteAlpha60: 'rgba(255, 255, 255, 0.6)',
  whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
  whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
  whiteAlpha90: 'rgba(255, 255, 255, 0.9)',

  black: '#202325',
  blackAlpha05: 'rgba(32, 35, 37, 0.05)',
  blackAlpha10: 'rgba(32, 35, 37, 0.1)',
  blackAlpha20: 'rgba(32, 35, 37, 0.2)',
  blackAlpha30: 'rgba(32, 35, 37, 0.3)',
  blackAlpha40: 'rgba(32, 35, 37, 0.4)',
  blackAlpha50: 'rgba(32, 35, 37, 0.5)',
  blackAlpha60: 'rgba(32, 35, 37, 0.6)',
  blackAlpha70: 'rgba(32, 35, 37, 0.7)',
  blackAlpha80: 'rgba(32, 35, 37, 0.8)',
  blackAlpha90: 'rgba(32, 35, 37, 0.9)',

  gray100: '#F3F5F6',
  gray200: '#EAECEE',
  gray300: '#DDE0E3',
  gray400: '#D1D4D8',
  gray500: '#B2B4B8',
  gray600: '#929497',
  gray700: '#727577',
  gray800: '#525557',
  gray900: '#323537',

  grass400: '#43A261',
  grass900: '#004516',

  ...modeColors,
};

export const lightColors = createTheme(modeColors, {});

export const darkColors = createTheme(modeColors, {});

export const theme = createGlobalTheme(':root', {
  colors,
  fonts,
  fontSizes,
  sizes,
  layouts,
  zIndices,
  typographies,
  layerStyles,
});
