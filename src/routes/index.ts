import { RouteConfig } from 'react-router-config'
import Root from '@pages'
import Login from '@pages/Login'
import Register from '@pages/Register'
import Main from '@pages/Main'
import main from './main'
const routes: RouteConfig[] = [
  {
    path: '/',
    component: Root,
    routes: [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/register',
        component: Register
      },
      {
        path: '/',
        component: Main,
        routes: main
      }
    ]
  }
]

export default routes
