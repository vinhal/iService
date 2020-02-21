import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TextField } from './style'

const Input = React.forwardRef((props, ref) => {
    const { margin, error, ...otherProps } = props

    return (
        <TextField
            inputRef={ref}
            spacing={margin}
            helperText={error}
            error={Boolean(error)}
            {...otherProps}
        />
    )
})

Input.displayName = 'Input'

Input.propTypes = {
    error: PropTypes.string,
    margin: PropTypes.object,
}

export default memo(Input)