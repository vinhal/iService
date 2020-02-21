import React, { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { getToken } from 'commons/utils/auth'
import reducer, { initialState, AUTH } from './reducer'
import Context from './context'

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { user, authenticated } = state

    const authUser = value => dispatch({ type: AUTH, value })

    useEffect(() => {
        if (!authenticated) {
            authUser(getToken())
        }
    }, [authenticated])

    return (
        <Context.Provider value={{ user, authenticated, authUser }}>
            {children}
        </Context.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node,
}

export default UserProvider
