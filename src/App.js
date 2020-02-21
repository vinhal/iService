import React, { useState, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ThemeProvider from 'commons/styles/theme/ThemeProvider'
import lightTheme from 'commons/styles/theme/light'
import darkTheme from 'commons/styles/theme/dark'
import Loading from 'components/Loading'
import routes from 'routes'
import UserProvider from 'context/User/Provider'

const App = () => {
  const [theme, setTheme] = useState(lightTheme)

  const changeTheme = () => setTheme(init =>
    init.type === 'light' ? darkTheme : lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            {routes.map(({ path, component: Component, ...route }) => (
              <Route
                exact
                key={path}
                path={path}
                {...route}
                render={props => (
                  <Suspense fallback={<Loading full />}>
                    <Component changeTheme={changeTheme} {...props} />
                  </Suspense>
                )}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
