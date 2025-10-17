<template>
  <div class="rightTwo">
    <div class="text1">故障运营商排名</div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { reqTopTenOperatorByFault } from '@/api/pagefive'
let Echarts = ref(null)
const imgList = [
  '//img.isqqw.com/profile/upload/2023/10/25/6a800e50-f954-45c3-9bfe-5513ba471a7b.png',
  '//img.isqqw.com/profile/upload/2023/10/25/dc5077bc-3cd1-4e4e-9c67-9bb90cfece2a.png',
  '//img.isqqw.com/profile/upload/2023/10/25/5b0fff16-ef6f-4f31-8eab-ac0d0ef40a16.png',
  '//img.isqqw.com/profile/upload/2023/10/25/2d977653-3038-45a8-926b-d80b2e74bae2.png',
  '//img.isqqw.com/profile/upload/2023/10/25/4e93cf77-ca50-4cfd-862f-513be3479112.png'
]
const data = [
  { name: '济南特来电新能源有限公司', value: 94901, num: 94901 },
  { name: '国网（山东）电动汽车服务有限公司', value: 42017, num: 42017 },
  { name: '星星充电', value: 41236, num: 41236 },
  { name: '山东科耐新能源有限公司', value: 38258, num: 38258 },
  { name: '济南碧辟小桔新能源有限责任公司', value: 37578, num: 37578 }
]
// y轴数据
const ydata = data.map((item) => item.name)

const getChart = () => {
  const myChart = echarts.init(Echarts.value)
  const option = {
    // backgroundColor: '#000',
    tooltip: {
      trigger: 'item',
      padding: [8, 15],
      backgroundColor: 'rgba(12, 51, 115,0.8)',
      borderColor: 'rgba(3, 11, 44, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      formatter: function (data) {
        return data.name + '数量：' + data.data.num
      }
    },
    grid: {
      top: '10%',
      left: '3%',
      right: '10%',
      bottom: '3%'
    },
    yAxis: [
      // 图标
      {
        type: 'category',
        data: ydata,
        inverse: true,
        axisLabel: {
          fontSize: '18px',
          verticalAlign: 'bottom',
          lineHeight: 20,
          margin: 0,
          formatter: function (value, index) {
            return `{img${index}|} `
          },
          rich: {
            img0: {
              width: 40,
              height: 40,
              backgroundColor: {
                image: imgList[0]
              }
            },
            img1: {
              width: 40,
              height: 40,
              backgroundColor: {
                image: imgList[1]
              }
            },
            img2: {
              width: 40,
              height: 40,
              backgroundColor: {
                image: imgList[2]
              }
            },
            img3: {
              width: 40,
              height: 40,
              backgroundColor: {
                image: imgList[3]
              }
            },
            img4: {
              width: 40,
              height: 40,
              backgroundColor: {
                image: imgList[4]
              }
            },
            img5: {
              width: 40,
              height: 40,
              backgroundColor: {
                image: imgList[5]
              }
            }
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#13387a'
          }
        }
      },
      // 文字
      {
        gridIndex: 0,
        splitLine: 'none',
        axisTick: 'none',
        axisLine: 'none',
        data: data.map((item) => item.value),
        inverse: true,
        axisLabel: {
          show: true,
          verticalAlign: 'bottom',
          align: 'right',
          padding: [0, 10, 10, 0],
          formatter: function (value) {
            // console.log('怎么算的？？', value)
            return '{z|} {x|' + value + '}'
          },
          rich: {
            z: { color: '#83C9FE', fontSize: 14 },
            y: {
              color: '#3dffef'
            },
            x: {
              color: 'rgba(222, 237, 255, 1)',
              fontSize: 14
            }
          }
        }
      }
    ],
    xAxis: {
      type: 'value',

      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },

    series: [
      {
        // 背景
        zlevel: 0,
        type: 'bar',
        barGap: '-100%',
        barWidth: 8,
        top: -8,
        tooltip: {
          show: false
        },
        itemStyle: {
          normal: {
            color: 'rgba(128, 164, 229, .2)'
          }
        },

        data: [100, 100, 100, 100, 100]
      },
      {
        name: '',
        type: 'bar',
        zlevel: 0,
        barWidth: 8,
        itemStyle: {
          normal: {
            barBorderRadius: 2,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: '#1d456f'
              },
              {
                offset: 1,
                color: '#3C91BE'
              }
            ])
          }
        },
        data: data,
        label: {
          normal: {
            color: '#555',
            show: true,
            position: [0, -20],
            textStyle: {
              fontSize: 16,
              color: '#fff'
            },
            rich: {
              a: {
                fontSize: 14
              },
              b: {
                fontSize: 14
              }
            },
            formatter: function (a, b) {
              return '{a|' + a.name + '}'
            }
          }
        }
      },

      {
        data: data,
        type: 'pictorialBar',
        barMaxWidth: 20,
        symbolPosition: 'end',
        symbol:
          'image://' +
          '//img.isqqw.com/profile/upload/2023/11/15/fabee49f-3e3b-45a6-a5d5-2780f5684bde.png',
        symbolOffset: [10, 0],
        symbolSize: [20, 20],
        zlevel: 2,
        z: 100,
        silent: true
      }
    ]
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  let res = await reqTopTenOperatorByFault()
  console.log('故障运营商排名', res)
}
onMounted(() => {
  getData()
  setTimeout(() => {
    getChart()
  }, 500)
})
</script>

<style lang="less" scoped>
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
