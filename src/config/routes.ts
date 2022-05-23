import React from 'react'

import HomePage from '../pages/HomePage/HomePage'

enum Routes {
  HOME = 'HOME'
}

type RouteType = {
  [key in Routes]: {
    path: string
    name: string
    basePath?: string
    Component: React.FC
  }
}


const routes: RouteType = {
  [Routes.HOME]: {
    path: '/',
    name: 'Home',
    Component: HomePage,
  },
}

export default routes
