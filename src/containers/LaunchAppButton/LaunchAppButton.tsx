import { Typography } from '@mui/material'
import React, { ReactElement  } from 'react'
import {
  Container,
} from './LaunchAppButton.elements'
import { useNavigate } from 'react-router-dom'
import ComingSoonBannerInverted from 'assets/icons/coming-soon-banner-inverted.svg'

function LaunchAppButton(): ReactElement {

    const navigate = useNavigate()
    
    return (
        <>
            <img 
                src={ComingSoonBannerInverted} 
                width="44px" 
                style={{
                    zIndex: 10,
                    position: 'absolute',
                    left: 3,
                    top: -1
                }}
            />
            <Container
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                bgcolor="#D639BF"
                height="48px"
                // position="absolute"
                onClick={() => navigate('/app')}
            >
                <>
                    <Typography variant="caption">Launch App</Typography>
                </>
            </Container>
        </>
    )
}

export default LaunchAppButton
