import Api from './api/api'

const path = '/auth'

const authApi = {

  login(data) {
    return Api.post(`${path}/login`, { data })
  },

}

export default authApi
