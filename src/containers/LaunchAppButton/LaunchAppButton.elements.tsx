import { Box, Theme, Typography } from '@mui/material'
import styled, { css } from 'styled-components'

interface ContainerProps {
  theme: Theme
}
export const Container = styled(Box)<ContainerProps>`
  ${({ theme }: ContainerProps) => css`
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 999px;
    user-select: none;
    border: 1px solid #FFFCFC;
    &:hover {
      opacity: 0.8;
    }
  `}
`