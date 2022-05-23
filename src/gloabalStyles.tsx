import { alpha, Box, Divider, Theme } from '@mui/material'
import styled, { css } from 'styled-components'

export const Shade = styled(Box)`
  ${({ theme }: { theme: Theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: -4.5%;
    left: 0;
    background: radial-gradient(
      40% 3.56% at 50% 5%,
      ${theme.palette.primary.main} 0%,
      ${alpha(theme.palette.primary.main, 0.51)} 63.46%,
      rgba(6, 45, 130, 0) 100%
    );
  `}
`

export const PageContainer = styled(Box)`
  ${({ theme }: { theme: Theme }) => css`
    background: linear-gradient(90deg, #191331 2.12%, #2D1645 100%);
    position: relative;
    width: 100%;
    max-width: 640px;
    margin: 0 auto 16px;
    padding: 24px 24px 32px 24px;
    border-radius: 20px;
    color: white;
    box-shadow: 0px 0px 20px -10px rgba(255, 255, 255, 0.5),
      0px 30px 80px -60px #0c58ff, 0px 100px 180px -100px #00ff57;
    @media only screen and (max-width: ${theme.breakpoints.values.md - 1}px) {
      max-width: 400px;
      margin: 0 16px 16px;
    }
    @media only screen and (max-width: ${theme.breakpoints.values.xs - 1}px) {
      margin-bottom: 24px;
    }
  `}
`
interface StyledDividerProps {
  theme: Theme
  $colored?: boolean
}
export const StyledDivider = styled(Divider).attrs(() => ({
  flexItem: true,
}))<StyledDividerProps>`
  ${({ theme, $colored: colored }: StyledDividerProps) => css`
    border-color: ${alpha(theme.palette.common.white, 0.5)};
    border-bottom-width: 2px;
    &.MuiDivider-withChildren {
      &::before,
      ::after {
        border-top-width: 2px;
      }
    }
    span {
      color: ${theme.palette.common.white};
    }
    ${colored &&
    css`
      border-color: ${alpha(theme.palette.primary.main, 0.5)};
      &::before,
      &::after {
        border-color: ${alpha(theme.palette.primary.main, 0.5)};
      }
    `}
  `}
`
export const ScrollableBox = styled(Box)`
  position: relative;
  overflow-y: scroll;
  height: 100%;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`

interface ExternalLinkProps {
  disableUnderline?: boolean
}
export const ExternalLink = styled.a.attrs(() => ({
  target: '_blank',
  ref: 'noreferrer',
}))<ExternalLinkProps>`
  ${({ disableUnderline }: ExternalLinkProps) => css`
    text-decoration: ${disableUnderline ? 'unset' : 'underline'};
  `}
`

interface ColorizedProps {
  theme: Theme
  variant?: 'green' | 'red'
}
export const Colorized = styled.span<ColorizedProps>`
  ${({ theme, variant = 'green' }: ColorizedProps) => css`
    ${variant === 'green' &&
    css`
      color: ${theme.palette.secondary.main};
    `}
    ${variant === 'red' &&
    css`
      color: ${theme.palette.error.main};
    `}
  `}
`
