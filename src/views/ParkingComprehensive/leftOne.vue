<template>
  <div class="leftThree">
    <div class="text1">用户注册分析</div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { reqRegisterUser } from '@/api/ParkingComprehensive'
//
const data1 = [58695, 46985, 42153, 40256, 38965, 29865]
const data2 = [58695, 46985, 42153, 40256, 38965, 29865]
const xData = ['新世纪168', '新世纪198', '长航黄海', '新世纪188', '国电19']
//
let Echarts = ref(null)
const colorHelper = ref({
  setcolor1: ['#42E0FC', '#A4E5FF', '#4E7CD9', '#4EBA92', '#0091FF', '#81FF5D'],
  setcolor2: ['#42E0FC', '#A4E5FF', '#4E7CD9', '#4EBA92', '#0091FF']
})
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
    // backgroundColor: '#021B6C',
    title: {
      show: false,
      text: '多线图',
      textStyle: {
        align: 'center',
        color: '#fff',
        fontSize: 20
      },
      top: '5%',
      left: 'center'
    },
    dataZoom: [
      {
        type: 'inside',
        // filterMode: 'filter',
        realtime: true
        // "start": 10,
        // "end": 90
      },
      {
        show: true,
        xAxisIndex: [0],
        realtime: true,
        height: 4, //这里可以设置dataZoom的尺寸
        bottom: '1%',
        backgroundColor: '#1d76e6', // 填充颜色
        textStyle: {
          color: '#fff' // 左右两边文字颜色
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      // formatter: '{b}：{c}个',
      backgroundColor: 'rgba(0, 0, 0, 0.63)', //设置背景颜色
      textStyle: {
        color: '#fff'
      },
      borderColor: 'rgba(255,255,255, .5)',
      // formatter: function(params) {
      //     return params[0].name + '<br/>' +
      //         "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(1, 251, 246, 1)'></span>" +
      //         params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 1).toFixed(2)).toLocaleString() + ' 个<br/>'

      // }
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }
            ],
            global: false
          }
        }
      }
    },
    grid: {
      top: '15%',
      left: '4%',
      right: '5%',
      bottom: '6%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#26367A'
          }
        },
        splitArea: {
          // show: true,
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(198, 207, 255, 1)',
            fontSize: 12
          },
          // color: '#fff',
          // rotate: 0,
          // margin: 10,
          interval: 0
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        data: ['10', '11', '12', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
        boundaryGap: ['10%', '10%']
      }
    ],

    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: true
        },
        nameTextStyle: {
          color: '#fff',
          fontSize: '11px'
        },
        min: 0,
        // max: 500,
        splitNumber: 6,
        splitLine: {
          show: true,
          interval: '0',
          lineStyle: {
            color: ['rgba(38, 54, 122, .58)'],
            type: 'dashed',
            width: 1
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          // margin: 10,
          textStyle: {
            fontSize: 12,
            color: 'rgba(198, 207, 255, 1)'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '数量',
        type: 'line',
        smooth: true, //是否平滑
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
          normal: {
            color: 'rgba(23, 174, 230, 1)',
            shadowColor: 'rgba(0, 0, 0, 0)',
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5
          }
        },
        label: {
          show: false,
          position: 'top',
          textStyle: {
            color: 'rgba(1, 251, 246, 1)',
            fontSize: 16
          }
        },
        itemStyle: {
          color: '#fff',
          borderColor: 'rgba(255, 255, 255, .2)',
          borderWidth: 10,
          shadowColor: 'rgba(0, 0, 0, 0)',
          shadowBlur: 0,
          shadowOffsetY: 1,
          shadowOffsetX: 1
        },
        tooltip: {
          show: true
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(7, 251, 246, 0.56)'
              },
              {
                offset: 1,
                color: 'rgba(7, 251, 246, 0)'
              }
            ],
            global: false // 缺省为 false
          }
        },
        data: [1572, 1393, 1581, 1191, 1381, 1692, 1455, 1352, 1173, 1356, 430, 885]
      }
    ]
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  const res = await reqRegisterUser(1)
  // console.log('用户注册分析', res)
  if (res.code === 0) {
    // 赋值
    // dataList.value = res.data.list
  }
}
onMounted(() => {
  getData()
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
  height: 315px;
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
    // border: 1px solid red;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/frontpage/titlebg.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-top: 3px;
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
