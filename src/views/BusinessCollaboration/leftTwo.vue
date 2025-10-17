<template>
  <div class="leftThree">
    <div class="text1">
      电费/服务费/总费用
      <div style="width: 130px; height: 30px; float: right; margin-right: 20px">
        <el-select v-model="value" class="m-2" placeholder="请选择" @visible-change="changeD()" @change="getData()">
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
//

//
let obj = ref({
  xData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  legend: ['总费用', '电费', '服务费'],
  lineData: [
    {
      name: '总费用',
      data: [20, 19, 20, 23, 25, 29, 27, 28, 29, 26, 24, 23, 25]
    },
    {
      name: '电费',
      data: [20, 19, 20, 23, 25, 29, 27, 28, 29, 26, 24, 23, 26]
    },
    {
      name: '服务费',
      data: [20, 19, 20, 23, 25, 29, 27, 28, 29, 26, 24, 23, 16]
    }
  ],
  colors: ['#E6CD0B', '#11FFFD', '#1576F2']
})
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

  let colorStop = [
    {
      start: 'rgba(255, 219, 14,1)',
      end: 'rgba(255, 219, 14, 6)'
    },
    {
      start: 'rgba(0, 242, 240,1)',
      end: 'rgba(0, 242, 240,1)'
    },
    {
      start: 'rgba(0, 142, 255, 1)',
      end: 'rgba(0, 142, 255, 1)'
    }

    // {
    //   start: 'rgba(102, 225, 223,0.02)',
    //   end: 'rgba(102, 225, 223, 0.6)'
    // }

    // {
    //   start: 'rgba(255, 173, 106,0.02)',
    //   end: 'rgba(255, 173, 106, 0.6)'
    // },
    // {
    //   start: 'rgba(0, 142, 255, 1)',
    //   end: 'rgba(0, 142, 255, 1)'
    // },
    // {
    //   start: 'rgba(255, 224, 171,0.02)',
    //   end: 'rgba(255, 224, 171, 0.6)'
    // },
    // {
    //   start: 'rgba(107, 197, 244,0.02)',
    //   end: 'rgba(107, 197, 244, 0.6)'
    // },
    // {
    //   start: 'rgba(192, 142, 242,0.02)',
    //   end: 'rgba(192, 142, 242, 0.6)'
    // }
  ]
  let serData = []
  obj.value.lineData.forEach((item, index) => {
    serData.push({
      name: item.name,
      type: 'line',
      stack: 'all',
      // showSymbol: false, //节点
      showSymbol: true, //节点
      symbolSize: 12,
      symbol: 'emptyCircle',
      lineStyle: {
        color: obj.value.colors[index],
        width: 4,
        // shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
        shadowBlur: 8,
        shadowOffsetY: 10
      },
      itemStyle: {
        borderWidth: 1
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
              color: colorStop[index] ? colorStop[index].end : 'rgba(0, 142, 255, 0.6)'
            },
            {
              offset: 1,
              color: colorStop[index] ? colorStop[index].start : 'rgba(0, 142, 255, 0.02)'
            }
          ],
          globalCoord: false // 缺省为 false
        }
      },
      data: item.data
    })
  })

  const option = {
    // backgroundColor: '#031d47',
    title: {
      // text: '办结统计',
      top: '1%',
      textAlign: 'left',
      left: '1%',
      textStyle: {
        color: '#38adb9',
        fontSize: 18,
        fontWeight: '600'
      }
    },
    color: ['#159AFF', '#66E193', '#E3F170', '#66E1DF', '#FFAD6A', '#ffe0ab', '#6bc5f4', '#c08ef2'],
    legend: {
      icon: 'circle',
      top: '0%',
      left: '20%',
      //   left: 'center',
      orient: 'horizontal', //图例方向【horizontal/vertical】
      itemHeight: 10, //修改icon图形大小
      itemWidth: 10, //修改icon图形大小
      itemGap: 50,
      textStyle: {
        fontSize: 12,
        color: '#fff',
        padding: [0, 8]
      },
      data: obj.value.legend
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      backgroundColor: '#0a2b45', // 设置背景颜色
      textStyle: {
        color: '#333',
        color: '#fff',
        fontSize: 14
      },
      borderColor: 'rgba(255, 255, 255, .16)',
      axisPointer: {
        lineStyle: {
          color: 'rgba(28, 124, 196)'
        }
      },

      formatter: (params) => {
        let arr = [...params]
        let str = ''
        arr.forEach((item, index) => {
          str += item.marker + item.seriesName + '  ' + item.data + '<br />'
        })
        str = arr[0].name + '<br />' + str
        return str
      }
    },

    grid: {
      top: '10%',
      left: '3%',
      right: '2%',
      bottom: '18%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          onZero: true,
          lineStyle: {
            color: '#81b0d0'
          }
        },
        axisLabel: {
          interval: 0,
          align: 'center',
          margin: 10,
          color: '#fff',
          rotate: 0,
          textStyle: {
            fontSize: 14
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: false,
        data: obj.value.xData
      }
    ],

    yAxis: [
      {
        type: 'value',
        name: '（元）',
        nameTextStyle: {
          //y轴上方单位的颜色
          color: '#fff'
        },
        // splitNumber: 6,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#81b0d0'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(221, 228, 241,.3)'
            // type: "dashed",
          }
        },
        axisLabel: {
          color: '#fff',
          textStyle: {
            fontSize: 14
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: serData
  }
  option && myChart.setOption(option)
}
const value = ref('1')
const changeD = (val) => {
  // debugger
  console.log('cs01', val)
  // value.value = val
  if (value.value == '1') {
    obj.value.xData = ['30', '01', '02', '03', '04', '05', '06', '07']
    obj.value.lineData = [
      {
        name: '总费用',
        data: [279817.25, 741740.7, 644980.06, 613261.96, 593012.6, 594993.99, 556178.27, 387591.66]
      },
      {
        name: '电费',
        data: [
          199943.93, 489182.04, 424855.61, 398968.25, 384003.38, 382274.39, 359725.93, 228413.04
        ]
      },
      {
        name: '服务费',
        data: [79873.32, 252558.65, 220124.45, 214293.71, 209009.22, 212719.6, 196452.34, 159178.62]
      }
    ]
  } else if (value.value == '2') {
    obj.value.xData = [
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
    obj.value.lineData = [
      {
        name: '总费用',
        data: [
          210717.87, 507448.56, 529366.81, 535528.86, 524658.05, 537174.37, 568922.02, 580225.95,
          532984.18, 463040.19, 471344.3, 448318.6, 521812.44, 560604.34, 524367.31, 475923.99,
          441757.6, 480261.17, 473166.05, 499208.03, 493687.69, 495427.78, 515725.32, 667939.37,
          741740.7, 644980.06, 613261.96, 593012.6, 594993.99, 556178.27, 389835.01
        ]
      },
      {
        name: '电费',
        data: [
          153529.05, 323330.55, 338333.29, 344141.24, 333866.99, 342773.98, 371356.05, 378501.01,
          340109.27, 293719.09, 302668.35, 288390.45, 329581.82, 362322.66, 339038.94, 302136.37,
          281235.57, 307137.81, 306363.68, 319042.96, 313978.3, 314422.25, 329239.35, 429128.12,
          489182.05, 424855.61, 398968.25, 384003.38, 382274.39, 359725.93, 229852.47
        ]
      },
      {
        name: '服务费',
        data: [
          57188.82, 184118.01, 191033.52, 191387.62, 190791.06, 194400.39, 197565.97, 201724.94,
          192874.91, 169321.1, 168675.95, 159928.15, 192230.62, 198281.68, 185328.37, 173787.62,
          160522.03, 173123.36, 166802.37, 180165.07, 179709.39, 181005.53, 186485.97, 238811.25,
          252558.65, 220124.45, 214293.71, 209009.22, 212719.6, 196452.34, 159982.54
        ]
      }
    ]
  } else if (value.value == '3') {
    obj.value.xData = ['10', '11', '12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
    obj.value.lineData = [
      {
        name: '总费用',
        data: [
          13557118.62, 20262904.77, 22221518.97, 20073302.78, 17469122.19, 17820530.82, 16952508.64,
          17775882.78, 19679688.67, 23047436.6, 22347807.53, 15365527.84, 4136597.75
        ]
      },
      {
        name: '电费',
        data: [
          8513388.11, 13335602.96, 14441894.04, 12477624.8, 10684218.51, 11159495.13, 10559897.73,
          11169509.84, 13378028.19, 15818028.02, 15332868.66, 9823237.81, 2670648.31
        ]
      },
      {
        name: '服务费',
        data: [
          5043730.51, 6927301.81, 7779624.93, 7595677.98, 6784903.69, 6661035.69, 6392610.92,
          6606372.94, 6301660.48, 7229408.59, 7014941.01, 5542290.03, 1465949.45
        ]
      }
    ]
  }
  getChart()
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
onMounted(() => {
  obj.value.xData = ['30', '01', '02', '03', '04', '05', '06', '07']
  obj.value.lineData = [
    {
      name: '总费用',
      data: [279817.25, 741740.7, 644980.06, 613261.96, 593012.6, 594993.99, 556178.27, 387591.66]
    },
    {
      name: '电费',
      data: [199943.93, 489182.04, 424855.61, 398968.25, 384003.38, 382274.39, 359725.93, 228413.04]
    },
    {
      name: '服务费',
      data: [79873.32, 252558.65, 220124.45, 214293.71, 209009.22, 212719.6, 196452.34, 159178.62]
    }
  ]
  getChart()
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
  height: 315px;
  //   border: 1px solid #acb3bd;

  // background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  // background-size: 100% 100%;
  // margin-bottom: -5px;
  .text1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 0px;
    margin-bottom: 10px;
    // border: 1px solid red;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/frontpage/titlebg.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 25px;
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
