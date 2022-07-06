export default {
  namespaced: true,
  state: () => ({
    tagArr: []
  }),
  mutations: {
    addTag (state, tag) {
      const data = state.tagArr.find(item => item.path === tag.path)
      if (!data) {
        state.tagArr.push(tag)
      }
    },
    delTag (state, index) {
      state.tagArr.splice(index, 1)
    }
  }
}
