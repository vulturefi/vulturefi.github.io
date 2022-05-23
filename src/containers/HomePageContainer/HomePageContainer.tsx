import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import TwitterIcon from "assets/lottie-icons/TwitterIcon";
import React, { ReactElement, useEffect } from "react";
import VultureLightLogo from '../../assets/companyLogos/vulture-light.svg'
import MoonbeamLogo from '../../assets/companyLogos/moonbeam-logo.svg'
import MoonriverLogo from '../../assets/companyLogos/moonriver-logo.svg'
import MoonbeamFoundationLogo from 'assets/companyLogos/moonbeam-foundation-logo.svg'
import AppButton from "components/buttons/AppButton/AppButton"
import HandGraphic from 'assets/graphics/hand.svg'
import RoadmapGraphic from 'assets/graphics/roadmap.svg'
import LackofGamificationGraphic from 'assets/graphics/lack-of-gamification.svg'
import FragmentedLiquidityGraphic from 'assets/graphics/fragmented-liquidity.svg'
import MissingPrimitiveGraphic from 'assets/graphics/missing-primitive.svg'
import SingleSidedStakingGraphic from 'assets/graphics/single-sided-staking.svg'
import IncentiveMechanismsGraphic from 'assets/graphics/incentive-mechanisms.svg'
import LowestSlippageGraphic from 'assets/graphics/lowest-slippage.svg'
import NFTRewardGraphic from 'assets/graphics/nft-reward.svg'
import TokenomicsRewardGraphic from 'assets/graphics/tokenomics-reward.svg'
import FounderOfMoonbeam from 'assets/graphics/founder-of-moonbeam.png'
import DiscordLogo from 'assets/social/discord.svg'
import TelegramLogo from 'assets/social/telegram.svg'
import TwitterLogo from 'assets/social/twitter.svg'
import MediumLogo from 'assets/social/medium.svg'
import ComingSoonBannerInverted from 'assets/icons/coming-soon-banner-inverted.svg'
import { 
    VerticalCard, 
    VerticalCardItem, 
    VerticalCardHeading, 
    HorizontalCard, 
    HorizontalCardItem, 
    IconContainer, 
    Container, 
    SectionContainer,
    HeadingContainer,
    SubHeadingContainer,
    SectionItem
} from './HomePageContainer.elements'
import { useLocation, useNavigate } from "react-router-dom";

// import { SectionHeading } from "./HomePageContainer.elements";

function SectionHeading( {text, style }: {text : string, style? : React.CSSProperties}): ReactElement {
    return (
        <Typography style={{
            ...style,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 'inherit',
            lineHeight: 'inherit'
        }}
        >
            {text}
        </Typography>
    )
}

function SectionHeadingHighlighted( {text, style}: {text : string, style? : React.CSSProperties}): ReactElement {
    return (
        <Typography style={{
            ...style,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            background: 'linear-gradient(90deg, #D639C0 2.87%, #F0B4E7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        }}
        >
            {text}
        </Typography>
    )
}

function SectionSubHeading( {text, style}: {text : string, style? : React.CSSProperties}): ReactElement {
    return (
        <Typography style={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'inherit',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            ...style,
        }}
        align='center'
        >
            {text}
        </Typography>
    )
}

function SubHeading( {text, style}: {text : string, style? : React.CSSProperties}): ReactElement {
    return (
        <Typography style={{

            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            textShadow: '-1px 8px11px #D639BF',
            ...style,
        }}
        align='center'
        >
            {text}
        </Typography>
    )
}

interface SectionProps {
    sectionBreak?: boolean
    children: React.ReactNode
    heading?: ReactElement
    subHeading?: ReactElement
    id?: string
  }

function Section({ sectionBreak=true, children, heading, subHeading, id}: SectionProps): ReactElement {

    const navigate = useNavigate()
    const theme = useTheme()
    const isMdDevice = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.md - 1))
    const isSmDevice = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.sm - 1))

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            position="relative"
            
        >
                <HeadingContainer
                    id={id}
                >
                    {heading}
                </HeadingContainer>
                <SubHeadingContainer>
                    {subHeading}
                </SubHeadingContainer>
                <SectionContainer>
                    {children}
                </SectionContainer>
                { sectionBreak ? (
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        position="relative"
                        padding={isMdDevice ? '50px 0px' : '150px 0px' }
                    >
                        
                        <img
                            src={VultureLightLogo}
                            alt="Vulture logo"
                            width={!isMdDevice ? '50px' : '30px' }
                        />
                    </Box>
                ) : (
                    <></>
                )}
            </Box> 
        )
    }

    function HomePageContainer(): ReactElement{
        const theme = useTheme()
        const navigate = useNavigate()
        const isMdDevice = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.md - 1))
        const isSmDevice = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.sm - 1))

        const { pathname, hash, key } = useLocation();

        useEffect(() => {
          // if not a hash link, scroll to top
          if (hash === '') {
            window.scrollTo(0, 0);
          }
          // else scroll to id
          else {
            setTimeout(() => {
              const id = hash.replace('#', '');
              const element = document.getElementById(id);
              if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
               });
              }
            }, 0);
          }
        }, [pathname, hash, key]);
        
        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                position="relative"
                padding={!isMdDevice ? "50px 0px" : "50px 0px"}
            >   
                <Container>
                <Section
                    heading={
                        <>
                            <SectionHeading text = 'One stop platform for' />
                            <SectionHeadingHighlighted text = 'stableswaps' />
                        </>
                    }
                    subHeading={
                        <SectionSubHeading text= 'Single sided AMM designed to efficiently exchange stable cryptocurrencies.' />
                    }
                >  
                    <SectionContainer>
                    <SubHeadingContainer
                        fontSize= {!isMdDevice ? '25px' : '15px'}
                    >
                        <SubHeading
                        text = 'Low Slippage. Single-token provision. Gamification.'
                        />
                    </SubHeadingContainer>

                    <SectionItem>
                        <SubHeadingContainer
                            fontSize= {!isMdDevice ? '25px' : '15px'}
                            margin= '0px 15px'
                            width='unset'
                            padding='unset'
                        >
                            <SectionSubHeading 
                                text = 'Built For:'
                            />
                        </SubHeadingContainer> 

                        <img src={MoonbeamLogo} width={!isMdDevice ? '160' : (!isSmDevice ? '120' : '100')} />
                        <img src={MoonriverLogo} width={!isMdDevice ? '160' : (!isSmDevice ? '120' : '100')} />
                    </SectionItem>
                    <SectionItem
                        padding={!isMdDevice ? "0px 0px 120px 0px" : "0px 0px 60px 0px" }
                    >
                        <Box

                            style={{
                                position: "relative",
                                width: "fit-content",
                                margin: "0px 10px",
                                whiteSpace: 'nowrap',
                                pointerEvents: 'none'
                            }}

                        >
                            <img 
                                src={ComingSoonBannerInverted} 
                                height={!isMdDevice ? '44px' : (!isSmDevice ? '36px' : '28px')}
                                style={{
                                    zIndex: 10,
                                    position: 'absolute',
                                    left: 2,
                                }}
                            />
                            <AppButton 
                                customVariant="primary-no-grad" 
                                fullWidth 
                                sx={{
                                    maxHeight: (!isMdDevice ? '50px' : (!isSmDevice ? '40px' : '30px')),
                                    fontSize: (!isSmDevice ? '1rem' : '0.8rem'),
                                    padding: "15px 15px",
                                    borderRadius: '30px',
                                    maxWidth: 'fit-content',
                                }}
                                >
                                Get Started
                            </AppButton>
                        </Box>

                        <AppButton
                            fullWidth
                            customVariant="neutral"
                            sx={{
                                maxHeight: (!isMdDevice ? '50px' : (!isSmDevice ? '40px' : '30px')),
                                fontSize: (!isSmDevice ? '1rem' : '0.8rem'),
                                margin: "0px 10px",
                                padding: "15px 15px",
                                borderRadius: '30px',
                                maxWidth: 'fit-content',
                                whiteSpace: 'nowrap'
                            }}
                            onClick={() => (navigate('/#explore-protocol'))}
                        >
                            Explore Protocol
                        </AppButton>
                    </SectionItem>
                    <Box
                        maxWidth={450}
                    >
                        <img src={HandGraphic} style={{maxWidth: '100%'}}/>
                    </Box>
                    </SectionContainer>
                </Section>
                <Section
                    heading={
                        <>
                            <SectionHeading text = 'DeFi on Moonbeam' />
                            <Box display="flex" flexDirection="row">
                                <SectionHeading text = 'without' style={{margin:'0px 8px'}}/>
                                <SectionHeadingHighlighted text = ' Vulture' style={{margin:'0px 8px'}}/>
                            </Box>
                        </>
                    }
                >
                    <SectionContainer>
                        <SectionItem
                            style = {{ flexDirection: (isMdDevice ? 'column' : 'row' )}}
                            padding="0px"
                        >
                            <VerticalCard>
                                <VerticalCardItem>
                                    <img src={LackofGamificationGraphic} height={isMdDevice ? '70px' : '90px'} />
                                </VerticalCardItem>
                                <VerticalCardHeading>
                                    <SubHeading text = "Lack of Gamification" />
                                </VerticalCardHeading>
                                <VerticalCardItem>
                                    <SectionSubHeading text = "Other DEXs rely on token emissions and fail to implement gamified techniques for retaining and engaging user" />
                                </VerticalCardItem>
                            </VerticalCard>
                            <VerticalCard>
                                <VerticalCardItem>
                                    <img src={MissingPrimitiveGraphic} height={isMdDevice ? '70px' : '90px'} />
                                </VerticalCardItem>
                                <VerticalCardHeading>
                                    <SubHeading text = "Missing primitive on Moonbeam" />
                                </VerticalCardHeading>
                                <VerticalCardItem>
                                    <SectionSubHeading text = "No dominant native stableswap DEX yet" />
                                </VerticalCardItem>
                            </VerticalCard>
                            <VerticalCard>
                                <VerticalCardItem>
                                    <img src={FragmentedLiquidityGraphic} height={isMdDevice ? '70px' : '90px'} />
                                </VerticalCardItem>
                                <VerticalCardHeading>
                                    <SubHeading text = "Fragmented Liquidity" />
                                </VerticalCardHeading>
                                <VerticalCardItem>
                                    <SectionSubHeading text = "Multiple bridges cause fragmented liquidity in the ecosystem" />
                                </VerticalCardItem>
                            </VerticalCard>
                        </SectionItem>
                    </SectionContainer>
                </Section>
                <Section
                    heading={
                        <>
                            { isMdDevice ? (
                                <>
                                    
                                    <Box display="flex" flexDirection="row">
                                        <SectionHeading text = 'How is' style={{margin:'0px 8px'}}/>
                                        <SectionHeadingHighlighted text = ' Vulture'/>  
                                    </Box>
                                    <SectionHeading text = 'different ? '/>
                                </>
                                ) : (
                                <Box display="flex" flexDirection="row">
                                    <SectionHeading text = 'How is' style={{margin:'0px 8px'}}/>
                                    <SectionHeadingHighlighted text = ' Vulture' style={{margin:'0px 8px'}}/>
                                    <SectionHeading text = 'different ? ' style={{margin:'0px 8px'}}/>
                                </Box>
                                )
                            }
                        </>
                    }
                    subHeading={
                        <SectionSubHeading text= 'We bring together the best of DeFi-innovations and blend them into a smiple DeFi primitive.' />
                    }
                    id='explore-protocol'
                >
                    <SectionItem
                        style={{ flexWrap : 'wrap' }}
                        padding="0px"
                    >
                        <HorizontalCard hasBorder={false} minWidth='280px'>
                            <HorizontalCardItem>
                                <img src={SingleSidedStakingGraphic} />
                            </HorizontalCardItem>
                            <HorizontalCardItem>
                                <SectionSubHeading style={{fontSize : !isSmDevice ? '15px' : '13px'}} text="Single sided staking for better liquidity provider experience" />
                            </HorizontalCardItem>
                        </HorizontalCard>
                        <HorizontalCard hasBorder={false} minWidth='280px'>
                            <HorizontalCardItem>
                                <img src={IncentiveMechanismsGraphic} />
                            </HorizontalCardItem>
                            <HorizontalCardItem>
                                <SectionSubHeading style={{fontSize : !isSmDevice ? '15px' : '13px'}} text="Incentive Mechanisms for auto-balancing of token pools" />
                            </HorizontalCardItem>
                        </HorizontalCard>
                        <HorizontalCard hasBorder={false} minWidth='280px'>
                                <HorizontalCardItem>
                                    <img src={LowestSlippageGraphic} />
                                </HorizontalCardItem>
                                <HorizontalCardItem>
                                    <SectionSubHeading style={{fontSize : !isSmDevice ? '15px' : '13px'}} text="Lowest Slippage on large trades" />
                                </HorizontalCardItem>
                            </HorizontalCard>
                        <HorizontalCard hasBorder={false} minWidth='280px'>
                            <HorizontalCardItem>
                                <img src={TokenomicsRewardGraphic} />
                            </HorizontalCardItem>
                            <HorizontalCardItem>
                                <SectionSubHeading style={{fontSize : !isSmDevice ? '15px' : '13px'}} text="Tokenomics to reward the highest fee earning pools and active governance participants." />
                            </HorizontalCardItem>
                        </HorizontalCard>
                        <HorizontalCard hasBorder={false} minWidth='280px'>
                            <HorizontalCardItem>
                                <img src={NFTRewardGraphic} />
                            </HorizontalCardItem>
                            <HorizontalCardItem>
                                <SectionSubHeading style={{fontSize : !isSmDevice ? '15px' : '13px'}} text="NFT reward mechanism to boost transaction volume and gamify participation" />
                            </HorizontalCardItem>
                        </HorizontalCard>
                    </SectionItem>
                </Section>
                <Section
                    heading={
                        <>
                            <Box display="flex" flexDirection="row">
                                <SectionHeading text = 'Our' style={{margin:'0px 8px'}}/>
                                <SectionHeadingHighlighted text = 'Roadmap' style={{margin:'0px 8px'}}/>
                            </Box>

                        </>
                    }
                    subHeading={
                        <SectionSubHeading text= 'The journey so far and the road ahead. NFTs will lead our gamification efforts with more features that we intend to build into this novel protocol.' />
                    }
                    id="roadmap"
                >
                    <img src={RoadmapGraphic} width={!isMdDevice ? '800' : (!isSmDevice ? '450' : '300' ) }/>
                </Section>
                {/* <Section
                    heading={
                        <>
                            <Box display="flex" flexDirection="row">
                                <SectionHeading text = 'Our' style={{margin:'0px 8px'}}/>
                                <SectionHeadingHighlighted text = 'Investors' style={{margin:'0px 8px'}}/>
                            </Box>

                        </>
                    }
                    subHeading={
                        <SectionSubHeading text= 'People we trust to support Vulture.' />
                    }
                >
                    <Box display="flex" flexDirection="row">
                        <HorizontalCard style={{padding: '50px'}}>
                            <img src={CMSLogo} width={160}/>
                        </HorizontalCard>
                        <HorizontalCard style={{padding: '50px'}}>
                            <img src={CMSLogo} />
                        </HorizontalCard>
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <HorizontalCard style={{padding: '50px'}}>
                            <img src={CMSLogo} />
                        </HorizontalCard>
                        <HorizontalCard style={{padding: '50px'}}>
                            <img src={CMSLogo} />
                        </HorizontalCard>
                        <HorizontalCard style={{padding: '50px'}}>
                            <img src={CMSLogo} />
                        </HorizontalCard>
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <HorizontalCard style={{padding: '50px'}}>
                            <img src={CMSLogo} />
                        </HorizontalCard>
                        <HorizontalCard style={{padding: '50px'}}>
                            <img src={CMSLogo} />
                        </HorizontalCard>
                    </Box>

                </Section> */}
                {/* <Section
                    heading={
                        <>
                            <Box display="flex" flexDirection="row">
                                <SectionHeading text = 'What the' style={{margin:'0px 8px'}}/>
                                <SectionHeadingHighlighted text = 'Community' style={{margin:'0px 8px'}}/>
                                <SectionHeading text = 'says about us?' style={{margin:'0px 8px'}}/>
                            </Box>
                        </>
                    }
                >
                    <Box
                        display="flex" flexDirection="row" flex='1' width='850px'
                    >
                        <VerticalCard>
                            <VerticalCardItem>
                                <SubHeading text = "Derek" />
                            </VerticalCardItem>
                            <SectionSubHeading text = "CEO, Moonbeam" />
                            <VerticalCardItem>
                                <img src={StarRatingGraphic} />
                            </VerticalCardItem>
                            <VerticalCardItem>
                                <SectionSubHeading text = "Other DEXs rely on token emissions and fail to implement gamified techniques for retaining and engaging user" />
                            </VerticalCardItem>
                        </VerticalCard>
                        <VerticalCard>
                            <VerticalCardItem>
                                <SubHeading text = "Derek" />
                            </VerticalCardItem>
                            <SectionSubHeading text = "CEO, Moonbeam" />
                            <VerticalCardItem>
                                <img src={StarRatingGraphic} />
                            </VerticalCardItem>
                            <VerticalCardItem>
                                <SectionSubHeading text = "Other DEXs rely on token emissions and fail to implement gamified techniques for retaining and engaging user" />
                            </VerticalCardItem>
                        </VerticalCard>
                        <VerticalCard>
                            <VerticalCardItem>
                                <SubHeading text = "Derek" />
                            </VerticalCardItem>
                            <SectionSubHeading text = "CEO, Moonbeam" />
                            <VerticalCardItem>
                                <img src={StarRatingGraphic} />
                            </VerticalCardItem>
                            <VerticalCardItem>
                                <SectionSubHeading text = "Other DEXs rely on token emissions and fail to implement gamified techniques for retaining and engaging user" />
                            </VerticalCardItem>
                        </VerticalCard>

                    </Box>
                
                    
                </Section> */}
                <Section
                    heading={
                        <>
                            <Box display="flex" flexDirection="row">
                                <SectionHeading text = 'Join Our' style={{margin:'0px 8px'}}/>
                                <SectionHeadingHighlighted text = 'Community' style={{margin:'0px 8px'}}/>
                            </Box>
                        </>
                    }
                    sectionBreak={false}
                    id="community"
                >
                    <Box display="flex" flexDirection="row" alignItems={"center"} padding="0px 0px 50px 0px">
                        <IconContainer>
                            <a target="_blank" rel="noopener noreferrer" href="https://t.me/vulturefi">
                                <img 
                                    src={TelegramLogo}
                                    height={!isMdDevice ? '60px' : '30px'}
                                />
                            </a>
                        </IconContainer>
                        <IconContainer>
                            <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/G3dDJDcStW">
                                <img 
                                    src={DiscordLogo}
                                    height={!isMdDevice ? '60px' : '30px'}
                                />
                            </a>
                        </IconContainer>
                        <IconContainer>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Vulturefi">
                                <img 
                                    src={TwitterLogo}
                                    height={!isMdDevice ? '60px' : '30px'}
                                />
                            </a>
                        </IconContainer>
                        <IconContainer>
                            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@vulturefi">
                                <img 
                                    src={MediumLogo}
                                    height={!isMdDevice ? '60px' : '30px'}
                                />
                            </a>
                        </IconContainer>
                    </Box>

                </Section>
            </Container>
        </Box>
    )
}


export default HomePageContainer