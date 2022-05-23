
import FooterContainer from 'containers/FooterContainer/FooterContainer'
import React, { ReactElement } from 'react'
import NarbarContainer from '../../containers/NavbarContainer/NarbarContainer'
import { ChildrenContainer, Container } from './HomeLayout.elements'
interface Props {
  children: React.ReactNode
}

function HomeLayout({ children }: Props): ReactElement {
  return (
    <Container>
      <NarbarContainer />
      <ChildrenContainer>{children}</ChildrenContainer>
      <FooterContainer />
    </Container>
  )
}

export default HomeLayout
