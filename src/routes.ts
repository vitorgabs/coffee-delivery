import { createBrowserRouter } from 'react-router'

import { App } from './app'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/checkout',
        Component: Checkout,
      },
    ],
  },
])
