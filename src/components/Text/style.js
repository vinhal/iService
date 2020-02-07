import styled, { css } from 'styled-components'
import TypographyMUI from '@material-ui/core/Typography'
import { marginHandler } from 'commons/styles/margin'

const Typography = styled(TypographyMUI)`
  ${({
    theme: { typography },
    transform,
    weight,
    size,
  }) => css`
    text-transform: ${transform};

    font-weight: ${weight};
    font-size: ${size && `${size}rem`};

    letter-spacing: ${typography.letterSpacing}px;
    font-family: ${typography.fontFamily};
  `}

  ${marginHandler}

`

export { Typography }
