const validate = (login, password) => {
    const errors = {}

    if (!login) {
        errors.login = 'CAMPO OBRIGATÓRIO'
    }
    if (!password) {
        errors.password = 'CAMPO OBRIGATÓRIO'
    }

    const validated = !Object.keys(errors).length

    return { errors, validated }
}

export { validate }