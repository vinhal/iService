import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    type: 'light',
    palette: {
        primary: {
            main: '#2D3047',
        },
        secondary: {
            main: '#419D78',
        },
        background: {
            default: '#fafafa',
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

console.log('LIGHT THEME', { theme })

export default theme