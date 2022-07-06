import axios from 'axios'
import store from '@/store/index'

const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVICE_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = store.getters.token
  console.log(token, 'token')
  if (token) {
    config.headers.Authorization = token
  }

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response)
  if (response.headers.authorization) {
    store.commit('user/setToken', response.headers.authorization)
  }
  return response.data.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
