import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

// const PRIMARY = {
//   lighter: '#C8FACD',
//   light: '#5BE584',
//   main: '#00AB55',
//   dark: '#007B55',
//   darker: '#005249',
//   contrastText: '#fff',
// };
const PRIMARY = {
  lighter: '#d09273',
  light: '#804b30',
  main: '#60341e',
  dark: '#402416',
  darker: '#6d1f1f',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#f1fffa',
  light: '#57dba4',
  main: '#34C588',
  dark: '#0c7550',
  darker: '#09573c',
  contrastText: '#042c1e',
};
const GREY_PALETTE = {
  lighter: GREY[300],
  light: GREY[500],
  main: GREY[800],
  dark: GREY[900],
  darker: GREY[800],
  contrastText: '#fff',
};

const INFO = {
  lighter: '#d5fff9',
  light: '#b8ecea',
  main: '#30bec6',
  dark: '#1c97a2',
  darker: '#31a4b0',
  contrastText: '#fff',
};

const WHITE = {
  lighter: '#ffffff4d',
  light: '#ffffffa9',
  main: '#ffffff',
  dark: '#e4e4e4',
  darker: '#cbcbcb',
  contrastText: PRIMARY.main,
};

const SUCCESS = {
  lighter: '#D8FBDE',
  light: '#86E8AB',
  main: '#36B37E',
  dark: '#1B806A',
  darker: '#0A5554',
  contrastText: '#fff',
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#fff',
};

const ERROR_RED = {
  lighter: '#ffa6a3',
  light: '#ff504a',
  main: '#ff3730',
  dark: '#f01c15',
  darker: '#d61f19',
  contrastText: '#fff',
};

const COMMON = {
  common: { black: '#000', white: '#fff', lightBrown: '#fffdfb' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  _white: WHITE,
  error_red: ERROR_RED,
  grey_palette: GREY_PALETTE,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode) {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return themeMode === 'light' ? light : dark;
}
