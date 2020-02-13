import styled from 'styled-components'
import TextFieldMUI from '@material-ui/core/TextField'
import { marginHandler } from 'commons/styles/margin'

const TextField = styled(TextFieldMUI).attrs({
    variant: 'outlined',
    margin: 'none',
})`
    ${marginHandler}

    margin-bottom: ${({ theme, helperText, spacing: { bottom = 0 } = {} }) =>
        theme.spacing(helperText ? bottom : bottom + 2.6)}px;
        
`

export { TextField }