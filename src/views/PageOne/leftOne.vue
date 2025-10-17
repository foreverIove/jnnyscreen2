<template>
  <div class="leftThree">
    <div class="text1">
      充电数据统计
      <div style="width: 130px; height: 30px; float: right; margin-right: 20px">
        <el-select v-model="value" class="m-2" placeholder="请选择" @visible-change="changeD()" @change="getData()">
          <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { reqEneryAndCountLineDataByType } from '@/api/pageone'
//
// y1DataList 充电电量
// y2DataList 充电次数

const value = ref('1')

const options2 = [
  {
    value: '1',
    label: '7天'
  },
  {
    value: '2',
    label: '30天'
  },
  {
    value: '3',
    label: '12个月'
  }
]
//
let Echarts = ref(null)
let hyData = ref([18696, 40844, 36259, 35654, 34523, 34173, 31415, 20749])
let DLData = ref([
  45.663082, 106.819065, 94.162106, 89.074411, 87.095022, 87.170032, 81.165873, 54.006163
])
let xData = ref(['30', '01', '02', '03', '04', '05', '06', '07'])
const changeD = (val) => {
  // debugger
  if (value.value == '1') {
    hyData.value = [18696, 40844, 36259, 35654, 34523, 34173, 31415, 20749]
    DLData.value = [
      45.663082, 106.819065, 94.162106, 89.074411, 87.095022, 87.170032, 81.165873, 54.006163
    ]
    xData.value = ['30', '01', '02', '03', '04', '05', '06', '07']
  } else if (value.value == '2') {
    let DLlist = [
      374983.62, 860245.19, 946520.53, 962479.9, 1868503.92, 935590.52, 972137.95, 987657.72,
      994305.32, 859925.2, 873306.68, 834656.12, 900128.54, 955139.85, 1005313.98, 864380.43,
      851674.2, 863297.53, 861597.04, 883148.31, 849028.0, 872406.12, 884169.76, 1065631.07,
      1068190.65, 941621.06, 890744.11, 870950.22, 871700.32, 811658.73, 556936.95
    ]
    DLData.value = DLlist.map((item) => Number(item / 10000))
    let CSlist = [
      15015, 32763, 35151, 35428, 34524, 35460, 36681, 36656, 35561, 32396, 34407, 32922, 35352,
      37448, 35217, 33652, 31500, 34397, 33657, 34808, 33796, 35089, 35219, 41956, 40844, 36259,
      35654, 34523, 34173, 31415, 21422
    ]
    hyData.value = CSlist.map((item) => Number(item / 10000))
    xData.value = [
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07'
    ]
  } else if (value.value == '3') {
    let DLlist = [
      21737325.59, 29862059.98, 35252813.35, 33711200.94, 29197383.77, 27997592.38, 28364420.04,
      30209189.15, 30566543.81, 32778092.57, 31531070.87, 28334055.48, 6017220.15
    ]
    DLData.value = DLlist.map((item) => Number(item / 10000))
    let CSlist = [
      831400, 1057348, 1244718, 1123761, 1007959, 1055075, 1023136, 1106253, 1137036, 1188317,
      1145215, 1044693, 234501
    ]
    hyData.value = CSlist.map((item) => Number(item / 10000))
    xData.value = ['10', '11', '12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
  }
  getChart()
}
const colorHelper = ref({
  setcolor1: ['#42E0FC', '#A4E5FF', '#4E7CD9', '#4EBA92', '#0091FF', '#81FF5D'],
  setcolor2: ['#42E0FC', '#A4E5FF', '#4E7CD9', '#4EBA92', '#0091FF']
})
const getChart = () => {
  const myChart = echarts.init(Echarts.value)
  // 1. 定义数据

  const option = {
    // backgroundColor: '#fff',
    tooltip: {
      trigger: 'axis', //触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据，
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'cross' // 默认为直线，可选为：'line' | 'shadow' | 'cross' , shadow表示阴影，cross为十字准星
      }
      // formatter: function (params) {
      //     //params[0].marker,marker参数为提示语前面的小圆点
      //     return params[0].name +
      //         "<br>" + params[0].marker + "货量" + params[0].value + '吨' +
      //         "<br>" + params[4].marker + "进港装载率" + params[4].value + '%' +
      //         "<br>" + params[5].marker + "出港装载率" + params[5].value + '%'
      // }
    },
    grid: {
      top: '25%',
      left: '10%',
      right: '2%',
      bottom: '12%', //网格图（柱状图、折线图、气泡图等）离底部的距离，也可以用像素比如10px
      containLabel: true //grid 区域是否包含坐标轴的刻度标签。false可能溢出，默认为false
    },
    legend: {
      textStyle: {
        color: '#fff',
        fontSize: 16
      },
      itemGap: 20,
      itemWidth: 12,
      itemHeight: 5,
      data: ['电量', '次数'],
      right: 'center', //组件离容器左侧的距离，可以是left,center,right，也可以是像素px和百分比10%
      top: '5px'
    },
    animation: true,

    xAxis: [
      {
        type: 'category',
        data: xData.value,
        axisLine: {
          show: true,
          onZero: true,
          symbol: 'none',
          lineStyle: {
            color: '#264981'
          }
        },
        boundaryGap: true,
        axisLabel: {
          textStyle: {
            color: 'rgba(233, 240, 255, 1)',
            fontWeight: 500,
            fontSize: '16'
          }
        },
        axisTick: {
          show: false
        }
      },
      {
        type: 'category',
        data: xData.value,
        axisLine: {
          show: false,
          onZero: true,
          symbol: 'none',
          lineStyle: {
            color: 'rgb(21,93,174)'
          }
        },
        boundaryGap: false,
        axisLabel: {
          show: false,
          textStyle: {
            color: 'rgba(233, 240, 255, 1)',
            fontWeight: 500,
            fontSize: '16'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        name: '电量(万度)',
        nameTextStyle: {
          color: 'rgb(233,240,255)',
          fontSize: 12,
          padding: 10
        },
        // min: 0, //最小
        // max: 10, //最大
        // interval: 2, //相差
        type: 'value',
        splitLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgb(21,93,174)'
          }
        },
        //坐标值标注
        axisLabel: {
          show: true,
          textStyle: {
            color: 'rgba(195, 213, 248, 1)',
            fontSize: 22
          },
          formatter: '{value} '
        }
      },
      {
        name: value.value != '1' ? '万次' : '次',
        nameTextStyle: {
          color: 'rgb(233,240,255)',
          fontSize: 12,
          padding: 10
        },

        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgb(21,93,174)'
          }
        },
        axisTick: {
          show: false,
          inside: true,
          length: 7
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgb(21,93,174)'
          }
        },
        //坐标值标注
        axisLabel: {
          show: true,
          formatter: '{value} ',
          textStyle: {
            color: 'rgba(195, 213, 248, 1)',
            fontSize: 22
          }
        }
      }
    ],
    series: [
      {
        name: '电量',
        type: 'line',
        showAllSymbol: true, //显示所有图形。
        yAxisIndex: 0,
        xAxisIndex: 1,
        symbol: 'none', //标记的图形为实心圆
        symbolSize: 6, //标记的大小
        z: 150,
        zlevel: 25,
        itemStyle: {
          color: 'rgba(0, 0, 0, 1)',
          borderWidth: '2',
          borderColor: 'rgba(142, 76, 184, 1)'
        },
        lineStyle: {
          color: '#287CE8'
        },
        smooth: true,
        areaStyle: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                // color: 'rgba(65, 197, 95, 0.4)',
                color: 'rgba(142, 76, 184, 1)'
              },

              {
                offset: 1,
                // color: 'rgba(255,255,255, 0)',
                color: 'rgba(142, 76, 184, 0)'
              }
            ],
            false
          )
        },
        data: DLData.value
      },
      {
        name: '次数',
        type: 'line',
        showAllSymbol: true, //显示所有图形。
        yAxisIndex: 1,
        xAxisIndex: 1,
        symbol: 'none', //标记的图形为实心圆
        symbolSize: 6, //标记的大小
        z: 150,
        zlevel: 25,
        itemStyle: {
          color: '#333', //拐点颜色
          // borderColor: '#fff600',//拐点边框颜色
          // color: 'rgba(0, 0, 0, 1)',
          borderWidth: 2,
          borderColor: 'rgba(27,204,102)'
        },
        lineStyle: {
          color: '#F2C347'
        },
        smooth: true,
        areaStyle: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(27,204,102,1)'
                // color: 'rgba(137,32,200, 0.4)',
              },

              {
                offset: 1,
                // color: 'rgba(137,32,200, 0)',
                color: 'rgba(27,204,102,0)'
              }
            ],
            false
          )
        },
        // data: [230, 500, 180, 120, 160, 170]
        data: hyData.value
      }
    ]
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  const res = await reqEneryAndCountLineDataByType(value.value)
  console.log('充电数据统计', res)
  if (res.code === 0) {
    // 赋值
    // dataList.value = res.data.list
  }
}
onMounted(() => {
  getData()
  setTimeout(() => {
    getChart()
  }, 500)
})
</script>
<style>
.el-scrollbar__wrap {
  background: #051a32 !important;
}
</style>
<style lang="less" scoped>
/deep/.el-select__placeholder {
  color: #fff !important;
}
.el-select-dropdown__item {
  color: #fff;
}
.is-hovering {
  background: rgba(255, 255, 255, 0.5);
}
/deep/ .el-select-dropdown__wrap {
  // background: #206ca7 !important;
}

/deep/ .el-select__wrapper {
  background: #051a32 !important;
  // color: #fff;
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
