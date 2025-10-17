<template>
  <div class="rightTwo">
    <div class="text1">费用区间分布</div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
let Echarts = ref(null)
const sxnja = [322347, 464182, 89357, 16078, 8623]
const minNumber = 90
const minArray = []
sxnja.map((value) => {
  minArray.push(parseFloat((value - minNumber).toFixed(2)))
})
console.log(minArray)

let xaxisData = ['0-10元', '10-30元', '30-60元', '60-90元', '100元以上']
const dataList = ref([
  {
    name: '两小时',
    value: 32
  },
  {
    name: '3小时',
    value: 12
  },
  {
    name: '4小时',
    value: 33
  },
  {
    name: '5小时',
    value: 12
  },
  {
    name: '6小时',
    value: 11
  }
])
const getChart = () => {
  const myChart = echarts.init(Echarts.value)
  const option = {
    // backgroundColor: '#fff',
    title: {
      text: '(个)',
      top: '4%',
      left: '3%',
      textStyle: {
        fontSize: '10px',
        fontWeight: 300,
        color: '#B5C5D4',
        opacity: 0.8
      }
    },
    tooltip: {
      // valueFormatter: function (value) {
      //   return value.toFixed(2)
      // }
      trigger: 'axis',
      formatter: function (params) {
        // 只显示第一个系列（胶囊图系列）的数据
        const targetSeries = params[0]
        return `
          ${targetSeries.name}<br/>
          ${targetSeries.seriesName}: ${targetSeries.value}个
        `
      }
    },
    grid: {
      left: '1%',
      right: '0%',
      top: '16%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',

      data: xaxisData,
      axisLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: '#545454'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#B5C5D4',
        fontSize: '10px',
        interval: 0,
        rotate: 35
      }
    },
    yAxis: [
      {
        // type: 'value',
        // min: function (value) {
        //   return value.min*0.9;
        // },
        type: 'value',
        min: 0,
        // max: 100 - minNumber,
        // max: yAxisMax,
        axisLine: {
          show: false,
          lineStyle: {
            width: 1,
            color: '#545454'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#B2C2D3',
            opacity: 0.3,
            type: 'dotted'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#B5C5D4',
          fontSize: '12px',
          formatter: (value) => {
            return value + minNumber
          }
        }
      }
    ],
    series: [
      {
        name: '费用区间',
        barWidth: '20px',
        showBackground: true,
        backgroundStyle: {
          // color: 'rgba(21,136,209,0.6)'
        },
        data: [322347, 464182, 89357, 16078, 8623],
        type: 'pictorialBar',
        symbol: 'roundRect',
        symbolRepeat: true,
        symbolSize: [15, 7],
        // symbolOffset: symbolOffset,
        // barWidth:'40%',
        itemStyle: {
          color: '#10FDFB'
        }
      },
      // 背景系列
      {
        type: 'bar',
        itemStyle: { color: 'rgba(21,136,209,0.2)' },
        barGap: '-100%',
        barWidth: '20px',
        data: [
          600000, 600000, 600000, 600000, 600000, 600000, 600000, 100, 100, 100, 100, 100, 100, 100
        ]
        // 其他配置...
      }
    ]
  }
  option && myChart.setOption(option)
}
onMounted(() => {
  getChart()
})
</script>

<style lang="less" scoped>
.chart-flow {
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
  height: 300px;
  //   border: 1px solid #acb3bd;
  // background: #0049ac;
  // background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  // background-size: 100% 100%;
  margin-bottom: -5px;
  margin-top: 10px;
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
    padding-left: 40px;
    padding-top: 3px;
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
