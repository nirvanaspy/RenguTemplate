import request from '@/utils/request'

// export function login(username, password) {
/* return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })*/
export function login(data) {
  return request({
    url: '/oauth/token',
    method: 'post',
    auth: {
      username: 'OAUTH_CLIENT_ID',
      password: 'OAUTH_CLIENT_SECRET'
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function register(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}
