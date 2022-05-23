import React, { ReactElement } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import routes from './config/routes'
import HomeRoutes from 'HomeRoutes'


function AllRoutes(): ReactElement {
  
  return (

      <Router> 
          <Routes>
            <Route
              path={routes.HOME.path}
              element={<HomeRoutes />}
            />
          </Routes>
      </Router>

  )
}

export default AllRoutes
