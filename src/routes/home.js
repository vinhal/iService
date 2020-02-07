import { lazy } from 'react'

const HomeScreen = lazy(() => import('containers/Home'))

const Home = [
  {
    path: '/',
    component: HomeScreen,
  },
]

export default Home
