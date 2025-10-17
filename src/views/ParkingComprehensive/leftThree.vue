<template>
  <div class="rightTwo">
    <div class="text1">用户转化漏斗</div>
    <div class="chart-flow" ref="Echarts"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { reqUserConversionRate } from '@/api/ParkingComprehensive'
// reqUserConversionRate
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
  let value = [987, 634, 413, 312, 123]
  let temp = 0
  const option = {
    title: {
      // text: '漏斗图'
    },
    tooltip: {
      trigger: 'item', //数据项图形触发
      //{a}: 系列名称，就是 series 中的 name
      //{b}: 类目值， 就是 x 轴的分类名
      //{c}: 数值， 当前分类对应的数值
      //<br/>换行
      formatter: '{a} <br/>{b} : {c}人' //回调函数
    },
    // toolbox: {
    //   //工具栏
    //   feature: {
    //     dataView: {
    //       //数据视图工具
    //       readOnly: false //不可编辑（只读）
    //     },
    //     restore: {}, //配置项还原
    //     saveAsImage: {} //保存图片
    //   }
    // },
    // legend: {
    //   //图例
    //   type: 'scroll', //可滚动的图例
    //   left: '2%', //图例组件离容器左侧的距离：靠左
    //   right: '2%',
    //   orient: 'vertical', //图例列表的布局朝向：垂直
    //   top: 'center', //图例组件离容器左侧的距离：居中
    //   data: ['注册用户', '充电≥1次', '充电≥2次'],
    //   textStyle: {
    //     fontSize: 14,
    //     color: '#fff',
    //     fontWeight: 'normal'
    //   }
    // },
    series: [
      {
        name: '漏斗图',

        type: 'funnel', //类型：漏斗图
        left: '5%', //漏斗图组件离容器左侧的距离
        top: 10, //漏斗图组件离容器上侧的距离
        bottom: 60, //漏斗图组件离容器下侧的距离
        width: '70%', //漏斗图组件的宽度
        min: 0, //指定的数据最小值
        // max: 100, //指定的数据最大值
        minSize: '0%', //数据最小值 min 映射的宽度
        maxSize: '100%', //数据最大值 max 映射的宽度
        sort: 'descending', ////漏斗数据降序排列
        gap: 2, //数据图形间距
        // label: {
        //   //漏斗图图形上的文本标签
        //   show: true, //显示文本标签
        //   position: 'inside' //标签的位置：漏斗图梯形内部
        // },
        label: {
          show: true,
          color: '#fff',
          formatter: function (params) {
            return params.data.value + '人'
            // for (let i in value) {
            //   console.log(value[i])
            //   if (i == temp) {
            //     temp++
            //     return value[i] + ' MB'
            //   }
            // }
          }
        },
        labelLine: {
          //标签的视觉引导线样式
          length: 10, //视觉引导线的长度
          lineStyle: {
            //线的样式
            width: 1, //宽度
            type: 'solid'
          }
        },
        itemStyle: {
          //图形样式
          borderColor: '#fff', //图形的描边颜色
          borderWidth: 1 //图形描边宽度
        },
        emphasis: {
          //高亮的标签和图形样式
          label: {
            fontSize: 20 //当鼠标悬停在漏斗某部分上，重点突出文字大小
          }
        },
        data: [
          { value: 8548, name: '充电≥2次', itemStyle: { color: '#D7BC0B' } }, //数据、名称以及颜色
          // { value: 30, name: '咨询', itemStyle: { color: '#FDB36A' } }, //数据、名称以及颜色
          // { value: 10, name: '订单', itemStyle: { color: 'pink' } }, //数据、名称以及颜色
          { value: 33783, name: '充电≥1次', itemStyle: { color: '#17A4B0' } }, //数据、名称以及颜色
          { value: 35937, name: '注册用户', itemStyle: { color: '#1875B1' } } //数据、名称以及颜色
        ]
      },
      {
        name: '漏斗图',

        type: 'funnel', //类型：漏斗图
        left: '5%', //漏斗图组件离容器左侧的距离
        top: 10, //漏斗图组件离容器上侧的距离
        bottom: 60, //漏斗图组件离容器下侧的距离
        width: '70%', //漏斗图组件的宽度
        min: 0, //指定的数据最小值
        // max: 100, //指定的数据最大值
        minSize: '0%', //数据最小值 min 映射的宽度
        maxSize: '100%', //数据最大值 max 映射的宽度
        sort: 'descending', ////漏斗数据降序排列
        gap: 2, //数据图形间距
        // label: {
        //   //漏斗图图形上的文本标签
        //   show: true, //显示文本标签
        //   position: 'inside' //标签的位置：漏斗图梯形内部
        // },
        label: {
          show: true,
          color: '#fff',
          position: 'inside', //标签的位置：漏斗图梯形内部
          formatter: function (params) {
            // console.log(params, '-----9')
            // return params.data.value + '是'
            // for (let i in value) {
            //   console.log(value[i], 99999)
            //   if (i == temp) {
            //     temp++
            //     return value[i] + ' MB'
            //   }
            // }
          }
        },
        labelLine: {
          //标签的视觉引导线样式
          length: 10, //视觉引导线的长度
          lineStyle: {
            //线的样式
            width: 1, //宽度
            type: 'solid'
          }
        },
        itemStyle: {
          //图形样式
          borderColor: '#fff', //图形的描边颜色
          borderWidth: 1 //图形描边宽度
        },
        emphasis: {
          //高亮的标签和图形样式
          label: {
            fontSize: 20 //当鼠标悬停在漏斗某部分上，重点突出文字大小
          }
        },
        data: [
          { value: 8548, name: '充电≥2次', itemStyle: { color: '#D7BC0B' } }, //数据、名称以及颜色
          // { value: 30, name: '咨询', itemStyle: { color: '#FDB36A' } }, //数据、名称以及颜色
          // { value: 10, name: '订单', itemStyle: { color: 'pink' } }, //数据、名称以及颜色
          { value: 33783, name: '充电≥1次', itemStyle: { color: '#17A4B0' } }, //数据、名称以及颜色
          { value: 35937, name: '注册用户', itemStyle: { color: '#1875B1' } } //数据、名称以及颜色
        ]
      }
    ]
  }
  option && myChart.setOption(option)
}
const getData = async () => {
  const res = await reqUserConversionRate()
  console.log(res, '漏洞')
  if (res.code == 0) {
  }
}
onMounted(() => {
  getData()
  getChart()
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
