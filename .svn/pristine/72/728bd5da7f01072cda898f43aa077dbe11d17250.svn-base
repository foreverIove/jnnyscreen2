<template>
  <div class="login">
    <div class="box">
      <FormLogin></FormLogin>
      <!-- <button @click="GoOther">登录</button> -->
    </div>
  </div>
</template>

<script setup>
import FormLogin from './form.vue'
// import { storeToRefs } from 'pinia'
// const userStore = useUser()
// 如果直接解构出数据，这个数据不是响应式的。如果想要变成响应式的，需要调用storeToRefs方法
// const { userName, avatar } = storeToRefs(userStore)
// import useType from '@/stores/user.ts'
import userStore from '@/stores/index.ts'
let Store = userStore()

const GoOther = () => {
  console.log('跳转')
  // 异步操作,触发pinia
  Store.user.getReqToken()
  // userStore.user.getReqToken()
}
</script>

<style scoped lang="less">
.login {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  background-image: url(@/assets/static/login/login_bg.jpg);
  // background: url(@/assets/static/login/bg01.png) 100% no-repeat;
  background-size: 100% 100%;
  .box {
    width: 200px;
    height: 100px;
    button {
      position: absolute;
      top: 500px;
      left: 1000px;
      width: 200px;
    }
  }
}
</style>
