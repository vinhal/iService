import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
    body,
    #root {
        width: 100%;
        height: 100vh;

        background: ${({ theme }) => theme.palette.background.default};
    }
`

export default globalStyle