import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import userApi from 'resources/user'
import Input from 'components/Input'
import Button from 'components/Button'
import Text from 'components/Text'
import { RegisterForm } from './style'
import { validate } from './util'
import reducer, {
    initialState,
    SET_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_BIRTHDATE,
    SET_DARK_THEME,
    SET_ERRORS,
} from './reducer'

const Register = ({ history, changeTheme }) => {
    const [state, dispath] = useReducer(reducer, initialState)

    const { values, errors } = state

    const handleChange = type => ev => dispath({
        type, value: ev.target.value,
    })

    const handleThemeChange = (_, checked) => {
        changeTheme()
        dispath({
            type: SET_DARK_THEME,
            value: checked,
        })
    }

    const onSubmit = ev => {
        ev.preventDefault()

        const { errors, validated } = validate(values)

        if (!validated) {
            return dispath({
                type: SET_ERRORS,
                value: errors,
            })
        }

        return userApi.save(values).then(() => {
            history.push('/login')
        })
    }

    return (
        <RegisterForm onSubmit={onSubmit}>
            <Input
                label="NOME"
                margin={{ top: 4 }}
                value={values.name}
                error={errors.name}
                onChange={handleChange(SET_NAME)}
            />
            <Input
                label="EMAIL"
                value={values.email}
                error={errors.email}
                onChange={handleChange(SET_EMAIL)}
            />
            <Input
                label="DATA DE NASCIMENTO"
                value={values.birthdate}
                error={errors.birthdate}
                onChange={handleChange(SET_BIRTHDATE)}
            />
            <Input
                label="SENHA"
                type="password"
                value={values.password}
                error={errors.password}
                onChange={handleChange(SET_PASSWORD)}
            />
            <Text size={1} color="textSecondary" >
                TEMA DARK
            </Text>
            <Switch
                color="secondary"
                onChange={handleThemeChange}
            />
            <Button
                type="submit"
                label="ENTRAR"
                color="secondary"
                variant="contained"
                margin={{ top: 4 }}
            />
        </RegisterForm>
    )
}

Register.propTypes = {
    history: PropTypes.object,
    changeTheme: PropTypes.func,
}

export default Register