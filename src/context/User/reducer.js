import createReducer from 'commons/utils/createReducer'
import { parseUserToken, storeToken } from 'commons/utils/auth'

const initialState = {
    user: null,
    authenticated: false,
}

export const AUTH = 'AUTH'

const reducers = {
    [AUTH]: (state, token) => {
        const user = parseUserToken(token)
        
        storeToken(token)

        console.log('USER', user)

        return {
            ...state,
            user,
            authenticated: true,
        }
    },
}


export { initialState }

export default createReducer(reducers)
