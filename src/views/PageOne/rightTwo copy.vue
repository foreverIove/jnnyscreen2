<template>
  <div class="rightTwo" style="position: relative">
    <div class="text1">终端状态对比</div>
    <div class="chart-flow" ref="Echarts"></div>
    <div style="
        width: 185px;
        height: 185px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        position: absolute;
        top: 82px;
        left: 46px;
      "></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { reqqueryTerminalState } from '@/api/pageone'
let Echarts = ref(null)
const colorHelper = ref({
  setcolor1: ['#24E4AE', '#FFD765', '#FDA3A3', '#4EBA92', '#0091FF', '#81FF5D'],
  setcolor2: ['#42E0FC', '#A4E5FF', '#4E7CD9', '#4EBA92', '#0091FF']
})
const dataList = ref([
  {
    name: '正常',
    value: 5644
  },
  {
    name: '离线',
    value: 3931
  },
  {
    name: '故障',
    value: 772
  }
])
const getChart = () => {
  const myChart = echarts.init(Echarts.value)
  const option = {
    textStyle: {
      fontFamily: 'Source Han Sans SC'
    },

    tooltip: {
      trigger: 'item'
      // formatter: `{b}<br/> {c}${1 === 1 ? '辆' : ''} ({d}%)`
    },
    legend: {
      orient: 'vertical',
      right: 20,
      top: 40,
      textStyle: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'normal'
      },
      itemGap: 5,
      itemWidth: 10,
      itemHeight: 10,
      borderRadius: 2,
      data: dataList.value.map((data) => data.name)
    },
    series: [
      {
        type: 'pie',
        radius: ['37%', '63%'],
        center: [139, 110],
        avoidLabelOverlap: true,
        label: {
          show: true,
          position: 'outside',
          color: '#fff',
          fontWeight: 'bold',
          formatter: '{d}%'
        },
        // 添加 emphasis 配置
        emphasis: {
          scale: true, // 开启放大效果
          scaleSize: 15, // 放大尺寸，数值越大放大效果越明显
          // focus: 'self', // 只高亮当前扇形
          label: {
            show: true,
            fontSize: 16, // 悬浮时标签字体大小
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true,
          length: 10,
          length2: 10
        },
        data: dataList.value
      }
    ],
    // 数据颜色变化
    color: colorHelper.value.setcolor1
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  let res = await reqqueryTerminalState()
  console.log(res, '终端状态占比')
}
onMounted(() => {
  getData()
  getChart()
})
</script>

<style lang="less" scoped>
.chart-flow {
  z-index: 999;
  height: 80%;
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
.rightTwo {
  // box-shadow: inset 0 0 5px rgb(252, 250, 250);
  padding-top: 10px;
  height: 315px;
  //   border: 1px solid #acb3bd;
  // background: #0049ac;
  // background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  // background-size: 100% 100%;
  margin-bottom: -5px;
  margin-top: 20px;
  .text1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/frontpage/titlebg.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-top: 3px;
    padding-left: 40px;
  }
  .text2 {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
  }
}
// .box{
//     height: 300px;
//     border: 1px solid red;
// }
.scroll-box-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.general-container {
  position: relative;

  .general-body {
    padding: 10px 10px 10px 10px;
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
      border-bottom: 1px solid rgba(#3fc2ff, 0.2);
      //   margin-bottom: 6px;
      background-color: #0a4cad;

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
        //height: 40px;
        //line-height: 40px;
        //display: flex;
        &:hover {
          // border: 1px solid #fff;
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
</style>
