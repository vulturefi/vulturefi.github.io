import React, { ReactElement } from 'react'
import {
  Route,
  Routes,
} from 'react-router-dom'
import routes from './config/routes'
import HomeLayout from './layouts/HomeLayout/HomeLayout'


function HomeRoutes(): ReactElement {

  return (
    <HomeLayout>
        <>
          <Routes>
            <Route
            path={routes.HOME.path}
            element={<routes.HOME.Component />}
            />
          </Routes>
        </>
    </HomeLayout>
  )
}

export default HomeRoutes
