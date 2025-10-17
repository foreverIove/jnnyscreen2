<template>
  <div class="leftThree">
    <div class="text1">运营商费用排行</div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { reqTopTenOperatorByCost } from '@/api/BusinessCollaboration'
let Echarts = ref(null)

const getChart = () => {
  const myChart = echarts.init(Echarts.value)
  const tooltipBg =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAdCAYAAACUoyOLAAABd0lEQVRoge2bW27CMBBFZ0xeBlRUCdhNf7qWbqPtBzvoKvtURRWSkDRxdQlIVN1APdwjZwM+Gscfx3p793QjIpsQhvW+Lvu+a0OQIFjkn6NYKpM009zPJ6ruVUTuEwjd17tltX1r63Lbd/smSKDRaFCVNC/UzxeT6WK1zP1sk2BCIfTr/fl7V372XVMNlBoRkFpMXdfUB2lZ4dcJjlxMKIRW24++rashUGo0qKpkfhSaFl79Vdkn+IfiyMWEQmjb7IZL36gYSXOv8AifbrwUjR8nNE5COHMoQRxvucYIIu7S98AilGoQSjUIpRqEUg1CqQahVINQqkEo1SCUahBKNQilGoRSDUKpBqFUg1CqQRwyQ2IIFXF6iEfHDxETiQ/VM4eikiAERjeKzPBUpbFVioexJpw6+INH+ExQdiMEPnWjqNLY/UbEsfudza8PHuEzQaqPsluO3SgL/cj4XejD5xueXTwg1c8Kv0IIzLc0EfH3Lc2LiDz+AN+rpy0EZYVRAAAAAElFTkSuQmCC'
  let category = [
    '国网（山东）电动汽车服务有限公司',
    '济南特来电新能源有限公司',
    '星星充电',
    '济南碧辟小桔新能源有限责任公司',
    '济南易易互联科技有限责任公司',
    '山东乾硕物流有限公司',
    '山东原电新能源科技有限公司',
    '华安智能泊车(济南)有限公司',
    '济南蔚来汽车销售服务有限公司',
    '山东科耐新能源有限公司'
  ]
  let mainData = [
    63113373.64, 33108480.09, 19127350.33, 10202628.62, 6690228.34, 6410295.16, 5875295.98,
    5149639.71, 4744163.66, 4105406.03
  ]
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
    // backgroundColor: 'rgba(0,0,0,.8)',
    tooltip: {
      show: true,
      padding: [5, 10],
      position: (point, params, dom, rect, size) => {
        let y = size.contentSize[1]
        return [rect.x, rect.y - y - 30]
      },
      formatter: function (params) {
        let returnData = ''
        returnData +=
          '<div style="background:url(' +
          tooltipBg +
          ');background-attachment: fixed;background-size: cover;padding:5px 10px;">'
        returnData += `<span style="color: #fff;">${params.name}:</span>`
        returnData += `<span style="color: #fff;">${params.data}</span>`
        returnData += '</div>'
        return returnData
      },
      extraCssText:
        'background:transparent;padding:0px;box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);border:none;'
    },
    grid: {
      left: '5%',
      right: '5%',
      top: '10%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // show: false,
      data: category,
      boundaryGap: true,
      nameTextStyle: {
        color: '#fff',
        padding: [0, 0, 6, 0]
      },
      axisTick: {
        show: true,
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
        show: true,
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
        rotate: 40,
        formatter: function (value) {
          return [value.slice(0, 4), '....'].join('')
        },
        // margin: 8,
        textStyle: {
          show: true,
          color: '#fff',
          fontSize: '12'
        }
      }
    },
    yAxis: {
      type: 'value',
      show: true,
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.3)', // 线的颜色
          width: 2, // 线的宽度
          type: 'dashed' // 线的类型，'dashed' 表示虚线
        }
      }
    },
    series: [
      {
        type: 'custom',
        renderItem,
        data: mainData
      },
      {
        type: 'bar',
        barWidth: wid + 2,
        itemStyle: {
          color: function (params, index) {
            // console.log(params.dataIndex, 999999999)
            // 'rgba(255,255,255,0.3)'
            return params.dataIndex % 2 === 0 ? 'rgba(0,119,185,0.3)' : 'rgba(40,167,69,0.3)'
          }
        },
        data: mainData
      }
    ]
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  let res = await reqTopTenOperatorByCost()
  console.log('运营商费用排行', res)
}
onMounted(() => {
  getData()
  getChart()
})
</script>

<style lang="less" scoped>
.chart-flow {
  height: 100%;
  width: 1000px;
  overflow: hidden;
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
  height: 300px;
  // border: 1px solid #acb3bd;

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
    width: 500px;
    background: url(@/assets/frontpage/titlebg.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 40px;
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
