<template>
  <div class="general-container">
    <div class="general-body">
      <div class="table-header">
        <span style="width: 25%">充电站</span>
        <span style="width: 25%">订单号</span>
        <span style="width: 22%">故障开始时间</span>
        <span style="width: 30%">故障结束时间</span>
      </div>
      <div class="box">
        <div class="scroll-box" ref="scrollBox2" @mouseover="useStopTimer" @mouseleave="OutTimer">
          <div class="scroll-box-item" v-for="item in dataList1" :key="item.id">
            <div class="ellipsis" style="width: 25%">{{ item.staname }}</div>
            <div
              class=" "
              style="
                width: 25%;
                height: 100%;
                padding-top: 5px;
                align-items: flex-start;
                word-wrap: break-word;
              "
            >
              {{ item.transactionid }}
            </div>
            <div class="scroll-box-title ellipsis" style="width: 25%">{{ item.starttime }}</div>
            <div style="width: 25%; margin-left: 0px; border-box: box-sizing">
              {{ item.endtime }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {{ dataList1 }} -->
  </div>
</template>

<script setup>
// import { useMove, useStopTimer } from '@/hooks/useMove.ts'
import { onMounted, reactive, ref, watch } from 'vue'
// import { reqQueryChgOrderData } from '@/api/operationAnalysis'
let dataList1 = ref([])
let scrollBox2 = ref(null)
onMounted(() => {
  // console.log(Echarts.value)
  // useMove(dataList1.value,scrollBox2.value)
  // getData()
})

const getData = async () => {
  //   let result = await reqQueryChgOrderData()
  dataList1.value = [
    {
      staname: '山东积成电子有限公司',
      transactionid: 99,
      starttime: '2023-12-17 23:56:34',
      endtime: '2023-12-17 23:56:34'
    },
    {
      staname: '山东积成电子有限公司',
      transactionid: 99,
      starttime: '2023-12-17 23:56:34',
      endtime: '2023-12-17 23:56:34'
    },
    {
      staname: '山东积成电子有限公司',
      transactionid: 99,
      starttime: '2023-12-17 23:56:34',
      endtime: '2023-12-17 23:56:34'
    },
    {
      staname: '山东积成电子有限公司',
      transactionid: 99,
      starttime: '2023-12-17 23:56:34',
      endtime: '2023-12-17 23:56:34'
    },
    {
      staname: '山东积成电子有限公司',
      transactionid: 99,
      starttime: '2023-12-17 23:56:34',
      endtime: '2023-12-17 23:56:34'
    },
    {
      staname: '山东积成电子有限公司',
      transactionid: 99,
      starttime: '2023-12-17 23:56:34',
      endtime: '2023-12-17 23:56:34'
    },
    {
      staname: '山东积成电子有限公司',
      transactionid: 99,
      starttime: '2023-12-17 23:56:34',
      endtime: '2023-12-17 23:56:34'
    },
    {
      staname: '山东积成电子有限公司',
      transactionid: 99,
      starttime: '2023-12-17 23:56:34',
      endtime: '2023-12-17 23:56:34'
    },
    {
      staname: '山东积成电子有限公司',
      transactionid: 99,
      starttime: '2023-12-17 23:56:34',
      endtime: '2023-12-17 23:56:34'
    },
    {
      staname: '山东积成电子有限公司',
      transactionid: 99,
      starttime: '2023-12-17 23:56:34',
      endtime: '2023-12-17 23:56:34'
    }
  ]
  //   if (result.code == 0) {
  //     dataList1.value = result.chgOrderData
  //     console.log('获取充电订单', dataList1)
  useMove(dataList1.value, scrollBox2.value)
  //   }
}
const OutTimer = () => {
  setTimeout(() => {
    useMove(dataList1.value, scrollBox2.value)
  }, 500)
}
useStopTimer()
</script>

<style lang="less" scoped>
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
      margin-bottom: 6px;
      background-color: #063271;

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
        flex: 1;
        justify-content: stretch;
        height: 42px;
        margin-bottom: 6px;
        text-align: center;
        display: flex;
        // align-items: center;
        align-items: center;
        background: rgba(#3fc2ff, 0.1);

        //height: 40px;
        //line-height: 40px;
        //display: flex;

        div {
          //flex: 1;
          color: #99bff3;
          pointer-events: auto;
        }
      }
    }
  }
}
</style>
