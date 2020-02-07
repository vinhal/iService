import React, { useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import { ReactComponent as Logo } from 'assets/logo.svg'
import Input from 'components/Input'
import Button from 'components/Button'
import { LoginForm } from './style'
import { validate } from './util'

const Login = ({ changeTheme }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({
        login: '',
        password: '',
    })

    const { palette } = useContext(ThemeContext)

    const onEmailChange = ev => {
        setLogin(ev.target.value)
        if (error.login) setError(init => ({ ...init, login: '' }))
    }

    const onPasswordChange = ev => {
        setPassword(ev.target.value)
        if (error.password) setError(init => ({ ...init, password: '' }))
    }

    const onSubmit = ev => {
        ev.preventDefault()

        const { errors, validated } = validate(login, password)

        if (!validated) {
            setError(init => ({ ...init, ...errors }))
            return
        }

    }

    return (
        <LoginForm onSubmit={onSubmit}>
            <Logo
                width="60px"
                fill={palette.secondary.main}
            />
            <Input
                label="EMAIL"
                value={login}
                error={error.login}
                onChange={onEmailChange}
                margin={{ top: 4, bottom: 2 }}
            />
            <Input
                label="SENHA"
                type="password"
                value={password}
                error={error.password}
                onChange={onPasswordChange}
            />
            <Button
                type="submit"
                label="ENTRAR"
                color="secondary"
                variant="contained"
                margin={{ top: 4 }}
            />
            <Switch
                color="secondary"
                onChange={changeTheme}
            />
        </LoginForm>
    )
}

Login.propTypes = {
    changeTheme: PropTypes.func,
}

export default Login