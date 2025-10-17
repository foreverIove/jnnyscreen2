<template>
  <div class="card">
    <div class="tools">
      <div class="circle">
        <span class="red box"></span>
      </div>
      <div class="circle">
        <span class="yellow box"></span>
      </div>
      <div class="circle">
        <span class="green box"></span>
      </div>
    </div>
    <div class="goOther" @mouseleave="outshare">
      <img src="@/assets/static/Other/share.png" @mouseenter="goshare" alt="" width="25px" />
      <shareVC v-if="shareShow"></shareVC>
    </div>
    <div class="card__content">
      <li>{{ state.element }}</li>
      <li style="float: left">{{ state2.element }}</li>
      <button
        style="background-color: #1a3304; width: 60px; color: #fff; padding: 3px; font-size: 12px"
        v-if="state2.isShow"
        @click="showDom"
      >
        点击
      </button>
      <br /><br />
      <li style="display: block">{{ state3.element }}</li>
      <li>等等！新增：打包优化！</li>
      <li>
        <div>1.打包后，图片自动压缩</div>
        <div>
          2.打包后，生成打包分析图，涵盖大小对比，<span
            @click="showys = !showys"
            style="color: blue"
            >点击预览</span
          >
        </div>
        <iframe
          v-if="showys"
          src="../../../stats.html"
          frameborder="0"
          style="width: 1000px; height: 400px"
        ></iframe>
      </li>
    </div>
    <div
      v-if="showCount"
      style="
        position: absolute;
        width: 200px;
        height: 100px;
        background-color: rgb(27, 16, 3);
        padding: 30px;
        top: 20px;
        right: 150px;
      "
    >
      <countTo :start="0" :end="1000" :autoPlay="true" :duration="3000" />
    </div>
  </div>
</template>

<script setup lang="ts">
import shareVC from './share.vue'
import { toQQzone } from '../../hooks/share.js'
import { onMounted, reactive, ref } from 'vue'
interface info {
  msg: string
  isShow: boolean
}
const showys = ref(false)
const infoList: info[] = reactive([
  { msg: '如你所见，这里相当简便，优势如下：', isShow: true },
  { msg: '数字翻牌器countTo（原来的vue2对应的翻牌器在vue3失效）', isShow: false },
  {
    msg: `样式的统一管理、Loding效果<Loading/>，main.ts变得更干净！接口和仓库的统一管理
    包含高德地图组件（热力图、信息窗体、海量地图标识点、点聚合）；集中管理字体样式如果你想管理颜色，那就将颜色统一，内置了暗黑模式和普通模式（但未使用）；基本的二次封装的axios,echarts、less、代码校验文件，可自定义颜色文字和值的半扇图；或许还有一些潜在的小技巧，需要你来自己探索了！
    采用的技术栈：vue3全家桶+echarts+高德地图+mockJS`,
    isShow: true
  }
  // { msg: '4xxsssqwe请问x', isShow: true }
])
const text1 = ref<string>('')
const text2 = ref<string>('')
// const moveWord = () => {
//   let ex = infoList[0].msg
//   let ex1 = infoList[1].msg
//   const chars = ex.split('')
//   let i = 0

//   const timer = setInterval(() => {
//     console.log(text1.value)
//     if (i >= chars.length) {
//       clearInterval(timer)
//       return
//     }
//     text1.value += ex.charAt(i)
//     text2.value += ex1.charAt(i)
//     i++
//   }, 100)
// }
const moveWord = (ex, obj) => {
  const chars = ex.split('')
  let i = 0
  const timer = setInterval(() => {
    if (i >= chars.length) {
      obj.isShow = true
      clearInterval(timer)
      return
    }
    obj.element += ex.charAt(i)
    i++
  }, 10)
}

const state = reactive({ element: '', isShow: false })
const state2 = reactive({ element: '', isShow: false })
const state3 = reactive({ element: '', isShow: false })
console.log(state.element) // Hello, world!
onMounted(() => {
  moveWord(infoList[0].msg, state)
  moveWord(infoList[1].msg, state2)
  moveWord(infoList[2].msg, state3)
})
const showCount = ref<boolean>(false)
const showDom = () => {
  showCount.value = !showCount.value
}
const shareShow = ref(false)
const goshare = () => {
  // console.log('移入')
  shareShow.value = true
  // const url = 'https://blog.csdn.net/guhanfengdu?spm=1010.2135.3001.5343'
  // const title = '那只猫喝咖啡的分享！'
  // toQQzone(url, title)
}
const outshare = () => {
  shareShow.value = false
}
</script>

<style scoped lang="less">
.goOther {
  top: 10px;
  left: 1100px;
  padding: 40px;
  width: 55px;
  height: 205px;
  position: absolute;
  // float: right;
  // background: red;
  // background-image: url(.././../assets/static/Other/share.png);
  // background: url(@/assets/static/Other/share.png) 100% no-repeat;
  // background-size: 100% 100%;
}
.card__content {
  li {
    font-size: 24px;
    color: #4e4545;
    font-family: PangMenZhengDao;
  }
}
.card {
  padding: 20px;
  line-height: 40px;
  position: absolute;
  top: 100px;
  left: 400px;
  width: 1200px;
  height: 654px;
  margin: 0 auto;
  background-color: #bdd8f4;
  border-radius: 8px;
  z-index: 1;
}

.tools {
  display: flex;
  align-items: center;
  padding: 9px;
}

.circle {
  padding: 0 4px;
}

.box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}
</style>
