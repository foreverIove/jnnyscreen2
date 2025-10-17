<template>
  <div class="leftThree">
    <div class="text1" style="color: #fff">
      各时段电量统计
      <el-tooltip class="box-item" effect="dark" content="近一月" placement="right">
        <el-icon :size="20">
          <QuestionFilled />
        </el-icon>
      </el-tooltip>
    </div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>
<script setup>
// import { reactive, ref, onMounted } from 'vue'
import * as echarts from 'echarts' // echarts theme
import { useTimer } from '@/hooks/useMove3.ts'
import { virtualList } from '@/hooks/VirtualList.ts'
// import { useTimer } from 'scroll_cxs_v3'
import 'echarts-gl'
import { onMounted, reactive, ref, watch, nextTick } from 'vue'
// import { nextTick } from 'process'
import { reqThirtyDaysEnergyPeriodData } from '@/api/pageone'

let Echarts = ref(null)
let hours = ref([
  '09-07',
  '09-08',
  '09-09',
  '09-10',
  '09-11',
  '09-12',
  '09-13',
  '09-14',
  '09-15',
  '09-16',
  '09-17',
  '09-18',
  '09-19',
  '09-20',
  '09-21',
  '09-22',
  '09-23',
  '09-24',
  '09-25',
  '09-26',
  '09-27',
  '09-28',
  '09-29',
  '09-30',
  '10-01',
  '10-02',
  '10-03',
  '10-04',
  '10-05',
  '10-06',
  '10-07'
])
let days = ref(['尖', '峰', '平', '谷', '深'])
let data = ref([
  [0.0, 0.0, 9087.03],
  [0.0, 1.0, 31411.13],
  [0.0, 2.0, 62303.32],
  [0.0, 3.0, 71286.44],
  [0.0, 4.0, 21444.8],
  [1.0, 0.0, 9001.41],
  [1.0, 1.0, 29902.69],
  [1.0, 2.0, 65680.09],
  [1.0, 3.0, 66070.68],
  [1.0, 4.0, 21086.4],
  [2.0, 0.0, 19674.8],
  [2.0, 1.0, 49341.41],
  [2.0, 2.0, 96556.46],
  [2.0, 3.0, 72969.16],
  [2.0, 4.0, 23242.3],
  [3.0, 0.0, 10009.24],
  [3.0, 1.0, 33045.28],
  [3.0, 2.0, 66803.06],
  [3.0, 3.0, 70296.72],
  [3.0, 4.0, 24507.1],
  [4.0, 0.0, 9782.09],
  [4.0, 1.0, 33261.93],
  [4.0, 2.0, 68014.46],
  [4.0, 3.0, 67406.24],
  [4.0, 4.0, 22808.9],
  [5.0, 0.0, 10633.92],
  [5.0, 1.0, 36651.21],
  [5.0, 2.0, 79551.3],
  [5.0, 3.0, 69597.03],
  [5.0, 4.0, 25479.7],
  [6.0, 0.0, 9956.28],
  [6.0, 1.0, 39299.33],
  [6.0, 2.0, 71275.49],
  [6.0, 3.0, 75734.51],
  [6.0, 4.0, 22835.6],
  [7.0, 0.0, 9551.86],
  [7.0, 1.0, 42001.77],
  [7.0, 2.0, 72740.91],
  [7.0, 3.0, 73369.08],
  [7.0, 4.0, 24426.7],
  [8.0, 0.0, 9483.59],
  [8.0, 1.0, 43826.27],
  [8.0, 2.0, 74153.91],
  [8.0, 3.0, 74871.47],
  [8.0, 4.0, 23077.6],
  [9.0, 0.0, 1417314.41],
  [9.0, 1.0, 164124.29],
  [9.0, 2.0, 1134237.07],
  [9.0, 3.0, 71668.6],
  [9.0, 4.0, 21932.2],
  [10.0, 0.0, 1111351.78],
  [10.0, 1.0, 35132.62],
  [10.0, 2.0, 75039.83],
  [10.0, 3.0, 72200.83],
  [10.0, 4.0, 1124750.0],
  [11.0, 0.0, 10010.52],
  [11.0, 1.0, 37784.16],
  [11.0, 2.0, 73587.23],
  [11.0, 3.0, 76658.43],
  [11.0, 4.0, 24855.6],
  [12.0, 0.0, 302758.02],
  [12.0, 1.0, 217375.59],
  [12.0, 2.0, 246020.18],
  [12.0, 3.0, 186167.45],
  [12.0, 4.0, 134499.0],
  [13.0, 0.0, 11304.06],
  [13.0, 1.0, 38746.64],
  [13.0, 2.0, 79558.97],
  [13.0, 3.0, 84349.02],
  [13.0, 4.0, 26055.5],
  [14.0, 0.0, 9267.09],
  [14.0, 1.0, 39435.77],
  [14.0, 2.0, 75478.95],
  [14.0, 3.0, 79544.96],
  [14.0, 4.0, 23925.9],
  [15.0, 0.0, 10701.94],
  [15.0, 1.0, 46712.76],
  [15.0, 2.0, 86972.49],
  [15.0, 3.0, 100375.16],
  [15.0, 4.0, 25621.9],
  [16.0, 0.0, 9715.45],
  [16.0, 1.0, 38971.75],
  [16.0, 2.0, 71274.08],
  [16.0, 3.0, 73761.75],
  [16.0, 4.0, 20620.6],
  [17.0, 0.0, 8458.97],
  [17.0, 1.0, 33459.77],
  [17.0, 2.0, 71200.96],
  [17.0, 3.0, 76493.56],
  [17.0, 4.0, 26403.6],
  [18.0, 0.0, 17827.78],
  [18.0, 1.0, 42559.07],
  [18.0, 2.0, 75740.86],
  [18.0, 3.0, 421897.4],
  [18.0, 4.0, 25521.8],
  [19.0, 0.0, 10548.86],
  [19.0, 1.0, 44749.25],
  [19.0, 2.0, 81711.98],
  [19.0, 3.0, 87789.48],
  [19.0, 4.0, 23950.1],
  [20.0, 0.0, 9743.33],
  [20.0, 1.0, 49967.71],
  [20.0, 2.0, 81667.37],
  [20.0, 3.0, 90508.05],
  [20.0, 4.0, 23911.0],
  [21.0, 0.0, 10752.4],
  [21.0, 1.0, 43923.93],
  [21.0, 2.0, 78830.49],
  [21.0, 3.0, 80427.17],
  [21.0, 4.0, 25644.2],
  [22.0, 0.0, 11572.54],
  [22.0, 1.0, 45208.16],
  [22.0, 2.0, 80944.5],
  [22.0, 3.0, 79794.06],
  [22.0, 4.0, 23898.0],
  [23.0, 0.0, 15461.27],
  [23.0, 1.0, 65805.06],
  [23.0, 2.0, 101978.58],
  [23.0, 3.0, 93497.63],
  [23.0, 4.0, 24705.9],
  [24.0, 0.0, 19089.86],
  [24.0, 1.0, 73467.81],
  [24.0, 2.0, 137306.9],
  [24.0, 3.0, 112291.0],
  [24.0, 4.0, 26285.4],
  [25.0, 0.0, 18178.53],
  [25.0, 1.0, 71364.9],
  [25.0, 2.0, 119871.11],
  [25.0, 3.0, 97573.04],
  [25.0, 4.0, 28313.3],
  [26.0, 0.0, 19890.24],
  [26.0, 1.0, 70805.27],
  [26.0, 2.0, 117746.98],
  [26.0, 3.0, 100901.48],
  [26.0, 4.0, 26851.7],
  [27.0, 0.0, 19492.46],
  [27.0, 1.0, 75498.63],
  [27.0, 2.0, 127350.46],
  [27.0, 3.0, 92815.34],
  [27.0, 4.0, 26610.5],
  [28.0, 0.0, 1875600.56],
  [28.0, 1.0, 73787.55],
  [28.0, 2.0, 117598.09],
  [28.0, 3.0, 99079.21],
  [28.0, 4.0, 26429.9],
  [29.0, 0.0, 16435.57],
  [29.0, 1.0, 68918.82],
  [29.0, 2.0, 111311.49],
  [29.0, 3.0, 92230.76],
  [29.0, 4.0, 26541.4],
  [30.0, 0.0, 11800.17],
  [30.0, 1.0, 18441.24],
  [30.0, 2.0, 67905.23],
  [30.0, 3.0, 70465.38],
  [30.0, 4.0, 26981.8]
])

// ----------------------------
const getData = async () => {
  // let res = await reqThirtyDaysEnergyPeriodData()
  // console.log('各时段充电量统计', res)
  // if (res.code == 0) {
  //   hours.value = res.data.yData
  //   days.value = res.data.xData
  //   data.value = res.data.zData
  //   getChart()
  // }
}
const getChart = () => {
  let myChart = echarts.init(Echarts.value)

  const option = {
    // title: {
    //   text: '2月份运营报告',
    //   textStyle: {
    //     fontSize: 18,
    //     fontWeight: 600,
    //     fontFamily: 'siyuanheiti_Thin'
    //   },
    //   subtext: '100万',
    //   subtextStyle: {
    //     fontSize: 16
    //   }
    // },
    tooltip: {
      show: false
    },
    visualMap: {
      show: false,
      max: 2100000,
      inRange: {
        color: ['#4371AE', '#4371AE', '#4371AE', '#7FBEE5', '#FFDA85', '#F6AB5F']
      }
    },
    xAxis3D: {
      name: '',
      type: 'category',
      data: hours.value
    },
    yAxis3D: {
      name: '',
      type: 'category',
      data: days.value
    },
    zAxis3D: {
      name: '',
      type: 'value'
    },
    grid3D: {
      boxWidth: 100,
      boxDepth: 60,
      axisTick: {
        show: false
      },
      roam: true,
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0)',
          width: 1
        }
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 14
        }
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true
        },
        ambient: {
          intensity: 0.7,
          shadow: true
        }
      },
      viewControl: {
        alpha: 15,
        beta: 40,
        autoRotate: false,
        zoomSensitivity: 1,
        autoRotateAfterStill: 5,
        distance: 250
      }
    },
    series: [
      {
        type: 'bar3D',
        name: '数量',
        data: data.value.map(function (item) {
          return {
            value: [item[0], item[1], item[2]]
          }
        }),
        shading: 'lambert',
        label: {
          // show: true,
          distance: 1,
          textStyle: {
            color: '#fff',
            fontSize: 18,
            borderWidth: 0,
            borderColor: 'none',
            backgroundColor: 'rgba(255,255,255,0)',
            fontFamily: 'impact, Simhei'
          }
        },
        itemStyle: {
          opacity: 1
        }
        /*emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }*/
      }
    ]
  }

  option && myChart.setOption(option)
}

onMounted(() => {
  getData()
  nextTick(() => {
    getChart()
  })
})
</script>

<style lang="less" scoped>
svg {
  position: relative;
  top: 4px;
}
.text1 {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  // margin-bottom: 10px;
  // border: 1px solid red;
  height: 45px;
  line-height: 35px;
  background: url(@/assets/frontpage/titlebg.png) 100% no-repeat;
  background-size: 100% 100%;
  padding-top: 3px;
  padding-left: 40px;
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
.chart-div {
  /*background: -webkit-linear-gradient(top, #041133, #041133, #1b1b47);*/
  // background-color: rgba(4, 17, 51, 0.5);
  // min-height: calc(~'100%');
  transform: rotateX(45deg);
  height: 400px;
  margin-top: -60px;
}
/*chrome 和Safari*/
.scrollView::-webkit-scrollbar {
  width: 0 !important;
}
/*IE 10+*/
.scrollView {
  -ms-overflow-style: none;
}
/*Firefox*/
.scrollView {
  overflow: -moz-scrollbars-none;
}
// 祖先
.scrollView {
  // width: 200px;
  height: 200px;
  // background-color: red;
  overflow-y: scroll;
  position: relative;
}
// 父组件
.scrollable-div {
  width: 370px;
  height: 200px;
  overflow-y: auto;
  // border: 1px solid #000;
  position: sticky;
  top: 0px;
}

.leftThree {
  // box-shadow: inset 0 0 5px rgb(252, 250, 250);
  padding-top: 10px;
  height: 315px;
  //   border: 1px solid #acb3bd;
  // background: #0049ac;
  // background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  // background-size: 100% 100%;
  margin-bottom: -5px;
  overflow: hidden;
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
      border-bottom: 1px solid rgba(#3fc2ff, 0.2);
      //   margin-bottom: 6px;
      background-color: #000;

      span {
        //flex: 1;
      }
    }
    .item:hover {
      // border: 1px solid #fff;
      box-shadow: inset 0 0 5px rgba(0, 204, 255, 0.8), inset 0 0 10px rgba(0, 204, 255, 0.6),
        inset 0 0 15px rgba(0, 204, 255, 0.4), inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
    }
  }
}
</style>
