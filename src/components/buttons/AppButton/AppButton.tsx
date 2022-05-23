import React, { ReactElement } from 'react'

import { Box, ButtonProps } from '@mui/material'

import { StyledButton } from './AppButton.elements'

export type VariantType =
  | 'primary'
  | 'primary-no-grad'
  | 'secondary'
  | 'swap-active'
  | 'swap-inactive'
  | 'neutral'
  | 'negative'
  | 'unset'
  | 'pool'
  | 'max'
  | undefined
interface Props extends ButtonProps {
  children?: React.ReactNode | undefined
  customVariant?: VariantType
  margin?: string
}

function AppButton({
  children,
  customVariant = 'primary',
  margin,
  ...otherProps
}: Props): ReactElement {
  return (
    <StyledButton
      disableRipple
      disableFocusRipple
      disableTouchRipple
      $customVariant={customVariant}
      margin={margin}
      {...otherProps}
    >
      {children}
    </StyledButton>
  )
}

export default AppButton
