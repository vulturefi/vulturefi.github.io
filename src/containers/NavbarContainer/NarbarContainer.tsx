import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { Toolbar, useMediaQuery, useTheme, Typography } from '@mui/material'
import { Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import VultureLightLogo from '../../assets/companyLogos/vulture-light.svg'
import ComingSoonBanner from '../../assets/icons/coming-soon-banner.svg'
import DiscordLogo from '../../assets/social/discord.svg'
import TelegramLogo from '../../assets/social/telegram.svg'
import TwitterLogo from '../../assets/social/twitter.svg'
import {
  CompanyLogo,
  CommunityIcon,
  CommunityItem,
  Container,
  NavbarItem,
  Trailing,
  StyledTypography,
  NavBarContainer,
  MenuContainer
} from './NarbarContainer.elements'
import LaunchAppButton from 'containers/LaunchAppButton/LaunchAppButton';
import TwitterIcon from 'assets/lottie-icons/TwitterIcon';


function NavMenu(): ReactElement {
  return (
    <Menu
      style={{ 
        backgroundColor : "#0d1126",
        borderRadius: "0px 0px 5px 5px;",
      }}
      theme='dark'
    >
      <Menu.Item>
          <CommunityItem>
            <Link to="/#roadmap">
              <Typography sx={{color:"white"}} variant="caption">
                Roadmap
              </Typography>
            </Link>
          </CommunityItem>
      </Menu.Item>
      <Menu.Item>
          <CommunityItem>
            <Link to="/#community">
              <Typography sx={{color:"white"}} variant="caption">
                Community
              </Typography>
            </Link>
          </CommunityItem>
      </Menu.Item>
      {/* <Menu.Item>
        <CommunityItem>
            <Typography sx={{color:"white"}} variant="caption">
              Docs
            </Typography>
        </CommunityItem>
      </Menu.Item> */}
    </Menu>
  );
}

function CommunityMenu(): ReactElement {
  return (
    <Menu
      style={{ 
        backgroundColor : "#0d1126",
        borderRadius: "0px 0px 5px 5px;",
      }}
      theme='dark'
    >
      <Menu.Item>
          <CommunityItem>
            <CommunityIcon>
              <img 
                src={DiscordLogo}
                width={20}
              />
            </CommunityIcon>
            <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/G3dDJDcStW">
              <Typography sx={{color:"white"}} variant="caption">
                Discord
              </Typography>
            </a>
          </CommunityItem>
      </Menu.Item>
      <Menu.Item>
          <CommunityItem>
            <CommunityIcon>
              <img 
                src={TelegramLogo}
                width={20}
              />
            </CommunityIcon>
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/vulturefi">
            <Typography sx={{color:"white"}} variant="caption">
                Telegram
              </Typography>
            </a>
          </CommunityItem>
      </Menu.Item>
      <Menu.Item>
        <CommunityItem>
            <CommunityIcon>
              {/* <img 
                src={TwitterLogo}
              /> */}
              <TwitterIcon />
            </CommunityIcon>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Vulturefi">
            <Typography sx={{color:"white"}} variant="caption">
                Twitter
              </Typography>
            </a>
        </CommunityItem>
      </Menu.Item>
    </Menu>
  );
}
function NarbarContainer(): ReactElement {
  const theme = useTheme()
  const isSmallerThanMd = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.md - 1),
  )

  return (
    <NavBarContainer>
      <Container>
        <Toolbar >
          <Link to="/">
            <CompanyLogo>
              {isSmallerThanMd ? (
                <img
                  src={VultureLightLogo}
                  alt="Vulture logo"
                  width="50px"
                />
              ) : (
                <>
                  <img src={VultureLightLogo} 
                    alt="Vulture logo" 
                    width="65px"
                  />
                </>
              )}
            </CompanyLogo>
          </Link>

          { !isSmallerThanMd ? (
            <Trailing display="flex" flexDirection="row" alignItems="center">
              
              <NavbarItem>
                <Link to="/#roadmap">
                  <StyledTypography>
                    Roadmap
                  </StyledTypography>
                </Link>
              </NavbarItem>
              
              <Dropdown 
                overlay={CommunityMenu}
                placement="bottom"
                overlayStyle={{
                  zIndex: 2000,
                }}
              >
                <NavbarItem>
                  <StyledTypography>
                  Community
                  </StyledTypography>
                </NavbarItem>
              </Dropdown>


              <NavbarItem
                $hasBorder={true}
                disabled={true}
              >
                <img 
                  src={ComingSoonBanner} 
                  width="44px" 
                  style={{
                    zIndex: 10
                  }}
                />
                <Typography sx={{ position: 'absolute', left: 25 }}>
                  Docs
                </Typography>
              </NavbarItem>

              <NavbarItem disabled={true}>
                <LaunchAppButton />
              </NavbarItem>
            </Trailing>
          ) : (
            <Trailing display="flex" flexDirection="row" alignItems="right">
              <NavbarItem >
                <LaunchAppButton />
              </NavbarItem>
              <Dropdown 
                overlay={NavMenu}
                placement="bottomRight"
                overlayStyle={{
                  zIndex: 2000,
                }}
              >
              <MenuContainer>
                <MenuOutlined width={40}/>
              </MenuContainer>
            </Dropdown>
            </Trailing>
          )
        }
        </Toolbar>
      </Container>
    </NavBarContainer>
  )
}

export default NarbarContainer
