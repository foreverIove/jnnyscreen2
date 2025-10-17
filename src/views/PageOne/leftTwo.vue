<template>
  <div class="leftThree">
    <div class="text1">运营商容量排名</div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
// reqTopTenOperatorByCapacity
import { reqTopTenOperatorByCapacity } from '@/api/pageone'
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
  const tooltipBg =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAdCAYAAACUoyOLAAABd0lEQVRoge2bW27CMBBFZ0xeBlRUCdhNf7qWbqPtBzvoKvtURRWSkDRxdQlIVN1APdwjZwM+Gscfx3p793QjIpsQhvW+Lvu+a0OQIFjkn6NYKpM009zPJ6ruVUTuEwjd17tltX1r63Lbd/smSKDRaFCVNC/UzxeT6WK1zP1sk2BCIfTr/fl7V372XVMNlBoRkFpMXdfUB2lZ4dcJjlxMKIRW24++rashUGo0qKpkfhSaFl79Vdkn+IfiyMWEQmjb7IZL36gYSXOv8AifbrwUjR8nNE5COHMoQRxvucYIIu7S98AilGoQSjUIpRqEUg1CqQahVINQqkEo1SCUahBKNQilGoRSDUKpBqFUg1CqQRwyQ2IIFXF6iEfHDxETiQ/VM4eikiAERjeKzPBUpbFVioexJpw6+INH+ExQdiMEPnWjqNLY/UbEsfudza8PHuEzQaqPsluO3SgL/cj4XejD5xueXTwg1c8Kv0IIzLc0EfH3Lc2LiDz+AN+rpy0EZYVRAAAAAElFTkSuQmCC'
  let category = [
    '济南特来电新能源有限公司',
    '国网（山东）电动汽车服务有限公司',
    '星星充电',
    '山东科耐新能源有限公司',
    '济南碧辟小桔新能源有限责任公司',
    '华安智能泊车(济南)有限公司',
    '济南银龙电力工程有限公司',
    '山东中油兴隆能源有限责任公司',
    '华能特来电（山东）能源有限公司',
    '山东亿联数字能源科技有限公司'
  ]
  let mainData = [369445, 299652, 61344, 35928, 29880, 27630, 21501, 20640, 14700, 14070]
  const wid = 20
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
      top: '15%',
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
        interval: 0, // 或者设置为 1
        formatter: function (value) {
          return [value.slice(0, 4), '....'].join('')
        },
        rotate: 45,
        margin: 15,
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      }
    },
    yAxis: {
      type: 'value',
      show: true,
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.2)', // 线的颜色
          width: 2, // 线的宽度
          type: 'dashed' // 线的类型，'dashed' 表示虚线
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
            return params.dataIndex % 2 === 0
              ? 'rgba(14, 209, 211, 0.8)'
              : 'rgba(1, 135, 213, 1.00)'
          }
        },
        data: mainData
      }
    ]
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  let res = await reqTopTenOperatorByCapacity()
  console.log(res, '运营商容量排名')
}
onMounted(() => {
  setTimeout(() => {
    getChart()
  }, 500)
  getData()
})
</script>

<style lang="less" scoped>
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
