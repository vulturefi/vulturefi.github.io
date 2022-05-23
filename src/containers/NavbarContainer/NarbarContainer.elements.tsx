import { AppBar, Box, Theme, Typography } from '@mui/material'
import styled, { css } from 'styled-components'

export const StyledTypography = styled(Typography)`
  &:hover {
    color: #d42ebc
  }
`
export const CommunityIcon = styled(Box)`
  padding-right: 10px;
  & img {
    max-height: 25px;
  }
`

export const CommunityItem = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CompanyLogo = styled(Box)`
  ${({ theme }: { theme: Theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding: 5px;
    // @media only screen and (max-width: ${theme.breakpoints.values.md - 1}px) {
    //   position: absolute;
    //   /* padding of the parent container */
    //   top: 8px;
    //   left: 16px;
    // }
  `}
`

interface NavbarItemProps {
  $hasBorder?: boolean
  disabled?: boolean
}

export const NavbarItem = styled(Box)<NavbarItemProps>`
  ${({ $hasBorder = false, disabled = false }: NavbarItemProps) => css`
  margin: 0px 10px;
  height: 48px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  
  ${disabled == false &&
    css`
      cursor: pointer;
      &:hover {
        filter: brightness(50%);
      }
    `}
  
    ${disabled == true &&
      css`
        pointer-events: none;
      `}

  ${$hasBorder == true &&
  css`
    border: solid 1px;
    border-radius: 24px;
    padding: 0px 40px 0px 2px;
    `}
  `}
`
export const Trailing = styled(Box)`
  ${({ theme }: { theme: Theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    ${NavbarItem} {
      &:last-of-type {
        margin-right: 0;
      }
    }
  `}
`
interface ContainerProps {
  theme: Theme
}

export const NavBarContainer = styled(Box)`
  ${({ theme }: ContainerProps) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: transparent;


  `}
`

export const Container = styled(AppBar)<ContainerProps>`
  ${({ theme }: ContainerProps) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    &::before {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .MuiToolbar-root {
      background: linear-gradient(269.71deg, #0C0917 0.22%, #291641 99.72%);
      width: 100%;
      padding: 16px 20px;
    }

    .ant-dropdown-menu-item {
      background-color: rgba(255, 255, 255, 0.1);
    }

    @media only screen and (max-width: ${theme.breakpoints.values.md - 1}px) {
      .MuiToolbar-root {
        min-height: 70px;
        padding: 8px 16px;
        justify-content: center;
      }
    }
  `}
`

export const MenuContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
  padding: 8px;
  border-radius: 30px;
  background: #2f2345;
  width: 60px;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  height: 48px;
  font-size: 20px;
  &:hover {
    opacity: 0.8;
  }
`