import { Button, Theme } from '@mui/material'
import styled, { css, keyframes } from 'styled-components'

import { VariantType } from './AppButton'

const primaryButtonAnimation = keyframes`
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
`
interface StyledButtonType {
  theme: Theme
  margin?: string
  $customVariant?: VariantType
}

export const StyledButton = styled(Button)<StyledButtonType>`
  ${({ theme, margin, $customVariant = 'neutral'}: StyledButtonType) => css`
    color: ${theme.palette.common.white};
    background: unset;
    background-color: unset;
    text-transform: unset;
    font-size: 1rem;
    font-weight: 700;
    max-height: 50px;
    border-radius: 30px;
    &.Mui-disabled {
      border: 1px solid ${theme.palette.common.white};
      border-radius: 30px;
      background: unset;
      opacity: 0.3;
      color: inherit;
      pointer-events: unset;
      cursor: not-allowed;
    }
    &:enabled:active {
      user-select: none;
    }

    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
    ${$customVariant === 'primary' &&
    css`
      background: linear-gradient(
        90deg,
        #9f008b,
        #ff69ef
      );;
      &:hover {
        background-size: 300% 100%;
        animation: ${primaryButtonAnimation} 5s ease infinite;
        &.Mui-disabled {
          background: unset;
        }
      }
      &:enabled:active {
        background: #00bfb2;
      }
    `}
    ${$customVariant === 'primary-no-grad' &&
    css`
      &.MuiButton-root {
        background: #D42EBC;
      }
      &:hover {
        background-size: 300% 100%;
        opacity: 80%;
        &.MuiButton-root {
          background: #D42EBC;
        }
        &.Mui-disabled {
          background: unset;
        }
      }
      &:enabled:active {
        background: #00bfb2;
      }
    `}
    ${$customVariant === 'swap-active' &&
    css`
      background: rgba(214, 57, 191, 0.15);
      &:hover {
        background-size: 300% 100%;
        animation: ${primaryButtonAnimation} 5s ease infinite;
        &.Mui-disabled {
          background: unset;
        }
      }
      &:enabled:active {
        background: #00bfb2;
      }
    `}
    ${$customVariant === 'secondary' &&
    css`
      background: ${theme.palette.primary.main};
      &:enabled:hover {
        background: ${theme.palette.primary.main};
      }
    `}

    ${$customVariant === 'neutral' &&
    css`
      border: solid 1px ${theme.palette.common.white};
      &.MuiButton-root {
        border: solid 1px ${theme.palette.common.white};
      }
      &:hover {
        opacity: 80%;
      }
    `}

    ${$customVariant === 'negative' &&
    css`
      background: linear-gradient(
        90deg,
        ${theme.palette.error.main},
        ${theme.palette.error.dark}
      );;
      &:hover {
        background-size: 300% 100%;
        animation: ${primaryButtonAnimation} 5s ease infinite;
        &.Mui-disabled {
          background: unset;
        }
      }
      &:enabled:active {
        background: #00bfb2;
      }
    `}

    ${$customVariant === 'unset' &&
    css`
      background: unset;
      border: unset;
      &:hover {
        background: unset;
      }
    `}

    ${$customVariant === 'pool' &&
    css`
      border: 1px solid white;
      border-radius: 51px;
      color: white;
      &:hover {
        opacity: '80%',
      }
      &.Mui-disabled {
        border-radius: 51px;
      }
    `}

    ${$customVariant === 'max' &&
    css`
      background: darkviolet;
    `}
  `};
`
 