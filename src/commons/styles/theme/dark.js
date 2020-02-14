import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    type: 'dark',
    palette: {
        primary: {
            main: '#3C91E6',
        },
        secondary: {
            main: '#222',
        },
        background: {
            default: '#ddd',
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

console.log('DARK THEME', { theme })

export default theme