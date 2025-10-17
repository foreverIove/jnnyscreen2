<template>
  <div class="leftThree">
    <!-- <div class="text1">虚拟列表(性能好)</div> -->
    <div id="main2" class="chart-div" ref="Echarts" :style="{ width: '100%' }" style="" />
  </div>
</template>
<script setup>
// import { reactive, ref, onMounted } from 'vue'
import * as echarts from 'echarts' // echarts theme
import { useTimer } from '@/hooks/useMove3.ts'
import { virtualList } from '@/hooks/VirtualList.ts'
// import { useTimer } from 'scroll_cxs_v3'
import { onMounted, reactive, ref, watch } from 'vue'
// import { reqQueryChgOrderData } from '@/api/operationAnalysis'
onMounted(() => {
  initChart()
})
let Echarts = ref(null)
let chart2 = ref({})
const initChart = () => {
  console.log('initChart77')
  chart2.value = echarts.init(Echarts.value) //真正的

  setOptions2([]) //真正的
}
const setOptions2 = (points) => {
  let hours = [
    '08-08',
    '08-09',
    '08-10',
    '08-11',
    '08-12',
    '08-13',
    '08-14',
    '08-15',
    '08-16',
    '08-17',
    '08-18',
    '08-19',
    '08-20',
    '08-21',
    '08-22',
    '08-23',
    '08-24',
    '08-25',
    '08-26',
    '08-27',
    '08-28',
    '08-29',
    '08-30',
    '08-31',
    '09-01',
    '09-02',
    '09-03'
  ]
  let days = ['尖', '峰', '平', '谷', '深']
  let data = [
    [0, 0, 5],
    [0, 1, 3],
    [0, 2, 1],
    [0, 3, 3],
    [1, 0, 1],
    [1, 1, 2],
    [1, 2, 3],
    [1, 3, 4],
    [2, 0, 2],
    [2, 1, 1],
    [2, 2, 4],
    [2, 3, 3],
    [3, 0, 2],
    [3, 1, 1],
    [3, 2, 1],
    [3, 3, 2],
    //
    [10, 4, 4],
    [15, 3, 1],
    [15, 2, 2],
    [15, 0, 1],
    [15, 1, 3],
    [15, 4, 2],
    [2, 3, 3],
    [3, 0, 2],
    [3, 1, 1],
    [3, 2, 1],
    [3, 3, 2]
  ]

  chart2.value.setOption({
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
      max: 5,
      inRange: {
        color: ['#4371AE', '#4371AE', '#4371AE', '#7FBEE5', '#FFDA85', '#F6AB5F']
      }
    },
    xAxis3D: {
      name: '',
      type: 'category',
      data: hours
    },
    yAxis3D: {
      name: '',
      type: 'category',
      data: days
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
          color: '#ccc',
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
        data: data.map(function (item) {
          return {
            value: [item[0], item[1], item[2]]
          }
        }),
        shading: 'lambert',
        label: {
          show: true,
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
  })
}
//  mounted() {
//     this.initChart()
</script>

<style lang="less" scoped>
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
  box-shadow: inset 0 0 5px rgb(252, 250, 250);
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
      box-shadow:
        inset 0 0 5px rgba(0, 204, 255, 0.8),
        inset 0 0 10px rgba(0, 204, 255, 0.6),
        inset 0 0 15px rgba(0, 204, 255, 0.4),
        inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
    }
  }
}
</style>
