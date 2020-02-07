import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import GlobalStyle from './global'

const ThemeProvider = ({ children, theme }) => (
  <MuiThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      <SCThemeProvider theme={theme}>
        <Fragment>
          <CssBaseline />
          <GlobalStyle />
          {children}
        </Fragment>
      </SCThemeProvider>
    </StylesProvider>
  </MuiThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any,
}

export default ThemeProvider
