<template>
  <div class="leftThree">
    <div class="text1" style="display: flex">
      时长分析
      <div style="z-index: 9999" @mouseenter="spanShow = true" @mouseleave="spanShow = false">
        <el-tooltip class="box-item" effect="dark" content="近一周" placement="right">
          <el-icon :size="20">
            <QuestionFilled />
          </el-icon>
        </el-tooltip>
      </div>
      <!-- <span v-show="spanShow" style="color: #fff; font-size: 15px">近一周</span> -->
    </div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
// reqPeriodDurationCount
import { reqPeriodDurationCount } from '@/api/ParkingComprehensive'
//
const spanShow = ref(false)
const data1 = [11852, 5364, 6580, 6834, 6678, 4955, 6330, 3214]
const data2 = [11852, 5364, 6580, 6834, 6678, 4955, 6330, 3214]
const xData = ['0~10', '10~20', '20~30', '30~40', '40~50', '50~60', '60~120', '120以上']
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
  /**这个可以改变这两个参数可以改变柱状的大小 */
  const offsetX = 10,
    offsetY = 5
  // 绘制左侧面
  const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      // 会canvas的应该都能看得懂，shape是从custom传入的
      const xAxisPoint = shape.xAxisPoint
      // console.log(shape);
      const c0 = [shape.x, shape.y]
      const c1 = [shape.x - offsetX, shape.y - offsetY]
      const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY]
      const c3 = [xAxisPoint[0], xAxisPoint[1]]
      ctx
        .moveTo(c0[0], c0[1])
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .closePath()
    }
  })
  // 绘制右侧面
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const xAxisPoint = shape.xAxisPoint
      const c1 = [shape.x, shape.y]
      const c2 = [xAxisPoint[0], xAxisPoint[1]]
      const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY]
      const c4 = [shape.x + offsetX, shape.y - offsetY]
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath()
    }
  })
  // 绘制顶面
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0
    },
    buildPath: function (ctx, shape) {
      const c1 = [shape.x, shape.y]
      const c2 = [shape.x + offsetX, shape.y - offsetY] //右点
      const c3 = [shape.x, shape.y - offsetX]
      const c4 = [shape.x - offsetX, shape.y - offsetY]
      ctx
        .moveTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath()
    }
  })
  // 注册三个面图形
  echarts.graphic.registerShape('CubeLeft', CubeLeft)
  echarts.graphic.registerShape('CubeRight', CubeRight)
  echarts.graphic.registerShape('CubeTop', CubeTop)
  const option = {
    backgroundColor: 'rgba(0,0,0,0)', //transparent
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        // console.log(params, '参数')
        return `${params[0].axisValue}: ${params[0].value} `
      },
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '20%',
      top: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisLine: { lineStyle: { color: '#ABCCDD' } },
      axisLabel: { color: '#A5C9DB', fontSize: 14, rotate: 40 },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      name: '单位/t',
      nameTextStyle: { color: '#A5C9DB', fontSize: 14, align: 'left', padding: [0, 0, 0, -30] },
      axisLine: {
        show: false,
        lineStyle: { color: '#b8eaff' }
      },
      min: 0,
      // max: 80000,
      axisLabel: { color: '#A5C9DB', fontSize: 14 },
      splitLine: {
        lineStyle: {
          color: 'rgba(124, 148, 171, 0.6)',
          type: 'dashed'
        }
      }
    },
    series: [
      {
        name: '油耗',
        type: 'bar',
        tooltip: {
          show: false
        },
        itemStyle: {
          color: 'transparent' //transparent
        },
        label: {
          normal: {
            // show: true,
            position: 'top',
            formatter: (e) => {
              return e.value
            },
            fontSize: 16,
            color: '#4DD8FF',
            offset: [0, -25]
          }
        },
        data: data1
      },
      {
        type: 'custom',
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
                  fill: '#1C8D9D'
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
                  fill: '#11FFFB'
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
        data: data2
      }
    ]
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  const res = await reqPeriodDurationCount()
  if (res.code === 0) {
    console.log('时长统计', res)
    getChart()
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
  // position: relative;
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
