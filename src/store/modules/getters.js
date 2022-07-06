const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) === '{}'
  },
  tagArray: state => state.tags.tagArr
}
export default getters
