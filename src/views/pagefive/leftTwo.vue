<template>
  <div class="leftThree">
    <div class="text1">
      异常订单统计

      <el-tooltip class="box-item" effect="dark" content="近一年" placement="right">
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
import { reqAbnormalTransLineyearData } from '@/api/pagefive'
let Echarts = ref(null)
const getData = async () => {
  let res = await reqAbnormalTransLineyearData()
  console.log('近12个月异常订单', res)
}
const getChart = () => {
  const myChart = echarts.init(Echarts.value)
  const tooltipBg =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAdCAYAAACUoyOLAAABd0lEQVRoge2bW27CMBBFZ0xeBlRUCdhNf7qWbqPtBzvoKvtURRWSkDRxdQlIVN1APdwjZwM+Gscfx3p793QjIpsQhvW+Lvu+a0OQIFjkn6NYKpM009zPJ6ruVUTuEwjd17tltX1r63Lbd/smSKDRaFCVNC/UzxeT6WK1zP1sk2BCIfTr/fl7V372XVMNlBoRkFpMXdfUB2lZ4dcJjlxMKIRW24++rashUGo0qKpkfhSaFl79Vdkn+IfiyMWEQmjb7IZL36gYSXOv8AifbrwUjR8nNE5COHMoQRxvucYIIu7S98AilGoQSjUIpRqEUg1CqQahVINQqkEo1SCUahBKNQilGoRSDUKpBqFUg1CqQRwyQ2IIFXF6iEfHDxETiQ/VM4eikiAERjeKzPBUpbFVioexJpw6+INH+ExQdiMEPnWjqNLY/UbEsfudza8PHuEzQaqPsluO3SgL/cj4XejD5xueXTwg1c8Kv0IIzLc0EfH3Lc2LiDz+AN+rpy0EZYVRAAAAAElFTkSuQmCC'
  let category = ['久其金建', '久其', '久其数字科技', '久其蜂语网络科技', '小数字']
  let mainData = [2000, 5000, 4000, 1000, 100]
  const wid = 50
  //贝塞尔曲线的y偏移
  let cpy = 5

  const CubeFront = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      let xAxisPoint = shape.xAxisPoint
      let c0 = [shape.x + wid / 2, shape.y] //右上
      let c1 = [shape.x - wid / 2, shape.y] //左上
      let c2 = [shape.x - wid / 2, xAxisPoint[1] - cpy] //左下
      let c3 = [shape.x + wid / 2, xAxisPoint[1] - cpy] //右下

      ctx
        .moveTo(c2[0], c2[1])
        .bezierCurveTo(
          shape.x - wid / 2 + cpy,
          xAxisPoint[1],
          shape.x + wid / 2 - cpy,
          xAxisPoint[1],
          c3[0],
          c3[1]
        )
        .lineTo(c0[0], c0[1])
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .closePath()
    }
  })

  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      //贝塞尔曲线的y偏移
      let c0 = [shape.x + wid / 2, shape.y] //右点
      let c1 = [shape.x - wid / 2, shape.y] //左点

      ctx
        .moveTo(c1[0], c1[1])
        .bezierCurveTo(
          shape.x - wid / 2,
          shape.y + cpy,
          shape.x + wid / 2,
          shape.y + cpy,
          c0[0],
          c0[1]
        )
      ctx
        .moveTo(c1[0], c1[1])
        .bezierCurveTo(
          shape.x - wid / 2,
          shape.y - cpy,
          shape.x + wid / 2,
          shape.y - cpy,
          c0[0],
          c0[1]
        )
    }
  })

  echarts.graphic.registerShape('CubeFront', CubeFront)
  echarts.graphic.registerShape('CubeTop', CubeTop)

  let barColor = '#387EE7'
  let barGridientColor = '#122A54'
  let shadowColor = 'rgba(0,255,248,1)'
  let renderItem = (params, api) => {
    const location = api.coord([api.value(0), api.value(1)])
    location[0] = location[0] + wid * 0
    const xlocation = api.coord([api.value(0), 0])
    xlocation[0] = xlocation[0] + wid * 0
    return {
      type: 'group',
      children: [
        {
          type: 'CubeFront',
          shape: {
            x: location[0],
            y: location[1],
            xAxisPoint: xlocation
          },
          style: {
            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: barColor
              },
              {
                offset: 0,
                color: barGridientColor
              }
            ]),

            stroke: shadowColor,
            lineWidth: 1
          }
        },

        {
          type: 'CubeTop',
          shape: {
            x: location[0],
            y: location[1],
            xAxisPoint: xlocation
          },
          style: {
            fill: shadowColor,
            stroke: shadowColor,
            lineWidth: 1
          }
        }
      ]
    }
  }
  let shadowBlur = 50
  let renderItem1 = (params, api) => {
    const location = api.coord([api.value(0), api.value(1)])
    location[0] = location[0] + wid * 0
    const xlocation = api.coord([api.value(0), 0])
    xlocation[0] = xlocation[0] + wid * 0
    return {
      type: 'group',
      children: [
        {
          type: 'CubeLeft',
          shape: {
            x: location[0],
            y: location[1],
            xAxisPoint: xlocation
          },
          style: {
            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: barColor
              },
              {
                offset: 0,
                color: barGridientColor
              }
            ]),
            shadowColor,
            shadowBlur,
            shadowOffsetY: 0,
            stroke: shadowColor,
            lineWidth: 1
          }
        },
        {
          type: 'CubeRight',
          shape: {
            x: location[0],
            y: location[1],
            xAxisPoint: xlocation
          },
          style: {
            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: barColor
              },
              {
                offset: 0,
                color: barGridientColor
              }
            ]),
            shadowColor,
            shadowBlur,
            shadowOffsetX: 0,
            stroke: shadowColor,
            lineWidth: 1
          }
        },
        {
          type: 'CubeTop',
          shape: {
            x: location[0],
            y: location[1],
            xAxisPoint: xlocation
          },
          style: {
            fill: shadowColor,
            shadowColor,
            shadowBlur,
            shadowOffsetY: 0,
            stroke: shadowColor,
            lineWidth: 1
          }
        }
      ]
    }
  }
  const option = {
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
    color: ['#fff'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    grid: {
      left: 20,
      right: 40,

      // top: 107,
      containLabel: true
    },
    legend: {
      right: 'center',
      itemWidth: 20,
      itemHeight: 16,
      itemGap: 50,
      gap: 50,
      textStyle: {
        color: '#fff',
        fontSize: 16
      }
    },
    xAxis: [
      {
        type: 'category',
        data: ['10', '11', '12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'], //数据
        // axisTick: true,
        axisLine: {
          // show: true
        },
        axisLabel: {
          fontSize: 14,
          color: '#fff'
        }
      }
    ],
    yAxis: [
      {
        name: '',
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          interval: '0',
          lineStyle: {
            color: ['rgba(38, 54, 122, .58)'],
            type: 'dashed',
            width: 1
          }
        },
        axisLabel: {
          fontSize: 14,
          color: '#fff'
        }
      }
    ],
    series: [
      {
        name: '',
        type: 'bar',
        barWidth: 18,
        data: [
          23388, 25366, 22977, 21485, 18758, 19374, 20702, 26968, 27994, 32519, 31512, 32213, 10360
        ],
        z: 1,
        itemStyle: {
          normal: {
            opacity: 0.8,
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(120, 232, 254 , 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 255, 255, 0.8)'
                }
              ]
            },
            barBorderRadius: [8, 8, 0, 0]
          }
        },
        label: {
          // show: true,
          color: 'rgba(0, 0, 0, 1)',
          fontWeight: 600,
          position: 'outside'
        }
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

<style lang="less" scoped>
svg {
  position: relative;
  top: 4px;
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
