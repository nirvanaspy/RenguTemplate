/*eslint-disable*/
import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
const jwt = require('jsonwebtoken')

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    userId: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      // const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        // login(username, userInfo.password).then(response => {
        login(userInfo).then(response => {
          // const data = response.data
          // setToken(data.token)
          // commit('SET_TOKEN', data.token)
          const access_token = response.data.access_token
          // const refresh_token = response.data.refresh_token
          commit('SET_TOKEN', access_token)
          setToken(access_token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        /* getInfo(state.token).then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })*/
        if(!state.token) {
          reject('error')
          console.log('has no token')
        }
        console.log(state);
        const data = state.token
        // const refreshToken = state.refreshToken
        const decodeToken = jwt.decode(data)
        console.log(decodeToken)
        // const decodeRefreshToken = jwt.decode(refreshToken)
        // const dateNow = (new Date())/1000
        // console.log(dateNow)
        // const rolesset = data.username === 'admin' ? 'admin' : 'editor'
        const rolesset = decodeToken.authorities.length > 1 ? 'admin' : 'editor'
        commit('SET_ROLES', rolesset)
        commit('SET_USERID', decodeToken.userId)
        resolve()
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        /*logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })*/
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resolve()
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        removeToken()
        commit('SET_TOKEN', '')
        resolve()
      })
    }
  }
}

export default user
