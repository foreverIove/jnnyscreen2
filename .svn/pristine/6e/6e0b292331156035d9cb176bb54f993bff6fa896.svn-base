<template>
  <div class="leftThree">
    <div style="width: 30px; height: 100%; flex-grow: 1">
      <div class="threebg" style="
          text-align: center;
          height: 200px;
          width: 200px;
          margin: 0 auto;
          color: #10fffc;
          font-size: 40px;
          font-weight: bold;
        ">
        132339
      </div>
      <div style="color: #fff; text-align: center; font-size: 24px">用户总数</div>
    </div>
    <div style="width: 30px; height: 100%; flex-grow: 1">
      <div class="threebg2" style="
          text-align: center;
          height: 200px;
          width: 200px;
          margin: 0 auto;
          color: #10fffc;
          font-size: 40px;
          font-weight: bold;
        ">
        694
      </div>
      <div style="color: #fff; text-align: center; font-size: 24px">今日注册数</div>
    </div>
    <div style="width: 30px; height: 100%; flex-grow: 1">
      <div class="threebg3" style="
          text-align: center;
          height: 200px;
          width: 200px;
          margin: 0 auto;
          color: #10fffc;
          font-size: 40px;
          font-weight: bold;
        ">
        63%
      </div>
      <div style="color: #fff; text-align: center; font-size: 24px">今日新增环比</div>
    </div>
  </div>
</template>
<script setup>
import { useTimer } from '@/hooks/useMove3.ts'
// import { useTimer } from 'scroll_cxs_v3'
import { onMounted, reactive, ref, watch } from 'vue'
// import { reqQueryChgOrderData } from '@/api/operationAnalysis'
import { reqUserData } from '@/api/ParkingComprehensive'
let dataList1 = ref([])
let scrollBox2 = ref(null)
const timer = useTimer()
const getData = async () => {
  const res = await reqUserData()
  if (res.code === 0) {
    console.log('下面三个', res)
  }
}
onMounted(() => {
  // console.log(Echarts.value)
  // useMove(dataList1.value,scrollBox2.value)
  getData()
})
</script>
<style lang="less" scoped>
.threebg {
  background: url(@/assets/parking/boologo1.png) 100% no-repeat;
  background-size: 100% 100%;
}
.threebg2 {
  background: url(@/assets/parking/boologo2.png) 100% no-repeat;
  background-size: 100% 100%;
}
.threebg3 {
  background: url(@/assets/parking/boologo3.png) 100% no-repeat;
  background-size: 100% 100%;
}
.general-container {
  position: relative;

  .general-body {
    padding: 0px 10px 10px 10px;
    margin-top: 10px;
    overflow: hidden;
    height: 260px;
    .table-header {
      height: 40px;
      line-height: 40px;
      width: 100%;
      text-align: center;
      display: flex;
      font-size: 16px;
      position: relative;
      top: -10px;
      color: #ccddf5;
      font-weight: bold;
      border-bottom: 2px solid rgba(#3fc2ff, 0.2);
      //   margin-bottom: 6px;
      background-color: #040d24;
      z-index: 999;

      span {
        //flex: 1;
      }
    }

    .scroll-box {
      margin: auto;
      width: 100%;
      height: 204px;
      //   overflow: hidden;
      cursor: pointer;
      color: #99bff3;
      font-size: 16px;
      border-top: none;
      font-weight: 400;

      .scroll-box-item {
        padding: 10px;
        box-sizing: border-box;
        font-size: 12px;
        flex: 1;
        justify-content: stretch;
        height: 40px;
        margin-bottom: 6px;
        text-align: center;
        display: flex;
        // align-items: center;
        align-items: center;
        background: rgba(#3fc2ff, 0.1);
        overflow: ;
        border: 1px solid #6e6767;
        //height: 40px;
        //line-height: 40px;
        //display: flex;
        &:hover {
          //
          box-shadow: inset 0 0 5px rgba(0, 204, 255, 0.8), inset 0 0 10px rgba(0, 204, 255, 0.6),
            inset 0 0 15px rgba(0, 204, 255, 0.4), inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
        }
        div {
          //flex: 1;
          color: #99bff3;
          pointer-events: auto;
          display: -webkit-box;
          -webkit-line-clamp: 2; //控制文字显示行数
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
.chart-flow {
  height: 270px;
  width: 100%;
  // ;
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
.leftThree {
  // box-shadow: inset 0 0 5px rgb(252, 250, 250);
  padding-top: 10px;
  height: 285px;
  display: flex;
  justify-content: space-between;
  //background: #030e24;
  //   border: 1px solid #acb3bd;
  //   background: rgba(0, 69, 168, 0.5);
  // background: url(@/assets/images/PageOne/bootom.png) 100% no-repeat;
  // background-size: 100% 100%;
  // margin-bottom: -5px;
  .text1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/images/PageOne/title.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 40px;
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
