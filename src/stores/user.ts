import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user/'
import { setInfo, setToken } from '@/utils/setToken'
import router from '@/router'
interface UserType {
  username: string
  password: string
}

const userUser = defineStore('user', {
  state: () => ({}),

  getters: {},

  actions: {
    async getReqToken(user) {
      const { username, password } = user
      console.log(username.vaslue, password.value, '===_+++++')
      const result = await reqLogin({ username: username.value, password: password.value })
      if (result.code == 200) {
        console.log('登录成功', result)
        // 存Token
        setToken(result.data.token)
        // 获取用户信息
        const info = await reqUserInfo()
        setInfo(info.data.checkUser.username)
        // console.log('info', info.data.checkUser.username)
        // 登录成功

        // nextTick(() => {
        router.push('screen')
        console.log('111111111')
        // })
      } else {
        alert('密码错误！')
        // alert('登录失败，失败原因：', result.message)
      }
    }
  }
})
export default userUser
