import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import UserContext from 'context/User/context'

const Login = () => {
    const { authenticated, user } = useContext(UserContext)

    return (
        <Typography variant="h4">
            {authenticated ? `Olá ${user.name}!` : 'Olá desconhecido 0.0 !!'}
        </Typography>
    )
}

export default Login