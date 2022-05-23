import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'

import overrides from './overrides'
import palettes from './palette'
export const breakpoints = createBreakpoints({
  values: {
    xs: 320,
    sm: 480,
    md: 800,
    lg: 1025,
    xl: 1300,
  },
})

// typography
const DEFAULT_FONT_SIZE = 16
const pxToRem = (pixel: number) => `${pixel / DEFAULT_FONT_SIZE}rem`
const typography: TypographyOptions = {
  htmlFontSize: DEFAULT_FONT_SIZE,
  fontSize: DEFAULT_FONT_SIZE,
  fontFamily: ['Roboto', 'sans-serif'].join(','),
  fontWeightBold: 900,

  h1: {
    fontSize: pxToRem(96),
  },
  h2: {
    fontSize: pxToRem(60),
  },
  h3: {
    fontSize: pxToRem(48),
  },
  h4: {
    fontSize: pxToRem(34),
    fontWeight: 700,
  },
  h5: {
    fontSize: pxToRem(24),
    fontWeight: 700,

    [breakpoints.up(breakpoints.values.sm)]: {
      fontSize: pxToRem(20),
    },
    [breakpoints.up(breakpoints.values.xs)]: {
      fontSize: pxToRem(20),
    },
  },
  h6: {
    fontSize: pxToRem(20),
    fontWeight: 700,
  },
  caption: {
    fontSize: pxToRem(14.5),
    fontWeight: 400,

    [breakpoints.down(breakpoints.values.md - 1)]: {
      fontSize: pxToRem(12),
    },
  },
  subtitle1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: pxToRem(16),
    fontWeight: 700,
    '&.subtitle2--small': {
      opacity: 0.4,
      fontSize: pxToRem(14),
    },
  },
  body1: {
    fontSize: pxToRem(16),
  },
  body2: {
    fontSize: pxToRem(14),
  },
}

// themes
const baseThemeOptions: ThemeOptions = {
  typography: typography,
  breakpoints: breakpoints,
}
const lightTheme = createTheme({ ...baseThemeOptions })
// adaptV4Theme({
//   ...baseThemeOptions,
//   palette: palettes.lightPalette,
//   // overrides: overrides,
// }),

export const darkTheme = createTheme(
  // adaptV4Theme({
  //   ...baseThemeOptions,
  //   palette: palettes.darkPalette,
  //   overrides: overrides,
  // }),
  { ...baseThemeOptions, palette: palettes.darkPalette, components: overrides },
)

export default {
  lightTheme: responsiveFontSizes(lightTheme),
  darkTheme: responsiveFontSizes(darkTheme),
}
