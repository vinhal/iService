import styled from 'styled-components'
import TextFieldMUI from '@material-ui/core/TextField'
import { marginHandler } from 'commons/styles/margin'

const TextField = styled(TextFieldMUI)`
    && {
        ${marginHandler}
    }
`

export { TextField }