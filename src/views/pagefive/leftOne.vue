<template>
  <div class="leftThree">
    <div class="text1">
      故障统计
      <div style="width: 150px; height: 30px; float: right; margin-right: 50px">
        <el-select v-model="value" class="m-2" placeholder="请选择" @change="getData()">
          <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>

    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { reqFaultCountLineDataByType } from '@/api/pagefive'
const value = ref('1')
const changeD = (val) => {
  // debugger
}
const options2 = [
  {
    value: '1',
    label: '7天'
  },
  {
    value: '2',
    label: '30天'
  },
  {
    value: '3',
    label: '12个月'
  }
]
//
const dataY = ref([])
const dataX = ref([])
const getData = async () => {
  // let res = await reqFaultCountLineDataByType(value.value)
  console.log('故障统计', value.value)
  if (value.value == '1') {
    dataY.value = [1097, 3550, 3058, 3167, 2822, 3329, 2263, 1471]
    dataX.value = ['30', '01', '02', '03', '04', '05', '06', '07']
    getChart()
  } else if (value.value == '2') {
    dataY.value = [
      725, 1800, 2158, 1840, 2120, 1741, 1762, 1465, 1564, 2261, 2193, 2324, 1830, 1620, 1535, 1733,
      1576, 2324, 2356, 3666, 1785, 3022, 2562, 2416, 3550, 3058, 3167, 2822, 3329, 2263, 1473
    ]
    dataX.value = [
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07'
    ]
    getChart()
  } else {
    dataY.value = [
      37459, 53536, 47335, 36961, 29642, 38666, 31381, 45114, 52721, 68771, 68859, 60596, 19663
    ]
    dataX.value = ['10', '11', '12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
    getChart()
  }
}
//
let Echarts = ref(null)
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
        data: dataX.value,
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
        name: '故障数量',
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
        data: dataY.value
      }
    ]
  }

  option && myChart.setOption(option)
}
onMounted(() => {
  getData()
  setTimeout(() => {
    getChart()
  }, 500)
})
</script>
<style>
.el-scrollbar__wrap {
  background: #051a32 !important;
}
</style>
<style lang="less" scoped>
/deep/.el-select__placeholder {
  color: #fff !important;
}
.el-select-dropdown__item {
  color: #fff;
}
.is-hovering {
  background: rgba(255, 255, 255, 0.5);
}
/deep/ .el-select-dropdown__wrap {
  // background: #206ca7 !important;
}

/deep/ .el-select__wrapper {
  background: #051a32 !important;
  // color: #fff;
}
.chart-flow {
  height: 80%;
  width: 352px;
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
    // background: url(@/assets/images/PageOne/title.png) 100% no-repeat;
    // background-size: 100% 100%;
    background: url(@/assets/frontpage/titlebg.png) 100% no-repeat;
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
