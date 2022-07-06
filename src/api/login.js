import request from '@/utils/request'

export const getCodeImg = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}

export const login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}

export const getUserInfo = () => {
  return request({
    url: '/sys/userInfo',
    method: 'GET'
  })
}
