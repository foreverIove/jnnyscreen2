<template>
  <div class="card">
    <div class="content">
      <div class="back">
        <div class="back-content">
          <!-- <strong>Hover Me</strong> -->
          <div class="center">
            <h1>Welcome login page</h1>
            <!-- <hr /> -->
            <br />
            <div class="inputContainer">
              <input
                required="required"
                v-model="username"
                id="inputField"
                placeholder="Username"
                type="text"
                @blur="blur1"
              />
              <label class="usernameLabel" for="inputField">Username</label>
              <svg viewBox="0 0 448 512" class="userIcon">
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                ></path>
              </svg>
              <span style="height: 0px; color: red; margin-left: 200px" v-if="userRule1"
                >账号不能为空</span
              >
            </div>
            <div class="inputContainer">
              <input
                required="required"
                id="inputField"
                placeholder="password"
                type="password"
                v-model="password"
                @blur="blur2"
              />
              <label class="usernameLabel" for="inputField">password</label>
              <svg viewBox="0 0 448 512" class="userIcon">
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                ></path>
              </svg>
              <span style="height: 0px; color: red; margin-left: 200px" v-if="userRule2"
                >密码不能为空</span
              >
            </div>
            <div class="container">
              <div class="btn" @click.prevent="GoOther"><a href="#">登录</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import userStore from '@/stores/index.ts'
import router from '@/router'
const username = ref<string>('')
const password = ref<string>('')
const userRule1 = ref<boolean>(false)
const userRule2 = ref<boolean>(false)
let Store = userStore()

const blur1 = () => {
  if (username.value.trim() == '') {
    userRule1.value = true
  } else {
    userRule1.value = false
  }
}
const blur2 = () => {
  if (password.value.trim() == '') {
    userRule2.value = true
  } else {
    userRule2.value = false
  }
}

const GoOther = () => {
  blur1()
  blur2()
  if (password.value.trim() != '' && username.value.trim() != '') {
    // 异步操作,触发pinia
    let obj = {
      username,
      password
    }
    try {
      console.log('执行')

      Store.user.getReqToken(obj)
      console.log(router, 'router')

      // nextTick(() => {
      //   router.push('screen')
      //   console.log('111111111')
      // })
    } catch (error) {
      console.log('登录异常===')
    }
    // userStore.user.getReqToken()
  }
}
</script>
<style scoped>
.inputContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}

#inputField {
  border: 2px solid white;
  background-color: transparent;
  border-radius: 10px;
  padding: 12px 15px;
  color: black;
  font-weight: 500;
  outline: none;
  caret-color: rgb(155, 78, 255);
  transition-duration: 0.3s;
  font-family:
    Whitney,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
}

.userIcon {
  position: absolute;
  fill: rgb(155, 78, 255);
  width: 12px;
  top: -23px;
  left: -15px;
  opacity: 0;
  transition: 0.2s linear;
}

.usernameLabel {
  position: absolute;
  top: -25px;
  left: 5px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  font-family:
    Whitney,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
  overflow: hidden;
  transition: 0.2s linear;
  opacity: 0;
}

#inputField:focus ~ .usernameLabel,
#inputField:valid ~ .usernameLabel {
  transform: translateX(20px);
  opacity: 1;
}

#inputField:focus ~ .userIcon,
#inputField:valid ~ .userIcon {
  transform: translateX(20px);
  opacity: 1;
}

#inputField:focus,
#inputField:valid {
  background-color: #ddd;
  transition-duration: 0.3s;
}
</style>
<style scoped>
.card {
  overflow: visible;
  width: 490px;
  height: 454px;
  margin-left: 300px;
  margin-top: 100px;
}

.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000;
  /* opacity: 0.9; */
  border-radius: 5px;
}

.front,
.back {
  background-color: #151515;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.back::before {
  position: absolute;
  content: ' ';
  display: block;
  width: 160px;
  height: 160%;
  background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
  animation: rotation_481 5000ms infinite linear;
}

.back-content {
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #151515;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

.front {
  transform: rotateY(180deg);
  color: white;
}

.front .front-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.front-content .badge {
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
}

.description {
  box-shadow: 0px 0px 10px 5px #00000088;
  width: 100%;
  padding: 10px;
  background-color: #00000099;
  backdrop-filter: blur(5px);
  border-radius: 5px;
}

.title {
  font-size: 11px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}

.title p {
  width: 50%;
}

.card-footer {
  color: #ffffff88;
  margin-top: 5px;
  font-size: 8px;
}

.front .img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffbb66;
  position: relative;
  filter: blur(15px);
  animation: floating 2600ms infinite linear;
}

#bottom {
  background-color: #ff8866;
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
}

#right {
  background-color: #ff2233;
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 200px;
  margin-left: 50px;
}

.container .btn {
  height: 50px;
  margin: 20px;
  margin-bottom: 40px;
  position: relative;
  width: 155px;
}

.container .btn a {
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(255, 255, 255, 0.2);
  color: #fff;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  left: 0;
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(15px);
  z-index: 1;
  transition: 0.5s;
}

.container .btn:hover a {
  letter-spacing: 2px;
}

.container .btn a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
  transform: skewX(45deg) translateX(0);
  transition: 0.5s;
}

.container .btn:hover a::before {
  transform: skewX(45deg) translateX(200%);
}

.container .btn::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -5px;
  height: 10px;
  width: 30px;
  background: rgb(8, 107, 183);
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0s;
}

.container .btn:hover::before {
  bottom: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: 0.5s;
}

.container .btn::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -5px;
  height: 10px;
  width: 30px;
  background: rgb(7, 95, 189);
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0s;
}

.container .btn:hover::after {
  top: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: 0.5s;
}

.container .btn:nth-child(1):before,
.container .btn:nth-child(1)::after {
  background: #2bd2ff;
  box-shadow:
    0 0 5px #2bd2ff,
    0 0 15px #2bd2ff,
    0 0 30px #2bd2ff,
    0 0 60px #2bd2ff;
}

.container .btn:active a {
  color: #000;
}
</style>
