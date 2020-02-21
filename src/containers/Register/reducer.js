import createReducer from 'commons/utils/createReducer'

export const initialState = {
    values: {
        name: '',
        email: '',
        password: '',
        birthdate: '',
        darkTheme: false,
    },
    errors: {},
}

export const SET_NAME = 'SET_NAME'
export const SET_EMAIL = 'SET_EMAIL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_BIRTHDATE = 'SET_BIRTHDATE'
export const SET_DARK_THEME = 'SET_DARK_THEME'

export const SET_ERRORS = 'SET_ERRORS'

const changeHandler = item => (state, value) => ({
    ...state,
    values: {
        ...state.values,
        [item]: value,
    },
    errors: {
        ...state.errors,
        [item]: '',
    },
})

const reducers = {
    [SET_NAME]: changeHandler('name'),

    [SET_EMAIL]: changeHandler('email'),

    [SET_PASSWORD]: changeHandler('password'),

    [SET_BIRTHDATE]: changeHandler('birthdate'),

    [SET_DARK_THEME]: changeHandler('darkTheme'),
    
    [SET_ERRORS]: (state, errors) => ({
        ...state,
        errors: {
            ...state.errors,
            ...errors,
        },
    }),
}

export default createReducer(reducers)
