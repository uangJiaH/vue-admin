import { createStore } from 'vuex'
import getters from './modules/getters'
import user from './modules/user'
import tags from './modules/tags'

export default createStore({
  getters,
  modules: {
    user,
    tags
  }
})
