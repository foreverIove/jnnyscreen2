<template>
  <div id="map-container" style="width: 1920px; height: 1080px">
    <div id="map-chart">
      <div
        id="main"
        class="chart-div"
        :style="{ width: width }"
        style="position: absolute; left: -10px"
      />
      <div
        id="main3"
        class="chart-div"
        :style="{ width: width }"
        style="position: absolute; left: -12px; top: 13px"
      />
      <div
        id="main2"
        class="chart-div"
        :style="{ width: width }"
        style="position: absolute; left: -10px; top: -10px"
      />
    </div>
  </div>
</template>

<script>
//引入热力图
import 'echarts/lib/chart/heatmap'
// import ycgeojson from '@/assets/json/city.json'
import ycgeojson from '@/assets/json/gd.json'
// import jngeojson from '@/assets/json/easy.json'
import jngeojson from '@/assets/json/linyieasy.json'
import * as echarts from 'echarts' // echarts theme
import 'echarts/extension/bmap/bmap'
// require('echarts/theme/macarons')
export default {
  props: {
    className: {
      type: String,
      default: 'chart-div'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      staMapInteval: null,
      staDetailShow: false,
      stationInfo: {}
    }
  },
  mounted() {
    this.initChart()
    this.getAllStation()
    this.staMapInteval = setInterval(
      () => {
        this.getAllStation()
      },
      30 * 60 * 1000
    )
    const _this = this
    this.chart2.on('click', function (params) {
      console.log(params, 11111)
    })
  },
  beforeUnmount() {
    clearInterval(this.staMapInteval)
    this.staMapInteval = null
  },
  methods: {
    setOptions: function (points) {
      this.chart.setOption({
        title: {
          text: '',
          left: 'center',
          textStyle: {
            color: '#ffffff',
            fontStyle: 'normal',
            // fontWeight: 'bold',
            fontSize: 14
          }
        },
        series: [
          {
            name: 'Airport',
            type: 'map',
            height: '90%',
            top: 70,
            roam: false, // 开启缩放和移动
            map: 'jn', // 自定义扩展图表类型
            label: {
              show: true,
              textStyle: {
                color: '#ffffff', // 地图初始化区域字体颜色
                fontSize: 0, // 字体大小
                backgroundColor: 'rgba(0,23,11,0)'
              }
            },
            // 提示框
            tooltip: {
              trigger: 'item',
              formatter: function (data) {
                return data.name + '数据：' + data.value
              }
            },
            itemStyle: {
              areaColor: 'rgba(255, 255, 255, 0)', // 地图背景色
              normal: {
                borderColor: 'rgba(75, 0, 130, 0.8)', // 各模块边界线
                areaColor: 'rgba(255, 255, 255, 0)', // 地图背景色
                borderWidth: 2,
                // shadowColor: 'rgba(63,218,255,0.3)',
                shadowBlur: 20,
                show: true
              },
              emphasis: {
                color: '#ffffff',
                areaColor: 'rgba(255,255,255,0.4)', // 悬浮背景色
                label: {
                  color: '#FFF',
                  areaColor: '#111996' // 悬浮背景色
                }
              }
            },
            instancing: true
          }
        ]
      })
      this.chart3.setOption({
        title: {
          text: '',
          left: 'center',
          textStyle: {
            color: '#ffffff',
            fontStyle: 'normal',
            // fontWeight: 'bold',
            fontSize: 14
          }
        },
        series: [
          {
            name: 'Airport',
            type: 'map',
            height: '90%',
            top: 570,
            roam: false, // 开启缩放和移动
            map: 'jn', // 自定义扩展图表类型
            label: {
              show: true,
              textStyle: {
                color: '#ffffff', // 地图初始化区域字体颜色
                fontSize: 0, // 字体大小
                backgroundColor: 'rgba(0,23,11,0)'
              }
            },
            // 提示框
            tooltip: {
              trigger: 'item',
              formatter: function (data) {
                return data.name + '数据：' + data.value
              }
            },
            itemStyle: {
              areaColor: 'rgba(255, 255, 255, 0)', // 地图背景色
              normal: {
                borderColor: 'rgba(75, 0, 130, 0.8)', // 各模块边界线
                areaColor: 'rgba(255, 255, 255, 0)', // 地图背景色
                borderWidth: 2,
                shadowBlur: 20,
                show: true
              },
              emphasis: {
                color: '#ffffff',
                areaColor: 'rgba(255,255,255,0.4)', // 悬浮背景色
                label: {
                  color: '#FFF',
                  areaColor: '#111996' // 悬浮背景色
                }
              }
            },
            instancing: true
          }
        ]
      })
    },

    setOptions2: function (points) {
      let data =
        // 临沂市坐标数据
        [
          ['113', '22', 41334],
          ['113', '22', 7883],
          ['113.2', '22.5', 5598],
          ['114', '22.5', 16346],
          ['115', '22.4', 11346],
          ['98.2', '39.7', 2686],
          ['114.0', '22.6', 2468],
          ['113', '22.62961', 11202],
          ['120', '22.72961', 6202],
          ['130', '24', 1036],
          ['113.90857800000003', '22.478785', 11936],
          ['113.92434300000002', '22.529534', 21713],
          ['113.95341200000007', '22.556386', 702],
          ['114.204648', '22.601526', 702]
        ]
      let areaData = []
      data.map((item) => {
        // 扩大热力图效果
        areaData.push(...new Array(3).fill(item))
      })
      let mapMax = Math.max(...data.map((item) => item[2]))
      let mapMin = Math.min(...data.map((item) => item[2]))
      this.chart2.setOption({
        title: {
          text: '',
          left: 'center',
          textStyle: {
            color: '#ffffff',
            fontStyle: 'normal',
            // fontWeight: 'bold',
            fontSize: 14
          }
        },
        visualMap: {
          bottom: 20,
          left: 10,
          show: true,
          color: ['#ff4601', '#fffc00', '#87cffa'],
          min: mapMin,
          max: mapMax,
          calculable: true,
          textStyle: {
            color: '#fff',
            fontSize: 12
          }
        },
        geo: {
          map: 'jn',
          label: {
            show: true
          },
          top: '60',
          left: '360',
          roam: true,

          height: '95%',
          zoom: 0.9,
          label: {
            normal: {
              show: true,
              color: '#fff'
            },
            emphasis: {
              color: '#fff'
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#76b1ff',
              borderColor: '#eee',
              shadowColor: '#76b1ff',
              shadowBlur: 10,
              borderWidth: 1
            },
            emphasis: {
              // 鼠标移入颜色
              areaColor: '#409EFF',
              borderWidth: 0
            }
          }
        },
        series: [
          {
            mapType: 'jn',
            top: 'center',
            left: 'center',
            width: '65%',
            height: '95%',

            name: 'AQI',
            type: 'heatmap',
            coordinateSystem: 'geo',
            blurSize: 40,
            data: areaData,
            // 鼠标移入
            emphasis: {
              show: false,
              itemStyle: {
                areaColor: 'rgb(255,255,0,1)'
              }
            }
          }
          // {
          //   mapType: 'jn',
          //   top: 'center',
          //   left: 'center',
          //   width: '65%',
          //   height: '95%',

          //   name: 'AQI',
          //   type: 'heatmap',
          //   coordinateSystem: 'geo',
          //   blurSize: 40,
          //   data: areaData,
          //   // 鼠标移入
          //   emphasis: {
          //     show: false,
          //     itemStyle: {
          //       areaColor: 'rgb(255,255,0,1)'
          //     }
          //   }
          // }
        ]
      })
    },
    initChart() {
      this.chart = echarts.init(document.getElementById('main'))
      this.chart3 = echarts.init(document.getElementById('main3'))
      this.chart2 = echarts.init(document.getElementById('main2')) //真正的
      echarts.registerMap('yc', jngeojson)
      echarts.registerMap('jn', ycgeojson)
      this.setOptions2([]) //真正的
      this.setOptions([])
    },
    getAllStation() {},
    getStationInfo(staId) {}
  }
}
</script>
<style lang="less">
.previewDialog {
  background-color: rgba(72, 83, 144, 0.7);
  /*border: #2b82ca;*/
  border: 2px solid #2b82ca;
  left: -10%;
}
.previewDialog.el-dialog {
  .el-dialog__header {
    display: none;
  }
  .dj-dialog-content {
    padding: 0;
    overflow: unset;
  }
}
</style>
<style lang="less" scoped>
#mian {
  transform: rotateX(50deg);
  // margin-top: -120px;
}
.chart-div {
  /*background: -webkit-linear-gradient(top, #041133, #041133, #1b1b47);*/
  // background-color: rgba(4, 17, 51, 0.5);
  min-height: calc(~'100%');
  transform: rotateX(45deg);
}
#map-chart {
  margin: 0 auto;
  width: 900px;
  height: 100vh;
  // height: 1200px;

  // transform-style: preserve-3d;
  // transform:rotate(5deg);
  // transform:rotateY(20deg);
  // background-color: rgba(27, 40, 151, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;

  .map-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .dv-charts-container {
    height: calc(~'100% - 50px');
  }
}
</style>
