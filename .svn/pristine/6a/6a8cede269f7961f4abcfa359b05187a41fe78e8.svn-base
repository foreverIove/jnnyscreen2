<template>
  <div class="leftThree">
    <div class="text1">
      活跃度<el-tooltip class="box-item" effect="dark" content="用户注册后第一次充电的行政区域(近一月)" placement="right">
        <el-icon :size="20">
          <QuestionFilled />
        </el-icon>
      </el-tooltip>
      存活率<el-tooltip class="box-item" effect="dark" content="注册起在24小时-30天（第二次）/这个当月月注册的人数" placement="right">
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
import { onMounted, reactive, ref } from 'vue'
import { reqRetentionRate } from '@/api/ParkingComprehensive'
//

//
let Echarts = ref(null)
let hyData = ref([])
let lcData = ref([])
let xData = ref([])
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
      left: 100,
      textStyle: {
        color: '#fff',
        fontSize: 16
      },
      itemGap: 40,
      itemWidth: 18,
      itemHeight: 5,
      data: ['活跃度', '留存率'],
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
        name: '-',
        nameTextStyle: {
          color: 'rgb(233,240,255)',
          fontSize: 22,
          padding: 10
        },
        // min: 0, //最小
        max: 10, //最大
        interval: 2, //相差
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
        name: '-',
        nameTextStyle: {
          color: 'rgb(233,240,255)',
          fontSize: 22,
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
          formatter: '{value} %',
          textStyle: {
            color: 'rgba(195, 213, 248, 1)',
            fontSize: 22
          }
        }
      }
    ],
    series: [
      {
        name: '活跃度',
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
        data: hyData.value
      },
      {
        name: '留存率',
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
        data: lcData.value
      }
    ]
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  const res = await reqRetentionRate()
  console.log('活跃度/存活率', res)
  if (res.code === 0) {
    // 赋值
    hyData.value = res.data.yRegUserList1.map((item) => {
      return item
    })
    lcData.value = res.data.yRegUserList.map((item) => {
      return item
    })
    lcData.value = res.data.yRetentionRateList
    xData.value = res.data.xDateList

    getChart()
    // obj.lineData[0] = res.data.yRegUserList

    // 赋值
    // dataList.value = res.data.list
  }
}
onMounted(() => {
  hyData.value = [6.26, 3.61, 4.74, 4.21, 3.67, 4.4, 5.86, 5.06, 6.9, 8.04, 6.31, 5.99]
  xData.value = ['10', '11', '12', '01', '02', '03', '04', '05', '06', '07', '08', '09']
  let listLC = [12.76, 18.57, 18.88, 13.67, 15.99, 15.86, 12.22, 15.43, 15.44, 12.68, 14.94, 7.02]
  lcData.value = listLC.map((item) => Number(item.toFixed(2)))
  getChart()
  // getData()
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
