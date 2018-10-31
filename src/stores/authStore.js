import { flow } from 'mobx'
import { authApi } from 'service/api'
import Handler from 'utils/handler'

class AuthStore {
  login = flow(function* login(opts) {
    try {
      const { code } = yield authApi.login(opts)

      yield Handler.requestSuccess(code)

      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Handler.requestError(error)
    }
  })
}

export default new AuthStore()
