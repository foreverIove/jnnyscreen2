<template>
  <div class="leftThree">
    <div class="text1" style="padding-left: 60px">
      首次充电区域排行<el-tooltip class="box-item" effect="dark" content="用户注册后第一次充电的行政区域(近一月)" placement="right">
        <el-icon :size="20">
          <QuestionFilled />
        </el-icon>
      </el-tooltip>
    </div>
    <div class="general-container">
      <div class="general-body">
        <!-- <div class="table-header">
          <span style="width: 25%">导航</span>
          <span style="width: 25%">导航</span>
          <span style="width: 22%">导航</span>
          <span style="width: 30%">导航</span>
        </div> -->
        <div class="box">
          <div class="scroll-box" ref="scrollBox2" data-id="aaa" @mouseover="useStopTimer" @mouseleave="OutTimer">
            <div class="scroll-box-item" v-for="(item, index) in dataList1" :key="item.id">
              <div style="width: 63.5px; height: 35px; position: relative">
                <div v-if="index >= 3" style="
                    position: absolute;
                    color: #11acd8;
                    left: 9px;
                    font-weight: bold;
                    font-size: 20px;
                    z-index: 999;
                    top: 2px;
                    text-align: center;
                    width: 45.5px;
                    line-height: 35.5px;
                  ">
                  {{ index + 1 }}
                </div>
                <img v-if="index == 0" src="../../assets/parking/logo1.png" alt=""
                  style="width: 53.5px; height: 35px" />
                <img v-if="index == 1" src="../../assets/parking/logo2.png" alt=""
                  style="width: 53.5px; height: 35px" />
                <img v-if="index == 2" src="../../assets/parking/logo3.png" alt=""
                  style="width: 53.5px; height: 35px" />
                <img v-if="index > 2" src="../../assets/parking/logo4.png" alt="" style="width: 53.5px; height: 35px" />
              </div>
              <div class="ellipsis" style="width: 50%; line-height: 15px">
                {{ item.staname }}
              </div>

              <div style="
                  width: 25%;
                  font-size: 25px;
                  margin-left: 0px;
                  border-box: box-sizing;
                  float: right;
                ">
                <span v-if="index == 0" style="color: #f3d06d">{{ item.transactionid }}</span>
                <span v-else-if="index == 1" style="color: #e79052">{{ item.transactionid }}</span>
                <span v-else-if="index == 2" style="color: #e79052">{{ item.transactionid }}</span>
                <span v-else style="color: #10fffc">{{ item.transactionid }}</span>
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
import { reqMonthAdminDistrictNewUser } from '@/api/ParkingComprehensive'
import { reqFaultTypeTopData } from '@/api/pagefive'
let dataList1 = ref([])
let scrollBox2 = ref(null)
const timer = useTimer()
onMounted(() => {
  // console.log(Echarts.value)
  // useMove(dataList1.value,scrollBox2.value)
  getData()
  timer.pauseTimer()
})

const getData = async () => {
  // let result = await reqFaultTypeTopData()
  // console.log('故障类型排行', result)
  // if (result.code == 0) {
  // }
  dataList1.value = [
    {
      staname: '历下区',
      transactionid: 28,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '历城区',
      transactionid: 27,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '市中区',
      transactionid: 20,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '天桥区',
      transactionid: 12,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '章丘区',
      transactionid: 10,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '济阳区',
      transactionid: 5,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '莱芜区',
      transactionid: 4,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '长清区',
      transactionid: 3,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '平阴区',
      transactionid: 2,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '高新区',
      transactionid: 1,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '钢城区',
      transactionid: 1,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '商河区',
      transactionid: 1,
      starttime: '350',
      endtime: '11:00-2:00'
    }
    // {
    //   staname: '起步区',
    //   transactionid: 99,
    //   starttime: '350',
    //   endtime: '11:00-2:00'
    // },
    // {
    //   staname: '南山区',
    //   transactionid: 99,
    //   starttime: '350',
    //   endtime: '11:00-2:00'
    // }
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
svg {
  position: relative;
  top: 4px;
}
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
        // position: relative;
        padding: 10px;
        box-sizing: border-box;
        font-size: 12px;
        flex: 1;
        justify-content: space-between;
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
  padding-top: 10px;
  height: 325px;
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
