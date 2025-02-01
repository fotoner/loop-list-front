export const color = {
  white: '#ffffff',
  black: '#000000',
  secondary: '#6CA87E',
  'gray-30': '#f2f2f2',
  'gray-50': '#ededed',
  'gray-100': '#d4d4d4',
  'gray-200': '#bababa',
  'gray-300': '#a1a1a1',
  'gray-400': '#878787',
  'gray-500': '#6e6e6e',
  'gray-600': '#545454',
  'gray-700': '#3b3b3b',
  'gray-800': '#212121',
  'gray-900': '#080808',
  'primary-50': '#ECEAF2',
  'primary-100': '#DAD5E6',
  'primary-200': '#C7C0D9',
  'primary-300': '#B5ABCD',
  'primary-400': '#A296C0',
  'primary-500': '#7E6CA8',
  'primary-600': '#6C5C90',
  'primary-700': '#5A4D78',
  'primary-800': '#483D60',
  'primary-900': '#241E30',
  'error-50': '#F7E7E7',
  'error-100': '#F0D0D0',
  'error-200': '#E9B9B9',
  'error-300': '#E2A1A1',
  'error-400': '#DB8A8A',
  'error-500': '#CD5C5C',
  'error-600': '#AF4E4E',
  'error-700': '#924141',
  'error-800': '#753434',
  'error-900': '#3A1A1A',
  transparent: 'transparent',
};

export const fontSize = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '3rem', // 32px
  '4xl': '4rem', // 64px
  '5xl': '4.5rem', // 72px
};

export const fontWeight = {
  regular: '400',
  semibold: '600',
};

export const lineHeight = {
  '1': '1', // 100%
  '1.1': '1.1', // 110%
  '1.2': '1.2', // 120%
  '1.3': '1.3', // 130%
  '1.4': '1.4', // 140%
  '1.5': '1.5', // 150%
  '1.6': '1.6', // 160%
};

export const letterSpacing = {
  tighter: '-.04em',
  tight: '-.02em',
  normal: '0',
  wide: '.02em',
  wider: '.04em',
};

export const spacing = {
  px: '1px',
  ...Array.from({ length: 101 }, (_, i) => i / 2).reduce(
    (acc, cur) => {
      acc[cur] = `${cur * 4}px`;
      return acc;
    },
    {} as Record<string, string>,
  ), //w-0 ~ w-50
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
};

export const borderRadius = {
  ...Array.from({ length: 51 }, (_, i) => i / 2).reduce(
    (acc, cur) => {
      acc[cur] = `${cur * 0.25}rem`;
      return acc;
    },
    {} as Record<string, string>,
  ), // rounded-0 ~ rounded-25
  full: '9999px',
};

export const boxShadow = {
  inner: 'inset 0 0 0 1px rgba(0, 0, 0, 1)',
  'inner-2': 'inset 0 0 0 2px rgba(0, 0, 0, 1)',
  'inner-4': 'inset 0 0 0 4px rgba(0, 0, 0, 1)',
  'inner-6': 'inset 0 0 0 6px rgba(0, 0, 0, 1)',
  'inner-8': 'inset 0 0 0 8px rgba(0, 0, 0, 1)',
};

export const layoutWidth = '1200px';
