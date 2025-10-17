<template>
  <div class="leftThree">
    <div class="text1">
      充电时段行为分析<el-tooltip class="box-item" effect="dark" content="近一周" placement="right">
        <el-icon :size="20">
          <QuestionFilled />
        </el-icon>
      </el-tooltip>
    </div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
//
import { reqPeriodSartAndStop } from '@/api/ParkingComprehensive'
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

  let c = -23
  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint
      const c0 = [shape.x + c, shape.y]
      const c1 = [shape.x - 8 + c, shape.y - 8]
      const c2 = [xAxisPoint[0] - 8 + c, xAxisPoint[1] - 8]
      const c3 = [xAxisPoint[0] + c, xAxisPoint[1]]
      ctx
        .moveTo(c0[0], c0[1])
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .closePath()
    }
  })
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint
      const c1 = [shape.x + c, shape.y]
      const c2 = [xAxisPoint[0] + c, xAxisPoint[1]]
      const c3 = [xAxisPoint[0] + 13 + c, xAxisPoint[1] - 4]
      const c4 = [shape.x + 13 + c, shape.y - 4]
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath()
    }
  })
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x + c, shape.y]
      const c2 = [shape.x + 13 + c, shape.y - 4]
      const c3 = [shape.x + 5 + c, shape.y - 12]
      const c4 = [shape.x - 8 + c, shape.y - 8]
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath()
    }
  })
  echarts.graphic.registerShape('CubeLeft', CubeLeft)
  echarts.graphic.registerShape('CubeRight', CubeRight)
  echarts.graphic.registerShape('CubeTop', CubeTop)
  const CubeLeft1 = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint
      const c0 = [shape.x, shape.y]
      const c1 = [shape.x - 8, shape.y - 8]
      const c2 = [xAxisPoint[0] - 8, xAxisPoint[1] - 8]
      const c3 = [xAxisPoint[0], xAxisPoint[1]]
      ctx
        .moveTo(c0[0], c0[1])
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .closePath()
    }
  })
  const CubeRight1 = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint
      const c1 = [shape.x, shape.y]
      const c2 = [xAxisPoint[0], xAxisPoint[1]]
      const c3 = [xAxisPoint[0] + 13, xAxisPoint[1] - 4]
      const c4 = [shape.x + 13, shape.y - 4]
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath()
    }
  })
  const CubeTop1 = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y]
      const c2 = [shape.x + 13, shape.y - 4]
      const c3 = [shape.x + 5, shape.y - 12]
      const c4 = [shape.x - 8, shape.y - 8]
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath()
    }
  })
  echarts.graphic.registerShape('CubeLeft1', CubeLeft1)
  echarts.graphic.registerShape('CubeRight1', CubeRight1)
  echarts.graphic.registerShape('CubeTop1', CubeTop1)
  // echarts.graphic.registerShape('CubeTop2', CubeTop2)
  const option = {
    // backgroundColor: 'rgba(255,255,255,0.5)', //transparent
    title: {
      // text: '',
      subtext: '',
      x: '10px',
      y: '0px',

      textStyle: {
        fontSize: 12,
        fontWeight: 'bolder',
        color: '#101010' // 主标题文字颜色
      },
      subtextStyle: {
        color: '' // 副标题文字颜色
      }
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '5%',
      top: '5%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    dataZoom: [
      {
        type: 'slider', //隐藏或显示（true）组件
        show: true,
        backgroundColor: 'rgb(19, 63, 100)', // 组件的背景颜色。
        fillerColor: 'rgb(16, 171, 198)', // 选中范围的填充颜色。
        borderColor: 'rgb(19, 63, 100)', // 边框颜色
        showDetail: false, //是否显示detail，即拖拽时候显示详细数值信息
        startValue: 0,
        endValue: 5,
        filterMode: 'empty',
        width: '50%', //滚动条高度
        height: 8, //滚动条显示位置
        left: 'center',
        zoomLoxk: true, // 是否锁定选择区域（或叫做数据窗口）的大小
        handleSize: 0, //控制手柄的尺寸
        bottom: 3 // dataZoom-slider组件离容器下侧的距离
      },
      {
        //没有下面这块的话，只能拖动滚动条，鼠标滚轮在区域内不能控制外部滚动条
        type: 'inside',
        zoomOnMouseWheel: false, //滚轮是否触发缩放
        moveOnMouseMove: true, //鼠标滚轮触发滚动
        moveOnMouseWheel: true
      }
    ],
    xAxis: {
      name: '',
      data: [
        '零点',
        '1点',
        '2点',
        '3点',
        '4点',
        '5点',
        '6点',
        '7点',
        '8点',
        '9点',
        '10点',
        '11点',
        '12点',
        '13点',
        '14点',
        '15点',
        '16点',
        '17点',
        '18点',
        '19点',
        '20点',
        '21点',
        '22点',
        '23点'
      ],
      type: 'category',
      boundaryGap: true,
      nameTextStyle: {
        color: '#fff',
        padding: [0, 0, 6, 0]
      },
      axisTick: {
        show: false,
        inside: false, // 控制小标记是否在grid里
        length: 5, // 属性length控制线长
        lineStyle: {
          // 属性lineStyle控制线条样式
          color: '#333',
          width: 1
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.2)'
        }
      },
      axisLine: {
        show: false,
        symbol: ['none', 'arrow'],
        symbolSize: [10, 15],
        symbolOffset: [0, 0],
        lineStyle: {
          width: 2,
          color: 'rgba(255,255,255,0.6)'
        }
      },
      axisLabel: {
        interval: 0,
        rotate: 0,
        // margin: 8,
        textStyle: {
          show: true,
          color: '#fff',
          fontSize: '12'
        }
      }
    },
    yAxis: {
      name: '',
      type: 'value',
      boundaryGap: ['0%', '20%'],
      nameTextStyle: {
        color: '#fff',
        padding: [0, 0, 6, 0]
      },
      axisTick: {
        show: false,
        inside: false, // 控制小标记是否在grid里
        length: 5, // 属性length控制线长
        lineStyle: {
          // 属性lineStyle控制线条样式
          color: '#333',
          width: 1
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#E8E8E8'
        }
      },
      axisLine: {
        show: false,
        symbol: ['none', 'arrow'],
        symbolSize: [10, 15],
        symbolOffset: [0, 0],
        lineStyle: {
          width: 2,
          color: 'rgba(255,255,255,0.6)'
        }
      },
      axisLabel: {
        textStyle: {
          show: true,
          color: '#11FFFB',
          fontSize: '12'
        }
      }
    },
    series: [
      {
        type: 'custom',
        name: '启动',
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)])
          return {
            type: 'group',
            children: [
              {
                type: 'CubeLeft',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: '#0C737A'
                }
              },
              {
                type: 'CubeRight',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: '#19E0ED'
                }
              },
              {
                type: 'CubeTop',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: '#8DC1FF'
                }
              }
            ]
          }
        },

        data: [
          8036, 6757, 3796, 2726, 2609, 2732, 3268, 5524, 7551, 9533, 13057, 18141, 19923, 16479,
          13006, 11744, 10476, 9366, 8368, 7842, 7293, 9711, 7817, 8395
        ]
      },
      {
        type: 'custom',

        name: '停止',
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)])
          return {
            type: 'group',
            children: [
              {
                type: 'CubeLeft1',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: '#268117'
                }
              },
              {
                type: 'CubeRight1',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: '#C1730D'
                }
              },
              {
                type: 'CubeTop1',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: '#FFD093'
                }
              }
            ]
          }
        },
        data: [
          8638, 8088, 6451, 4957, 3444, 3003, 3124, 4123, 5838, 8601, 10639, 14529, 18763, 19297,
          15301, 13095, 11226, 10089, 8348, 7594, 7344, 7058, 7303, 7296
        ]
      }
    ]
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  const res = await reqPeriodSartAndStop()
  if (res.code === 0) {
    console.log(res, '充电时段行为分析')
  }
}
onMounted(() => {
  getData()
  setTimeout(() => {
    getChart()
  }, 500)
})
</script>

<style lang="less" scoped>
svg {
  position: relative;
  top: 4px;
}
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
