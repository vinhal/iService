import React, { useState, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ThemeProvider from 'commons/styles/theme/ThemeProvider'
import lightTheme from 'commons/styles/theme/light'
import darkTheme from 'commons/styles/theme/dark'
import Loading from 'components/Loading'
import routes from 'routes'

const App = () => {
  const [theme, setTheme] = useState(lightTheme)

  const changeTheme = () => setTheme(init =>
    init.type === 'light'
      ? darkTheme
      : lightTheme
  )

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ component: Component, ...route }) => (
            <Route
              exact
              {...route}
              render={props => (
                <Suspense fallback={<Loading />}>
                  <Component changeTheme={changeTheme} {...props} />
                </Suspense>
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
