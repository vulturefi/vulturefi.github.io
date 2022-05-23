import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import AllRoutes from 'AllRoutes';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { ThemeProvider } from 'styled-components'
import themes from './config/themes'

function App(): React.ReactElement {
  /** @todo uncomment when we have light theme */
  // const [darkMode, setDarkMode] = useState(
  //   useMediaQuery('(prefers-color-scheme: dark)'),
  // )

  /** @todo add back toggleDarkMode when needed */
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode)
  // }

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALTICS_ID as string, {
      testMode: process.env.REACT_APP_ENVIRONMENT !== 'production',
    })
  }, [])
  return (
    <>
        <MuiThemeProvider theme={themes.darkTheme}>
          <CssBaseline />
          {/* use ThemeProvider from styled-components to access theme as style components from Material-ui are not working properly  */}
          <ThemeProvider theme={themes.darkTheme}>
            <AllRoutes />
          </ThemeProvider>
        </MuiThemeProvider>
    </>
  )
}

export default App
