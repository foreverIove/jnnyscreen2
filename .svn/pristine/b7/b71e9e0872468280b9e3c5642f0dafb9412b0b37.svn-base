// 统一管理用户相关的接口
import request from '@/utils/request'
import type { loginForm, loginResponseData } from './type'
import { getToken } from '@/utils/setToken'

enum API {
  LOGIN_URL = '/user1/login',
  USERINFO_URL = '/user/info'
}
// export const reqLogin = (data: loginForm) =>
//   request({
//     url: API.LOGIN_URL,
//     method: 'post',
//     data
//   })
// 获取用户信息
export const reqUserInfo = () => {
  const token = getToken()
  console.log('token啊', token)
  return request<any>({
    method: 'get',
    url: API.USERINFO_URL,

    headers: {
      token: token
    }
  })
}

//   用户登录
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
