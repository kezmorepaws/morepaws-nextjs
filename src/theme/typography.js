// ----------------------------------------------------------------------

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Coolvetica, sans-serif'; // Google Font
const FONT_SECONDARY = 'HelveticaNeueLTStd, sans-serif'; // Local Font
const FONT_BODY = 'Roboto, sans-serif';
// const FONT_SECONDARY = 'HelveticaNeueLTStd'; // Local Font/

const typography = {
  fontFamily: FONT_SECONDARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    fontFamily: FONT_SECONDARY,
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 800,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    fontFamily: FONT_SECONDARY,
  },
  h4: {
    fontWeight: 800,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
    fontFamily: FONT_SECONDARY,
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    fontFamily: FONT_SECONDARY,
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
    fontFamily: FONT_SECONDARY,
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.6,
    fontSize: pxToRem(16),
    fontFamily: FONT_BODY,
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    marginBottom: -1,
    fontFamily: FONT_BODY,
  },
  body1: {
    lineHeight: 1.6,
    fontSize: pxToRem(16),
    marginBottom: -1,
    fontFamily: FONT_BODY,
    fontWeight: 300,
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    marginBottom: -1,
    fontFamily: FONT_BODY,
    fontWeight: 300,
  },
  caption: {
    lineHeight: 1.6,
    fontSize: pxToRem(12),
    fontFamily: FONT_BODY,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.6,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
    fontFamily: FONT_BODY,
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
    fontFamily: FONT_BODY,
  },
};

export default typography;
