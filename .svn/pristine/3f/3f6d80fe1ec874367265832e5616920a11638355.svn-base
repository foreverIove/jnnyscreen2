<template>
  <div class="list-wrap">
    <div class="text1">投诉问题总览</div>
    <div class="general-container">
      <div class="general-body">
        <div class="table-header">
          <span style="width: 45%;">{{ headers[0] }}</span>
          <span style="width: 20%">{{ headers[1] }}</span>
          <span style="width: 20%">{{ headers[2] }}</span>
          <span style="width: 15%">{{ headers[3] }}</span>
        </div>
        <div class="box">
          <div
            class="scroll-box"
            ref="scrollBox2"
            data-id="fff"
            @mouseenter="useStopTimer"
            @mouseleave="OutTimer"
          >
            <div class="scroll-box-item" v-for="(item,index) in dataList1" :key="item.id">
              {{ index }}
              <div class="ellipsis" style="width: 45%; line-height: 15px;text-align: left">
                <el-tooltip :content="item.staname" placement="top-start">
                  <el-text truncated style="color: white">
                    {{ item.staname }}
                  </el-text>
                </el-tooltip>
              </div>
              <div class="scroll-box-title ellipsis" style="width: 20%;">
                {{ item.starttime }}
              </div>
              <div class="scroll-box-title ellipsis" style="width: 20%;">
                {{ item.endtime }}
              </div>
              <div style="width: 15%; margin-left: 0px; border-box: box-sizing">
                {{ item.status }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- {{ dataList1 }} -->
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUpdate, onMounted, reactive, ref, watch } from 'vue'
import { useTimer } from 'scroll_cxs_v3'

const timer = useTimer()
let dataList1 = computed(() => {
  return props.dataList
})
let scrollBox2 = ref(null)
const props = defineProps({
  headers: Array,
  dataList: Array
})
onMounted(() => {
  nextTick(()=>{
    getData()
  })
})
const getData = async () => {
  timer.startTimer({DataSource:dataList1.value, Dom:scrollBox2.value, duration:80, Count:5,Height: 42})
}
const OutTimer = () => {
    timer.startTimer({DataSource:dataList1.value, Dom:scrollBox2.value, duration:80, Count:5,Height: 42})
}
const useStopTimer = () => {
  timer.stopTimer()
}
</script>

<style lang="less" scoped>
.list-wrap {
  padding-top: 10px;
  width: 600px;
  height: 390px;
  background-color: rgba(10, 76, 173, 0.55);
  background-size: 100% 100%;
  margin-bottom: -5px;
  overflow: hidden;

  .text1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/images/PageOne/title.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 40px;
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
    padding: 0px 10px 10px 10px;
    margin-top: 10px;
    overflow: hidden;
    height: 310px;

    .table-header {
      height: 40px;
      line-height: 50px;
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
        //height: 40px;
        //line-height: 40px;
        //display: flex;
        &:hover {
          // border: 1px solid #fff;
          box-shadow: inset 0 0 5px rgba(0, 204, 255, 0.8),
          inset 0 0 10px rgba(0, 204, 255, 0.6),
          inset 0 0 15px rgba(0, 204, 255, 0.4),
          inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
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
