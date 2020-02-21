import Api from './api/api'

const path = '/user'

const userApi = {

  save(data) {
    return Api.post(path, { data })
  },

}

export default userApi
