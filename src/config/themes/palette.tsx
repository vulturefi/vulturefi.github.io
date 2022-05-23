import { PaletteOptions } from '@mui/material/styles'

export const darkColors = {
  primary: {
    100: '#fae5f5',
    200: '#e88fd7',
    300: '#dd5ec7', 
    400: '#d42ebb', // primary.main
    500: '#c900b0', 
    600: '#bb00ab',
    700: '#a800a5',
    800: '#9700a0',
    900: '#770095',
    A200: '#00A7FF',
    main: '#0d1126',
    light: '#34374e',
    dark: '#000'
  },
  secondary: {
    400: '#2D1645',
    main: '#d42ebc',
    light: '#ff69ef',
    dark: '#9f008b',
    A400: 'linear-gradient(90deg, #00F152 0%, #0076E9 100%)',
  },
}
const basePalette: PaletteOptions = {
  common: { white: '#ffffff', black: '#2D1645' },
  error: {
    main: '#F44336',
    dark: '#B71C1C',
  },
}
const lightPalette: PaletteOptions = {
  ...basePalette,
  mode: 'light',
  primary: {
    main: '#00A7FF',
  },
  secondary: {
    main: '#2D1645',
  },
  text: {
    primary: '#fff',
  },
}

const darkPalette: PaletteOptions = {
  ...basePalette,
  mode: 'dark',
  primary: darkColors.primary,
  secondary: darkColors.secondary,
  background: { default: '#191331', paper: '#2D1645' },
}

export default {
  lightPalette,
  darkPalette,
}
