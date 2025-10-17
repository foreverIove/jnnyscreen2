<template>
  <div class="leftThree">
    <div class="text1" style="padding-left: 60px">故障事项</div>
    <div class="general-container">
      <div class="general-body">
        <div class="table-header">
          <span style="width: 25%">电站名称</span>
          <span style="width: 25%">异常类型</span>
          <span style="width: 22%">故障桩</span>
          <span style="width: 30%">故障开始时间</span>
        </div>
        <div class="box">
          <div class="scroll-box" ref="scrollBox2" data-id="aaa" @mouseover="useStopTimer" @mouseleave="OutTimer">
            <div class="scroll-box-item" v-for="item in dataList1" :key="item.id">
              <div class="ellipsis" style="width: 25%; color: #fff; line-height: 15px">
                {{ item.stationName }}
              </div>
              <div class=" " style="
                  width: 25%;
                  height: 100%;
                  padding-top: 5px;
                  align-items: flex-start;
                  word-wrap: break-word;
                  color: #fff600;
                ">
                {{ item.faultName }}
              </div>
              <div class="scroll-box-title ellipsis" style="width: 25%; color: #fff; line-height: 30px">
                {{ item.pileName }}
              </div>
              <div style="width: 25%; margin-left: 0px; color: #fff; border-box: box-sizing">
                {{ item.faultTime }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- {{ dataList1 }} -->
    </div>
    <!-- <div class="text" style="width: 80%; margin: 0 auto; color: #fff; font-size: 17px">
      说明：
      <br /><br />
      <li>同样采用requestAnimationFrame让滚动更加流程</li>
      <br />
      <li>更加明显的感觉滚动的方向</li>
      <br />
      <li>它相对于虚拟列表，有些缺点：大量的dom渲染</li>
      <br />
      <li>并不会因为滚动条影响其他组件布局，从而产生重绘和回流的风险</li>
      <br />
      <li>较为便捷的参数传递，简化开发</li>
      <div>参数的可选性以及固定的开发模版让你更快更熟练的使用</div>
    </div> -->
    <!-- <div class="chart-flow" style="float: left" ref="Echarts"></div> -->
  </div>
</template>
<script setup>
import { useTimer } from '@/hooks/useMove3.ts'
// import { useTimer } from 'scroll_cxs_v3'
import { onMounted, reactive, ref, watch } from 'vue'
// import { reqQueryChgOrderData } from '@/api/operationAnalysis'
let dataList1 = ref([])
let scrollBox2 = ref(null)
const timer = useTimer()
onMounted(() => {
  // console.log(Echarts.value)
  // useMove(dataList1.value,scrollBox2.value)
  getData()
})

const getData = async () => {
  //   let result = await reqQueryChgOrderData()
  dataList1.value = [
    {
      stationName: '济南市历城区幸福柳广场公共充电站',
      pileName: '01号直流充电机',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 15:06:39'
    },
    {
      stationName: '济南市历城区幸福柳广场公共充电站',
      pileName: '01号直流充电机',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 15:06:34'
    },
    {
      stationName: '智充U选飞跃大道重卡充电站',
      pileName: '1049211205020603',
      faultName: '电度表通讯异常故障',
      faultTime: '2025-10-07 15:04:54'
    },
    {
      stationName: '济南市历城区幸福柳广场公共充电站',
      pileName: '09号直流充电机',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 15:01:41'
    },
    {
      stationName: '智充U选飞跃大道重卡充电站',
      pileName: '1049211205020603',
      faultName: '电度表通讯异常故障',
      faultTime: '2025-10-07 14:52:53'
    },
    {
      stationName: '学府中天汽车总站超级充电站',
      pileName: '充电机01',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 14:47:25'
    },
    {
      stationName: '智充U选飞跃大道重卡充电站',
      pileName: '1049211205020603',
      faultName: '电度表通讯异常故障',
      faultTime: '2025-10-07 14:40:53'
    },
    {
      stationName: '济南市市中区纬三路24号充电站',
      pileName: '01974003',
      faultName: '缘检测故障',
      faultTime: '2025-10-07 14:38:01'
    },
    {
      stationName: '智充U选飞跃大道重卡充电站',
      pileName: '1049211205020603',
      faultName: '电度表通讯异常故障',
      faultTime: '2025-10-07 14:31:52'
    },
    {
      stationName: '舜德路充电站',
      pileName: '1号直流桩',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 14:29:47'
    },
    {
      stationName: '济南市历城区幸福柳广场公共充电站',
      pileName: '13号直流充电机',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 14:24:43'
    },
    {
      stationName: '济南市历城区幸福柳广场公共充电站',
      pileName: '04号直流充电机',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 14:24:02'
    },
    {
      stationName: '济南市历城区幸福柳广场公共充电站',
      pileName: '22号直流充电机',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 14:21:41'
    },
    {
      stationName: '济南市章丘区明水公共充电站',
      pileName: '1号直流桩',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 14:21:30'
    },
    {
      stationName: '济南市历城区幸福柳广场公共充电站',
      pileName: '10号直流充电机',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 14:18:50'
    },
    {
      stationName: '学府中天汽车总站超级充电站',
      pileName: '充电机01',
      faultName: '门禁故障',
      faultTime: '2025-10-07 14:10:50'
    },
    {
      stationName: '学府中天汽车总站超级充电站',
      pileName: '充电机01',
      faultName: '门禁故障',
      faultTime: '2025-10-07 14:10:49'
    },
    {
      stationName: '学府中天汽车总站超级充电站',
      pileName: '充电机01',
      faultName: '电度表通讯异常故障',
      faultTime: '2025-10-07 14:10:48'
    },
    {
      stationName: '学府中天汽车总站超级充电站',
      pileName: '充电机01',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 14:10:48'
    },
    {
      stationName: '智充U选飞跃大道重卡充电站',
      pileName: '1049211205020603',
      faultName: '电度表通讯异常故障',
      faultTime: '2025-10-07 14:07:51'
    },
    {
      stationName: '山东省莱芜市开发区汶河大道长运公共交通有限公司公交充电站（内部）',
      pileName: '00704001',
      faultName: '直流母线输出接触器拒动/误动故障',
      faultTime: '2025-10-07 14:04:20'
    },
    {
      stationName: '济南市历城区幸福柳广场公共充电站',
      pileName: '22号直流充电机',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 14:02:15'
    },
    {
      stationName: '泰钢汶汇港物流园',
      pileName: '直流#01',
      faultName: '充电接口过温故障',
      faultTime: '2025-10-07 13:57:52'
    },
    {
      stationName: '智充U选飞跃大道重卡充电站',
      pileName: '1049211205020603',
      faultName: '电度表通讯异常故障',
      faultTime: '2025-10-07 13:52:51'
    },
    {
      stationName: '特来电济南自贸大厦（济南东高速口）充电站',
      pileName: '01#直流充电机',
      faultName: '充电接口过温故障',
      faultTime: '2025-10-07 13:42:17'
    },
    {
      stationName: '济南市历城区华山安置一区公共充电站',
      pileName: '02063009',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 13:41:26'
    },
    {
      stationName: '泰钢汶汇港物流园',
      pileName: '直流#01',
      faultName: '充电接口过温故障',
      faultTime: '2025-10-07 13:37:49'
    },
    {
      stationName: '济南市市中区纬三路24号充电站',
      pileName: '01974003',
      faultName: '缘检测故障',
      faultTime: '2025-10-07 13:32:24'
    },
    {
      stationName: '济南市历城区幸福柳广场公共充电站',
      pileName: '09号直流充电机',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 13:24:51'
    },
    {
      stationName: '舜德路充电站',
      pileName: '01888002',
      faultName: '急停按钮动作故障',
      faultTime: '2025-10-07 13:22:37'
    }
  ]

  //   if (result.code == 0) {
  //     dataList1.value = result.chgOrderData
  //     console.log('获取充电订单', dataList1)
  timer.startTimer({
    DataSource: dataList1.value, //必填
    Dom: scrollBox2.value //必填
    // duration: 10
    // Count: 3,
    // Height: 41
  })

  //   }
}
const OutTimer = () => {
  setTimeout(() => {
    timer.startTimer({
      DataSource: dataList1.value, //必填
      Dom: scrollBox2.value //必填
      // duration: 10
      // Count: 3,
      // Height: 41
    })
  }, 500)
  timer.resumeTimer()
}
const useStopTimer = () => {
  timer.stopTimer()
}
</script>
<style lang="less" scoped>
.general-container {
  position: relative;

  .general-body {
    padding: 0px 10px 10px 10px;
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
      border-bottom: 2px solid rgba(#3fc2ff, 0.2);
      //   margin-bottom: 6px;
      background-color: #000;
      z-index: 999;

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
        // border: 1px solid #6e6767;
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
.chart-flow {
  height: 270px;
  width: 100%;
  // border: 1px solid red;
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
.leftThree {
  // box-shadow: inset 0 0 5px rgb(252, 250, 250);
  width: 1000px;
  padding-top: 10px;
  height: 325px;
  margin: 0 auto;
  //   border: 1px solid #acb3bd;
  //   background: rgba(0, 69, 168, 0.5);
  // background: url(@/assets/images/PageOne/bootom.png) 100% no-repeat;
  // background-size: 100% 100%;
  // margin-bottom: -5px;
  .text1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    height: 45px;
    width: 500px;
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
