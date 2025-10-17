<template>
  <div
    style="width: 240px; height: 90px; overflow: hidden; float: left"
    :style="{ width: widthPer }"
  >
    <div class="box_4 flex-col">
      <div class="image-wrapper_1 flex-col">
        <img :src="url" style="margin: 10px 20px 0 10px" class="img" />
      </div>
    </div>
    <div
      class="bg"
      :style="{ background: 'url(' + bg + ')' }"
      style="
        /* background-position: 100% 0; */
        background-repeat: no-repeat;
        /* background-size: 100% 100%; */
        background-position-y: 80%;
        background-position-x: 55px;
        height: 100%;
      "
    >
      <div class="count">
        <countTo :start="0" :end="num" :autoPlay="true" :duration="3000" /><span
          v-if="name == '平均利用率'"
          >%</span
        >
      </div>
      <div class="info">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  num: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  widthPer: {
    type: String
  },
  bg: {
    type: String
  }
})
onMounted(() => {
  console.log('num', props.num)
})
</script>

<style scoped lang="less">
.img {
  transition: transform 1s; /* 设置过渡效果 */
  transform-style: preserve-3d; /* 保持3D效果 */
  animation: flip-animation 6s infinite; /* 应用翻转动画 */
  &:hover {
    animation: flip-animation 1s forwards; /* 悬停时应用翻转动画 */
  }
}
@keyframes flip-animation {
  0% {
    transform: rotateY(0deg); /* 初始状态 */
  }
  25% {
    transform: rotateY(180deg); /* 翻转180度 */
  }
  50% {
    transform: rotateY(0deg); /* 初始状态 */
  }
  75% {
    transform: rotateY(180deg); /* 初始状态 */
  }
  100% {
    transform: rotateY(0deg); /* 回到原来的面 */
  }
}
.box_4 {
  float: left;
  // margin-right: 15px;
  //         height: 70px;
  //         background: url(@/assets/image/count/one1.png)
  //         -9px 19px no-repeat;
  //         background-size: 100% 100%;
  //         margin-top: 5px;
  //         width: 74px;
}
.image {
  width: 74px;
  height: 72px;
  background: red;
}
.count {
  //     width: 34px;
  // height: 25px;
  font-size: 25px;
  // font-family: DIN;
  font-weight: bold;
  color: #00ffe4;
  font-family: CountFont;
  background: linear-gradient(0deg, rgba(3, 0, 0, 0.29) 0%, rgba(255, 255, 255, 0.29) 100%);
  -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
}
.info {
  //     width: 79px;
  // height: 20px;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  margin-top: 10px;
}
</style>
