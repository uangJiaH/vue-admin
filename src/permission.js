import router from '@/router'
import store from '@/store'

const userInfo = store.getters.hasuserInfo
console.log(userInfo)
router.beforeEach(async (to, from, next) => {
  console.log(to.path, 'path')
  if (to.path !== '/login' && to.path !== '/') {
    if (to.meta.title && to.meta.icon) {
      const obj = {
        path: to.path,
        title: to.meta.title
      }
      console.log(obj)
      store.commit('tags/addTag', obj)
    }
  }
  store.dispatch('user/getUserInfo')
  next()
})
