import jwtDecode from 'jwt-decode'

const TOKEN = 'TOKEN'


const storeToken = token => localStorage.setItem(TOKEN, token)

const getToken = () => localStorage.getItem(TOKEN)

const parseUserToken = token => jwtDecode(token)

export { getToken, storeToken, parseUserToken }