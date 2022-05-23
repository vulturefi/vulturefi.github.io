import { Box, Theme, Typography } from "@mui/material";
import styled, { css } from "styled-components";

interface Props {
    theme: Theme
  }

export const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`

export const VerticalCard = styled(Box)`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 30px;
    margin: 10px;
    padding: 25px 25px;
    flex: 1;
`

export const VerticalCardItem = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    fontSize: 20px;
`


export const VerticalCardHeading = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    fontSize: 25px;
`

export const HorizontalCard = styled(Box)`
    ${({ hasBorder=true }: {hasBorder? : boolean}) => css`
    ${hasBorder &&
        css`
            border: 1px solid white;
        `}
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin: 10px;
    padding: 30px 10px;
    flex: 1;
    max-width: 370px;
    `}
`

export const HorizontalCardItem = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 10px;
`

export const IconContainer = styled(Box)`
    margin: 20px;
    &:hover {
        pointer: click;
        opacity: 80%;
    }
`

export const SectionContainer = styled(Box)`
    ${({ theme }: Props) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 750px;

    @media only screen and (max-width: ${theme.breakpoints.values.md - 1}px) {
        width: 430px;
      }

    @media only screen and (max-width: ${theme.breakpoints.values.sm - 1}px) {
        width: 300px;
      }

    `}
`

export const SectionItem = styled(Box)`
    ${({ theme }: Props) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    position: relative;
    width: 750px;
    padding: 0px 0px 50px 0px;
    flex: 1;

    @media only screen and (max-width: ${theme.breakpoints.values.md - 1}px) {
        width: 430px;
        padding: 0px 0px 30px 0px;
      }

    @media only screen and (max-width: ${theme.breakpoints.values.sm - 1}px) {
        width: 300px;
        padding: 0px 0px 20px 0px;
      }

    `}
`

export const HeadingContainer = styled(Box)`
    ${({ theme }: Props) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 750px;
    padding: 0px 0px 50px 0px;
    font-size: 50px;

    @media only screen and (max-width: ${theme.breakpoints.values.md - 1}px) {
        width: 430px;
        font-size: 35px;
        padding: 0px 0px 30px 0px;
      }

    @media only screen and (max-width: ${theme.breakpoints.values.sm - 1}px) {
        width: 300px;
        font-size: 25px;
        padding: 0px 0px 20px 0px;
      }

    `}
`

export const SubHeadingContainer = styled(Box)`
    ${({ theme }: Props) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 750px;
        padding: 0px 0px 50px 0px;
        font-weight: 200;
        font-size: 20px;

        @media only screen and (max-width: ${theme.breakpoints.values.md - 1}px) {
            width: 430px;        
            font-weight: 200;
            font-size: 17px;
            padding: 0px 0px 30px 0px;
        }

        @media only screen and (max-width: ${theme.breakpoints.values.sm - 1}px) {
            width: 300px;
            font-weight: 200;
            font-size: 14px;
            padding: 0px 0px 20px 0px;
        }

    `}
`

// export const SectionItem = styled(Box)`
//     ${({ theme }: Props) => css`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     position: relative;

//     @media only screen and (max-width: ${theme.breakpoints.values.md - 1}px) {
//         padding: 0px 0px 30px 0px;
//       }

//     @media only screen and (max-width: ${theme.breakpoints.values.sm - 1}px) {
//         padding: 0px 0px 20px 0px;
//       }

//     `}
// `