import HomePageContainer from 'containers/HomePageContainer/HomePageContainer'
import React, { useEffect } from 'react'
import ReactGA from 'react-ga'

function HomePage(): React.ReactElement {
  useEffect(() => {
    ReactGA.pageview('/home')
  }, [])
  return (
    <>
        <HomePageContainer />
    </>
  )
}

export default HomePage