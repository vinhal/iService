import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { LoadingStyled } from './style'

const Loading = ({ full }) => (
  <LoadingStyled full={full}>
    <CircularProgress />
  </LoadingStyled>
)

Loading.propTypes = {
  full: PropTypes.bool,
}

export default Loading
