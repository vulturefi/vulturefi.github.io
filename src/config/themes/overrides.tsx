import { Components } from '@mui/material'
import { unset } from 'lodash'

import { darkColors } from './palette'

const overrides: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      'html, body, #root': {
        background: 'linear-gradient(269.71deg, #0C0917 0.22%, #291641 99.72%)',
        minHeight: '100vh',
        letterSpacing: '0.15px',
        font: 'Roboto',
      },
      a: {
        textDecoration: 'none',
        color: 'unset',
      },
      '#walletconnect-qrcode-modal': {
        a: {
          color: '#000',
        },
      },
    },
  },

  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: darkColors.primary[400],
        maxWidth: '250px',
        fontSize: '14px',
        lineHeight: 1.5,
        padding: '0.8rem',
        fontWeight: 400,
        boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
      },
      arrow: {
        '&:before': {
          backgroundColor: darkColors.primary[400],
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          color: 'rgba(255, 255, 255, 0.3)',
        },
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'unset',
        backgroundImage: 'unset',
        boxShadow: 'unset',
        zIndex: 10,
      },
    },
  },

  MuiSnackbar: {
    styleOverrides: {
      anchorOriginTopRight: {
        '@media (min-width: 600px)': {
          // make sure to place below the navbar
          top: '90px',
        },
      },
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        color: '#fff',
        borderRadius: '10px',
        '@media (min-width: 600px)': {
          minWidth: '0',
        },
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      regular: {
        '@media (min-width: 600px)': {
          minHeight: '75px',
        },
      },
      gutters: {
        '@media (min-width: 600px)': {
          paddingLeft: '30px',
          paddingRight: '30px',
        },
      },
    },
  },
  MuiSlider: {
    styleOverrides: {
      root: {
        color: '#00F152',
      },
      thumb: {
        background: 'linear-gradient(to right, #00f152, #0076e9)',
        width: 20,
        height: 20,
        '&:hover, &.Mui-active': {
          boxShadow: '0 0 0 5px #00f15014',
        },
      },
      rail: {
        backgroundColor: '#007ae5',
        opacity: 0.5,
        height: 4,
        borderRadius: 999,
      },
      track: {
        height: 6,
        borderRadius: 999,
      },
      mark: {
        height: 4,
        width: 4,
        backgroundColor: '#00F152',
        opacity: 0.5,

        '&.disabled': {
          backgroundColor: '#fff',
        },
      },
      markActive: {
        backgroundColor: 'unset',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderBottomWidth: '1px',
      },
      withChildren: {
        '&::before, &::after': {
          borderTopWidth: '1px',
        },
      },
      wrapper: {
        display: 'inline-flex',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        color: 'unset',
      },
    },
  },
  // MuiSvgIcon: {
  //   styleOverrides: {
  //     root: {
  //       width: unset,
  //       height: unset,
  //       fontSize: unset,
  //     },
  //   },
  // },
}
export default overrides
