import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from './style'

const Input = React.forwardRef((props, ref) => {
    const { margin, error, ...otherProps } = props

    return (
        <TextField
            error={error}
            inputRef={ref}
            spacing={margin}
            helperText={error}
            variant="outlined"
            {...otherProps}
        />
    )
})

Input.propTypes = {
    error: PropTypes.string,
    margin: PropTypes.object,
}

export default Input