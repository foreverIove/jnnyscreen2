// 用于定义相关的数据类型(传递参数)
export interface loginForm {
  username: string
  password: string
}
interface dataType {
  token: string
}
// 定义登录接口返回的数据类型
export interface loginResponseData {
  code: number
  data: dataType
}
interface info {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
// 定义获取返回用户信息的数据类型
export interface loginUserInfo {
  code: number
  data: info
}
