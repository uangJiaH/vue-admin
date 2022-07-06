import { getItem, removeAllItem, setItem } from '@/utils/storage'
import { getUserInfo } from '@/api/login'
import { getNav } from '@/api/nav'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || [],
    userInfo: {}

  },
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem('token', state.token)
    },
    setUserInfo (state, info) {
      state.userInfo = info
    },
    logout (state) {
      state.token = ''
      removeAllItem()
    },
    setMenu (state, payload) {
      state.menus = payload
    }
  },
  actions: {
    // 获取token
    async getUserInfo ({ commit }, payload) {
      const res = await getUserInfo()
      const navs = await getNav()
      console.log(navs)
      commit('setUserInfo', res)
      commit('setMenu', navs)
      return navs
    }

  }

}
