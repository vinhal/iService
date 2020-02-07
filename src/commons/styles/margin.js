import { css } from 'styled-components'

const marginHandler = css`
  ${({ spacing: {
    top,
    left,
    right,
    bottom,
  } = {} }) => `
    margin-top: ${8 * top}px;
    margin-left: ${8 * left}px;
    margin-right: ${8 * right}px;
    margin-bottom: ${8 * bottom}px;
  `}
`

export { marginHandler }
