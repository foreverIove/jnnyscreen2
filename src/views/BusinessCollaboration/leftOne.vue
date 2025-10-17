<template>
  <div class="leftThree">
    <div class="text1">时段费用统计</div>
    <div class="chart-flow">
      <div style="width: 100%; height: 110px; display: flex">
        <div style="height: 100%; width: 115px; color: #fff" v-for="(item, index) in list" :key="index">
          <div style="margin: 0 auto; height: 100%; width: 100%">
            <div style="
                width: 110px;
                height: 110px;
                padding-top: 0px;
                text-align: center;
                color: #10fffc;
                font-size: 22px;
              " class="leftOne">
              <div style="font-size: 20px">{{ item.value }}万元</div>
              <div style="color: #fff; margin-top: 10px">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 100%; height: 110px; display: flex; justify-content: center">
        <div style="height: 100%; width: 115px; color: #fff" v-for="(item, index) in list2" :key="index">
          <div style="margin: 0 auto; height: 100%; width: 100%">
            <div style="
                width: 110px;
                height: 110px;
                padding-top: 0px;
                text-align: center;
                color: #10fffc;
                font-size: 22px;
              " class="leftOne">
              <div style="font-size: 20px">{{ item.value }}万元</div>
              <div style="color: #fff; margin-top: 10px">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div style="
          width: 100%;
          line-height: 30px;
          display: flex;
          justify-content: space-between;
          color: #fff;
        ">
        <div class="leftOnelogo2"
          style="height: 100%; width: 150px; padding-left: 5px; font-weight: bold; font-size: 13px">
          总费用 <span style="font-size: 15px">10.308 </span> 亿元
        </div>
        <div class="leftOnelogo2"
          style="height: 100%; width: 150px; padding-left: 5px; font-weight: bold; font-size: 13px">
          总服务费 <span style="font-size: 15px">3.38 </span> 亿元
        </div>
      </div>
      <div style="
          width: 100%;
          line-height: 30px;
          margin-top: 10px;

          display: flex;
          justify-content: space-between;
          color: #fff;
        ">
        <div class="leftOnelogo2"
          style="height: 100%; width: 150px; padding-left: 5px; font-weight: bold; font-size: 13px">
          总电费 <span style="font-size: 15px">6.92</span> 亿元
        </div>
        <div class="leftOnelogo2"
          style="height: 100%; width: 150px; padding-left: 5px; font-weight: bold; font-size: 13px">
          今日费用 <span style="font-size: 15px">81.18 </span> 万元
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
const list = ref([
  { id: 1, name: '尖', value: '2019.9' },
  { id: 2, name: '峰', value: '2646.2' },
  { id: 3, name: '平', value: '3660.3' }
])
const list2 = ref([
  { id: 4, name: '谷', value: '4080.7' },
  { id: 5, name: '深', value: '133.7' }
])
onMounted(() => {})
</script>

<style lang="less" scoped>
.leftOnelogo2 {
  background-size: 100% 100%;
}
.leftOne {
  background-size: 100% 60%;

  background-position-y: 80%;
}
.chart-flow {
  height: 100%;
  width: 100%;
  &::before {
    content: ' ';
    width: 169px;
    // height: 169px;
    position: absolute;
    // top: 41px;
    left: 54px;
    // background: url(@/assets/images/power/pie_bg_2.png) no-repeat;
    background: none !important;
  }
}
.bg {
  position: absolute;
  top: 95px;
  left: 25px;
}
// @keyframes rotate {
//   0% {
//     transform: rotate(0deg) scale(1); /* 初始状态 */
//   }
//   100% {
//     transform: rotate(360deg) scale(1); /* 结束状态，恢复原始大小 */
//   }
// }

.leftThree {
  // box-shadow: inset 0 0 5px rgb(252, 250, 250);
  padding-top: 10px;
  position: relative;
  height: 345px;
  //   border: 1px solid #acb3bd;

  // background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  // background-size: 100% 100%;
  // margin-bottom: -5px;
  .text1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    //
    height: 45px;
    line-height: 35px;
    background: url(@/assets/frontpage/titlebg.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 40px;
    padding-top: 3px;
  }
  .echarts-right {
    float: right;
    width: 200px;
    height: 270px;
    // border: 1px solid black;
    .item {
      width: 180px;
      height: 80px;
      padding: 10px 0;
      margin: 30px auto;
      text-align: center;
      line-height: 30px;
      color: #fff;

      box-shadow: inset 0 0 5px rgba(0, 204, 255, 0.8), inset 0 0 5px rgba(0, 204, 255, 0.6),
        inset 0 0 5px rgba(0, 204, 255, 0.4), inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
    }
  }
}
</style>
