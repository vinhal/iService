import React from 'react'
import PropTypes from 'prop-types'
import { BaseButton } from './style'

const Button = ({
  type,
  label,
  margin,
  position,
  ...otherProps
}) => (
  <BaseButton
    type={type}
    spacing={margin}
    position={position}
    {...otherProps}
  >
    {label}
  </BaseButton>
)

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  position: PropTypes.string,
  margin: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number,
    left: PropTypes.number,
  }),
}

Button.defaultProps = {
  type: 'button',
  margin: {},
}

export default Button
