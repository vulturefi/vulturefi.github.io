import { Box, Theme } from '@mui/material'
import styled, { css } from 'styled-components'

interface ContainerProps {
  theme: Theme
  $bgColor?: string
}

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: inherit;
`

export const ChildrenContainer = styled(Box)<ContainerProps>`
  ${({ theme, $bgColor }: ContainerProps) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 100px;
    @media only screen and (max-width: ${theme.breakpoints.values.md - 1}px) {
      margin-top: 50px
    }
    `
  }
`
