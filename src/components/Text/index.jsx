import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from './style'

const Text = ({
  raw,
  size,
  weight,
  margin,
  children,
  uppercase,
  ...props
}) => {
  const transform = uppercase ? 'uppercase' : ''

  return (
    <Typography
      size={size}
      weight={weight}
      spacing={margin}
      transform={transform}
      {...props}
    >
      {children}
    </Typography>
  )
}

Text.defaultProps = {
  raw: false,
  margin: {},
  uppercase: false,
  align: 'inherit',
}

Text.propTypes = {
  raw: PropTypes.bool,
  size: PropTypes.number,
  weight: PropTypes.any,
  noWrap: PropTypes.bool,
  children: PropTypes.any,
  paragraph: PropTypes.bool,
  uppercase: PropTypes.bool,
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  margin: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
  }),
}

export default Text
