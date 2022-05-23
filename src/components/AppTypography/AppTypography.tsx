import React, { ReactElement } from 'react'

import { TypographyProps } from '@mui/material'

import { StyledTypography } from './AppTypography.elements'

export interface AppTypographyProps extends TypographyProps {
  /** set opacity to 0.5 */
  $transparent?: boolean
  /** align children which are composed of texts and images */
  $customTextAlign?: 'center' | 'flex-start' | 'flex-end'
}

const AppTypography = ({
  children,
  $transparent,
  $customTextAlign,
  ...otherProps
}: AppTypographyProps): ReactElement => {
  return (
    <StyledTypography
      $transparent={$transparent}
      $customTextAlign={$customTextAlign}
      {...otherProps}
    >
      {children}
    </StyledTypography>
  )
}

export default AppTypography
