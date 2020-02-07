import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from 'commons/styles/theme/ThemeProvider'
import Main from 'containers/Login'
import lightTheme from 'commons/styles/theme/light'
import darkTheme from 'commons/styles/theme/dark'

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
        <Main changeTheme={changeTheme} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
