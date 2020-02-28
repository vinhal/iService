import jwtDecode from 'jwt-decode'

const TOKEN = 'TOKEN'


const storeToken = token => localStorage.setItem(TOKEN, token)

const getToken = () => localStorage.getItem(TOKEN)

const parseUserToken = token => {
    try {
        const decode = jwtDecode(token)
        return decode
    } catch (err) {
        return ''
    }
}

export { getToken, storeToken, parseUserToken }