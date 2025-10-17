<template>
  <div class="chart-container">
    <div class="chart-flow" ref="Echarts"></div>
    <div class="bg">
      <img src="../../assets/images/PageOne/leftOnebg.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
let Echarts = ref(null)
const getChart = () => {
  const myChart = echarts.init(Echarts.value)
  let value = 48
  const option = {
    grid: {
      // left: 20,
      right: 40,
      bottom: '5',
      // top: 107,
      containLabel: true
    },
    // backgroundColor: '000',
    title: {
      text: `${value}`,
      subtext: '今日注册数',
      left: 'center',
      top: '100', //top待调整
      textStyle: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'DINAlternate-Bold'
      },
      subtextStyle: {
        color: '#ff',
        fontSize: 16,
        fontFamily: 'PingFangSC-Regular',
        top: 'center'
      },
      itemGap: 14 //主副标题间距
    },
    xAxis: {
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      }
      // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    series: [
      // 内圆
      {
        type: 'pie',
        radius: ['0', '50%'],
        center: ['50%', '50%'],
        z: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#1147A1'
              },
              {
                offset: 0.5,
                color: '#423DB3'
              },
              {
                offset: 1,
                color: '#1147A1'
              }
            ]),
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [100]
      },
      // 进度圈
      {
        type: 'pie',
        clockWise: true,
        radius: ['60%', '55%'],
        data: [
          {
            value: value,
            itemStyle: {
              normal: {
                borderWidth: 5,
                borderColor: {
                  colorStops: [
                    {
                      offset: 0,
                      color: '#fff' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#029BF0' // 100% 处的颜色
                    }
                  ]
                },
                color: {
                  // 完成的圆环的颜色
                  colorStops: [
                    {
                      offset: 0,
                      color: '#fff' || '#fff' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#029BF0' || '#fff' // 100% 处的颜色
                    }
                  ]
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          },
          {
            name: '',
            value: value*0.25,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }
        ]
      },
      //刻度尺
      {
        // name: "白色圈刻度",
        type: 'gauge',
        radius: '87%',
        startAngle: 225, //刻度起始
        endAngle: -134.8, //刻度结束
        z: 4,
        axisTick: {
          show: true,
          lineStyle: {
            width: 2,
            color: 'rgba(1,244,255, 0.9)'
          }
        },
        splitLine: {
          length: -16, //刻度节点线长度
          lineStyle: {
            width: 2,
            color: 'rgba(1,244,255, 0.9)'
          } //刻度节点线
        },
        axisLabel: {
          color: 'rgba(255,255,255,0)',
          fontSize: 12
        }, //刻度节点文字颜色
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            opacity: 0
          }
        },
        detail: {
          show: false
        },
        data: [
          {
            value: 0,
            name: ''
          }
        ]
      },
      // 刻度圈
      {
        type: 'pie',
        radius: ['0%', '73%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: false,
            textStyle: {
              fontWeight: 'bold'
            }
          }
        },
        itemStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0.05,
                  color: 'rgba(32,36,107, 0.2)'
                },
                {
                  offset: 0.5,
                  color: 'rgba(32,36,107,0.3)'
                },
                {
                  offset: 0.95,
                  color: 'rgba(32,36,107, 0.2)'
                }
              ]
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 3235
          }
        ]
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
.bg {
  position: absolute;
  left: 25px;
  top: 25px;
  animation: rotate 6s linear infinite; /* 动画效果 */
}
@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1); /* 初始状态 */
  }
  50% {
    transform: rotate(180deg) scale(1.2); /* 中间状态，放大 */
  }
  100% {
    transform: rotate(360deg) scale(1); /* 结束状态，恢复原始大小 */
  }
}
.chart-flow {
  height: 240px;
  width: 240px;
}
.chart-container {
  position: relative;
}
</style>
