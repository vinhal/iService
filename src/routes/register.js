import { lazy } from 'react'

const RegisterScreen = lazy(() => import('containers/Register'))

const Register = [
  {
    path: '/register',
    component: RegisterScreen,
  },
]

export default Register
