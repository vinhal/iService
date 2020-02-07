import styled from 'styled-components'
import MuiButton from '@material-ui/core/Button'
import { marginHandler } from 'commons/styles/margin'

const BaseButton = styled(MuiButton)`
  min-width: 165px;
  
  && {
    ${marginHandler}
  }

  float: ${({ position }) => position};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing}px;
`
export { BaseButton }
