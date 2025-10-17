<template>
  <div class="rightTwo">
    <div class="text1">
      互联互通统计
      <el-tooltip class="box-item" effect="dark" content="近30天" placement="right">
        <el-icon :size="20">
          <QuestionFilled />
        </el-icon>
      </el-tooltip>
      <!-- <div style="width: 50px; height: 50px; background-color: red"></div> -->
    </div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { reqHlhtTrans } from '@/api/BusinessCollaboration'
// reqHlhtTrans
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

  let obj = {
    xData: [
      '09-01',
      '09-02',
      '09-03',
      '09-04',
      '09-05',
      '09-06',
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
      '09-24'
    ],
    legend: ['互联互通', '电费'],
    lineData: [
      {
        name: '互联互通',
        data: [
          5, 16, 9, 17, 13, 14, 13, 7, 13, 16, 19, 24, 13, 13, 14, 124, 36, 16, 12, 16, 21, 8, 14,
          22, 25, 32, 25, 23, 31, 32
        ]
      }
    ]
  }
  let colorStop = [
    {
      start: 'rgba(0, 242, 240,0.1)',
      end: 'rgba(0, 242, 240,06)'
    },
    {
      start: 'rgba(255, 219, 14,0.1)',
      end: 'rgba(255, 219, 14, 0.6)'
    },
    {
      start: 'rgba(102, 225, 223,0.02)',
      end: 'rgba(102, 225, 223, 0.6)'
    },
    {
      start: 'rgba(255, 173, 106,0.02)',
      end: 'rgba(255, 173, 106, 0.6)'
    },
    {
      start: 'rgba(255, 224, 171,0.02)',
      end: 'rgba(255, 224, 171, 0.6)'
    },
    {
      start: 'rgba(107, 197, 244,0.02)',
      end: 'rgba(107, 197, 244, 0.6)'
    },
    {
      start: 'rgba(192, 142, 242,0.02)',
      end: 'rgba(192, 142, 242, 0.6)'
    }
  ]
  let serData = []
  obj.lineData.forEach((item, index) => {
    serData.push({
      name: item.name,
      type: 'line',
      stack: 'all',
      showSymbol: true,
      symbolSize: 12,
      symbol: 'none',
      lineStyle: {},
      itemStyle: {
        borderWidth: 2
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
    dataZoom: [
      {
        type: 'slider', //隐藏或显示（true）组件
        show: true,
        backgroundColor: 'rgb(19, 63, 100)', // 组件的背景颜色。
        fillerColor: 'rgb(16, 171, 198)', // 选中范围的填充颜色。
        borderColor: 'rgb(19, 63, 100)', // 边框颜色
        showDetail: false, //是否显示detail，即拖拽时候显示详细数值信息
        startValue: 0,
        endValue: 10,
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
      top: '8%',
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
      data: obj.legend
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
      top: '15%',
      left: '8%',
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
          interval: 1,
          align: 'center',
          margin: 10,
          color: 'rgb(139, 143, 147)',
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
        data: obj.xData
      }
    ],

    yAxis: [
      {
        type: 'value',
        name: '（个）',
        nameTextStyle: {
          //y轴上方单位的颜色
          color: 'rgb(139, 143, 147)'
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
          color: 'rgb(139, 143, 147)',
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
const getData = async () => {
  let res = await reqHlhtTrans()
  if (res.code == 0) {
    console.log('互联互通订单数', res)
  }
}
onMounted(() => {
  getData()
  getChart()
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
.rightTwo {
  // box-shadow: inset 0 0 5px rgb(252, 250, 250);
  padding-top: 10px;
  height: 315px;
  //   border: 1px solid #acb3bd;
  // background: #0049ac;
  // background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  // background-size: 100% 100%;
  margin-bottom: -5px;
  margin-top: 20px;
  .text1 {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/frontpage/titlebg.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 40px;
    padding-top: 3px;
  }
  .text2 {
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
  }
}
// .box{
//     height: 300px;
//     border: 1px solid red;
// }
.scroll-box-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.general-container {
  position: relative;

  .general-body {
    padding: 10px 10px 10px 10px;
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
      background-color: #0a4cad;

      span {
        //flex: 1;
      }
    }

    .scroll-box {
      margin: auto;
      width: 100%;
      height: 204px;
      //   overflow: hidden;
      cursor: pointer;
      color: #99bff3;
      font-size: 16px;
      border-top: none;
      font-weight: 400;

      .scroll-box-item {
        padding: 10px;
        box-sizing: border-box;
        font-size: 12px;
        flex: 1;
        justify-content: stretch;
        height: 40px;
        margin-bottom: 6px;
        text-align: center;
        display: flex;
        // align-items: center;
        align-items: center;
        background: rgba(#3fc2ff, 0.1);
        overflow: ;
        //height: 40px;
        //line-height: 40px;
        //display: flex;
        &:hover {
          // border: 1px solid #fff;
          box-shadow: inset 0 0 5px rgba(0, 204, 255, 0.8), inset 0 0 10px rgba(0, 204, 255, 0.6),
            inset 0 0 15px rgba(0, 204, 255, 0.4), inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
        }
        div {
          //flex: 1;
          color: #99bff3;
          pointer-events: auto;
          display: -webkit-box;
          -webkit-line-clamp: 2; //控制文字显示行数
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
