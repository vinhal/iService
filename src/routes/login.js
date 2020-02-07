import { lazy } from 'react'

const LoginScreen = lazy(() => import('containers/Login'))

const Login = [
  {
    path: '/login',
    component: LoginScreen,
    protected: false,
  },
]

export default Login
