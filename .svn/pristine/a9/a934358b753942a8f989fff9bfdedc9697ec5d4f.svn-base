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
      stationInfo: {},
      zoom: 1
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
            roam: true, // 开启缩放和移动
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

    setOptions2(points) {
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
      const points2 = [
        [113.5972, 24.8103],
        [112.0445, 22.9152],
        [113.5767, 22.2707],
        [115.3752, 22.7855]
      ]
      this.chart2.setOption({
        backgroundColor: '#030528',
        geo: [
          {
            map: 'jn',
            aspectScale: 1,
            zoom: this.zoom,
            layoutCenter: ['50%', '50%'],
            layoutSize: '180%',
            show: true,
            roam: true,
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#c0f3fb',
                borderWidth: 1,
                shadowColor: '#8cd3ef',
                shadowOffsetY: 10,
                shadowBlur: 120,
                areaColor: 'transparent'
              }
            }
          },
          // 重影
          {
            type: 'map',
            map: 'jn',
            zlevel: -1,
            aspectScale: 1,
            zoom: this.zoom,
            layoutCenter: ['50%', '51%'],
            layoutSize: '180%',
            roam: true,
            silent: true,
            itemStyle: {
              normal: {
                borderWidth: 1,
                // borderColor:"rgba(17, 149, 216,0.6)",
                borderColor: 'rgba(58,149,253,0.8)',
                shadowColor: 'rgba(172, 122, 255,0.5)',
                shadowOffsetY: 5,
                shadowBlur: 15,
                areaColor: 'rgba(5,21,35,0.1)'
              }
            }
          },
          {
            type: 'map',
            map: 'jn',
            zlevel: -2,
            aspectScale: 1,
            zoom: this.zoom,
            layoutCenter: ['50%', '52%'],
            layoutSize: '180%',
            roam: true,
            silent: true,
            itemStyle: {
              normal: {
                borderWidth: 1,
                // borderColor: "rgba(57, 132, 188,0.4)",
                borderColor: 'rgba(58,149,253,0.6)',
                shadowColor: 'rgba(65, 214, 255,1)',
                shadowOffsetY: 5,
                shadowBlur: 15,
                areaColor: 'transpercent'
              }
            }
          },
          {
            type: 'map',
            map: 'jn',
            zlevel: -3,
            aspectScale: 1,
            zoom: this.zoom,
            layoutCenter: ['50%', '53%'],
            layoutSize: '180%',
            roam: true,
            silent: true,
            itemStyle: {
              normal: {
                borderWidth: 1,
                // borderColor: "rgba(11, 43, 97,0.8)",
                borderColor: 'rgba(58,149,253,0.4)',
                shadowColor: 'rgba(58,149,253,1)',
                shadowOffsetY: 15,
                shadowBlur: 10,
                areaColor: 'transpercent'
              }
            }
          },
          {
            type: 'map',
            map: 'jn',
            zlevel: -4,
            aspectScale: 1,
            zoom: this.zoom,
            layoutCenter: ['50%', '54%'],
            layoutSize: '180%',
            roam: true,
            silent: true,
            itemStyle: {
              normal: {
                borderWidth: 5,
                // borderColor: "rgba(11, 43, 97,0.8)",
                borderColor: 'rgba(5,9,57,0.8)',
                shadowColor: 'rgba(29, 111, 165,0.8)',
                shadowOffsetY: 15,
                shadowBlur: 10,
                areaColor: 'rgba(5,21,35,0.1)'
              }
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'map',
            map: 'jn', // 自定义扩展图表类型
            aspectScale: 1,
            zoom: this.zoom, // 缩放
            roam: true,
            showLegendSymbol: true,
            label: {
              normal: {
                show: true,
                textStyle: { color: '#fff', fontSize: '120%' }
              },
              emphasis: {
                // show: false,
              }
            },
            itemStyle: {
              normal: {
                areaColor: {
                  type: 'linear',
                  x: 1200,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(3,27,78,0.75)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(58,149,253,0.75)' // 50% 处的颜色
                    }
                  ],
                  global: true // 缺省为 false
                },
                borderColor: '#fff',
                borderWidth: 0.2
              },
              emphasis: {
                show: false,
                color: '#fff',
                areaColor: 'rgba(0,254,233,0.6)'
              }
            },
            layoutCenter: ['50%', '50%'],
            layoutSize: '180%',
            markPoint: {
              symbol: 'none'
            },
            data: data
          },
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', //箭头图标
              symbolSize: 6 //图标大小
            },
            lineStyle: {
              normal: {
                color: 'rgba(255, 200, 113, 1)',
                width: 2, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: 0.3, //尾迹线条曲直度
                shadowColor: 'rgba(255, 200, 113, 0.2)',
                shadowBlur: 10
              }
            },
            data: [
              [points2[0], points2[1]],
              [points2[0], points2[2]],
              [points2[0], points2[3]]
            ]
          },
          {
            // 动效散点公共配置项
            silent: true, // 暂不支持鼠标交互
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
              //涟漪特效
              period: 4, //动画时间，值越小速度越快
              // brushType: 'stroke', //波纹绘制方式 stroke, fill
              scale: 5 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                position: 'right', //显示位置
                offset: [5, 0], //偏移设置
                formatter: function (params) {
                  //圆环显示文字
                  return params.data.name
                },
                fontSize: 13,
                color: 'white'
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
              normal: {
                show: false,
                borderWidth: 1,
                color: 'rgba(255, 86, 11, 1)'
              }
            },
            data: [
              {
                name: '城市A',
                value: [...points2[0], 323]
              },
              {
                name: '城市B',
                value: [...points2[1], 323]
              },

              {
                name: '城市C',
                value: [...points2[2], 323]
              },
              {
                name: '城市C',
                value: [...points2[3], 323]
              }
            ]
          }
        ]
      })
    },
    handleZoom(params) {
      const { zoom, center } = params

      this.zoom = params.zoom
      console.log(params.originX, params.originY, this.zoom, '缩放')
      // 更新所有geo和series的zoom值
      const option = this.chart2.getOption()

      if (option.geo) {
        option.geo.forEach((geo) => {
          geo.zoom = this.zoom
        })
      }

      if (option.series) {
        option.series.forEach((series) => {
          if (series.type === 'map') {
            series.zoom = this.zoom
          }
        })
      }

      this.chart2.setOption(option)
      // this.chart2.setOption({
      //   geo: {
      //     zoom: zoom,
      //     center: center
      //   }
      // })
    },
    initChart() {
      this.chart = echarts.init(document.getElementById('main'))
      this.chart3 = echarts.init(document.getElementById('main3'))
      this.chart2 = echarts.init(document.getElementById('main2')) //真正的
      echarts.registerMap('yc', jngeojson)
      echarts.registerMap('jn', ycgeojson)
      this.setOptions2([]) //真正的
      this.chart2.on('georoam', this.handleZoom)
      // this.setOptions([])
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
