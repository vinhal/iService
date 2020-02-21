const validate = values => {
    const errors = {}

    const {
        name,
        email,
        password,
        birthdate,
    } = values

    if (!name) {
        errors.name = 'CAMPO OBRIGATÓRIO'
    }
    if (!email) {
        errors.email = 'CAMPO OBRIGATÓRIO'
    }
    if (!password) {
        errors.password = 'CAMPO OBRIGATÓRIO'
    }
    if (!birthdate) {
        errors.birthdate = 'CAMPO OBRIGATÓRIO'
    }

    const validated = !Object.keys(errors).length

    return { errors, validated }
}

export { validate }