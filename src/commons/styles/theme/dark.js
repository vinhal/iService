import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    type: 'dark',
    palette: {
        primary: {
            main: '#3C91E6',
            dark: '#73009A',
        },
        secondary: {
            main: '#222',
            light: '#00FFE6',
        },
    },
    typography: {
        letterSpacing: 1,
        color: {
            primary: '#606060',
            secondary: '#808285',
        },
        fontFamily: "'Red Hat Display', 'Verdana', sans-serif",
    },
})

console.log('THEME', { theme })

export default theme