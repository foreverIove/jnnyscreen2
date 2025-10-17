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
    <div class="card__content">
      <div
        @click="changeType(1)"
        style="
          width: 150px;
          height: 40px;
          background: #878585;
          border-radius: 10px;
          text-align: center;
        "
      >
        气泡
      </div>
      <div
        @click="changeType(2)"
        style="
          width: 150px;
          height: 40px;
          background: #878585;
          border-radius: 10px;
          text-align: center;
          margin-top: 10px;
        "
      >
        其他
      </div>
      <bubble v-if="isShow1"></bubble>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import bubble from './bubble.vue'
const isShow1 = ref(true)
const changeType = (type: any) => {
  if (type == 1) {
    isShow1.value = true
  } else {
    isShow1.value = false
  }
}
</script>

<style scoped lang="less">
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
  background-color: #091725;
  border: 1px solid #484747;
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
