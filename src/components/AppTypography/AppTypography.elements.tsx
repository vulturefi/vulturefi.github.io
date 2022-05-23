import { Theme, Typography, TypographyProps } from '@mui/material'
import styled, { css } from 'styled-components'

import { AppTypographyProps } from './AppTypography'
interface StyledTypographyProps
  extends Omit<AppTypographyProps, keyof TypographyProps> {
  theme: Theme
}
export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  ${({ $transparent, $customTextAlign }: StyledTypographyProps) => css`
    ${$transparent &&
    css`
      opacity: 0.5;
    `}
    ${$customTextAlign &&
    css`
      display: flex;
      justify-content: ${$customTextAlign};
      align-items: center;
    `}
  `}
`
