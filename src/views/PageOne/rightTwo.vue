<template>
  <div class="rightTwo" style="position: relative">
    <div class="text1">不同类型站点设备占比</div>
    <div class="chart-flow" ref="Echarts"></div>
    <div style="
        width: 185px;
        height: 185px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        position: absolute;
        top: 82px;
        left: 46px;
      "></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { reqqueryTerminalState } from '@/api/pageone'
let Echarts = ref(null)
const colorHelper = ref({
  setcolor1: ['#24E4AE', '#FFD765', '#FDA3A3', '#4EBA92', '#0091FF', '#81FF5D'],
  setcolor2: ['#42E0FC', '#A4E5FF', '#4E7CD9', '#4EBA92', '#0091FF']
})
const dataList = ref([
  {
    name: '正常',
    value: 5644
  },
  {
    name: '离线',
    value: 3931
  },
  {
    name: '故障',
    value: 772
  }
])
const hexToRgba = (hex, opacity) => {
  return (
    'rgba(' +
    parseInt('0x' + hex.slice(1, 3)) +
    ',' +
    parseInt('0x' + hex.slice(3, 5)) +
    ',' +
    parseInt('0x' + hex.slice(5, 7)) +
    ',' +
    opacity +
    ')'
  )
}
const getChart = () => {
  // 数据
  let chartdata = [
    { name: '公共', value: 19724 },
    { name: '个人', value: 64 },
    { name: '公交', value: 968 },
    { name: '环卫', value: 2 },
    { name: '物流', value: 1 },
    { name: '出租车', value: 1 },
    { name: '分时租赁', value: 1 },
    { name: '小区共享', value: 1 },
    { name: '单位', value: 1 },
    { name: '其他', value: 991 }
  ]
  // 颜色系列 - 扩展为9种颜色
  let color = [
    '#FFEA3B',
    '#F48458',
    '#99ADEE',
    '#0062F0',
    '#C640FB',
    '#00E6E5',
    '#00BFF9',
    '#123FEA',
    '#F3E8BA',
    '#F2F2F2'
  ]
  let color1 = []
  let color2 = []
  let color3 = []
  // 设置每层圆环颜色和添加间隔的透明色
  color.forEach((item) => {
    color1.push(item, 'transparent')
    color2.push(hexToRgba(item, 0.7), 'transparent')
    color3.push(hexToRgba(item, 0.7), 'transparent')
  })

  let data1 = []
  let sum = 0
  // 根据总值设置间隔值大小
  chartdata.forEach((item) => {
    sum += Number(item.value)
  })
  // 给每个数据后添加特定的透明的数据形成间隔
  chartdata.forEach((item, index) => {
    if (item.value !== 0) {
      data1.push(item, {
        name: '',
        value: sum / 70,
        labelLine: {
          show: false,
          lineStyle: {
            color: 'transparent'
          }
        },
        itemStyle: {
          color: 'transparent'
        }
      })
    }
  })

  // 分割数据到左右两边
  const leftLegendData = chartdata.slice(0, 5) // 前5个在左边
  const rightLegendData = chartdata.slice(5) // 后4个在右边

  const myChart = echarts.init(Echarts.value)
  const option = {
    backgroundColor: '#131D25',
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        if (params.name !== '') {
          const percent = ((params.value / sum) * 100).toFixed(1)
          return params.name + ' : ' + params.value + ' (' + percent + '%)'
        }
      }
    },
    legend: [
      // 左侧图例
      {
        type: 'scroll',
        orient: 'vertical',
        left: '5%',
        top: 'center',
        itemGap: 15,
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
          color: '#fff',
          fontSize: 12
        },
        formatter: function (name) {
          const dataItem = leftLegendData.find((item) => item.name === name)
          if (dataItem) {
            const percent = ((dataItem.value / sum) * 100).toFixed(1)
            return `${name}  `
          }
          return name
        },
        data: leftLegendData.map((item) => item.name)
      },
      // 右侧图例
      {
        type: 'scroll',
        orient: 'vertical',
        right: '5%',
        top: 'center',
        itemGap: 15,
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
          color: '#fff',
          fontSize: 12
        },
        formatter: function (name) {
          const dataItem = rightLegendData.find((item) => item.name === name)
          if (dataItem) {
            const percent = ((dataItem.value / sum) * 100).toFixed(1)
            return `${name}  `
          }
          return name
        },
        data: rightLegendData.map((item) => item.name)
      }
    ],
    series: [
      {
        name: '数据分布',
        type: 'pie',
        radius: ['55%', '52%'],
        center: ['50%', '50%'], // 中心位置回到中间
        hoverAnimation: false,
        startAngle: 90,
        selectedMode: 'single',
        selectedOffset: 0,
        itemStyle: {
          color: (params) => {
            return color2[params.dataIndex]
          }
        },
        label: {
          show: false
        },
        data: data1,
        z: 666,
        // 关键配置：确保所有数据都显示，即使value为0
        stillShowZeroSum: false
      },
      {
        name: '数据分布',
        type: 'pie',
        radius: ['44%', '55%'],
        center: ['50%', '50%'], // 中心位置回到中间
        hoverAnimation: false,
        startAngle: 90,
        selectedMode: 'single',
        selectedOffset: 0,
        itemStyle: {
          color: (params) => {
            return color3[params.dataIndex]
          }
        },
        label: {
          show: false
        },
        data: data1,
        z: 666,
        // 关键配置：确保所有数据都显示，即使value为0
        stillShowZeroSum: false
      }
    ]
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  let res = await reqqueryTerminalState()
  console.log(res, '终端状态占比')
}
onMounted(() => {
  getData()
  getChart()
})
</script>

<style lang="less" scoped>
.chart-flow {
  z-index: 999;
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
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/frontpage/titlebg.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-top: 3px;
    padding-left: 40px;
  }
  .text2 {
    color: #fff;
    font-size: 15px;
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
