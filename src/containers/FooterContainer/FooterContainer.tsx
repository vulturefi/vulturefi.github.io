import React, { ReactElement } from "react";
import { Container, LinkRow } from './FooterContainer.elements'
import VultureText from 'assets/companyLogos/vulture-logo-text.svg'
import CopyrightIcon from 'assets/icons/copyright-icon.svg'
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

function FooterLink({text, link, style} : {text: string, link: string, style? : React.CSSProperties}){
    return (
        <a target="_blank" rel="noopener noreferrer" href={link}>
            <Typography 
                style={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '200',
                    fontSize: '20px',
                    lineHeight: '27px',
                    ...style,
                }}
                align='center'
                >
                {text}
            </Typography>
        </a>
    )
}
function FooterContainer(): ReactElement{

    const theme = useTheme()
    const isMdDevice = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.md - 1))

    return (
        <Container>
            <img src={VultureText} style={{padding: '0px 0px 30px 0px'}} width={!isMdDevice ? '180px' : '100px'}/>
            {/* <LinkRow>
                <FooterLink text="About Us" link="" >
            </LinkRow> */}
            <Box display="flex" flexDirection="row">
                <img src={CopyrightIcon} width={10}/>
                <Typography
                    style={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: !isMdDevice ? '14px' : '10px' ,
                        lineHeight: '17px'
                    }}
                >
                    Copyright 2022 vulture.finance - All rights reserved
                </Typography>
            </Box>

        </Container>
    )
}

export default FooterContainer