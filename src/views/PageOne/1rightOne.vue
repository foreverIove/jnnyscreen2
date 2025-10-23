<template>
  <div class="leftThree">
    <div class="text1">停车难区块</div>
    <!-- <div class="text2">重点区域实时停车预警</div> -->
    <div class="general-container">
      <div class="general-body">
        <div class="table-header">
          <span style="width: 32%">区域</span>
          <span style="width: 32%">预警</span>
          <span style="width: 32%">推荐周边停车场</span>
          <!-- <span style="width: 30%">高峰时段</span> -->
        </div>
        <!-- 祖先元素 -->
        <div class="scrollView" ref="listBox" id="scrollableContainer">
          <!-- 虚拟列表，无数据 -->
          <div :style="{ height: listHeight + 'px' }" style="float: left"></div>
          <div class="scrollable-div">
            <div
              style="height: 42px; background: #06407c; margin-bottom: 6px; color: #fff"
              v-for="(item, index) in list"
            >
              {{ item.staname }}
            </div>

            <!-- 更多内容 -->
          </div>
        </div>
      </div>
      <!-- {{ dataList1 }} -->
    </div>
  </div>
</template>
<script setup>
import { useTimer } from '@/hooks/useMove3.ts'
// import { useTimer } from 'scroll_cxs_v3'
import { onMounted, reactive, ref, watch } from 'vue'
// import { reqQueryChgOrderData } from '@/api/operationAnalysis'
let dataList1 = ref([])
let scrollBox22 = ref(null)
const timer = useTimer()
// 虚拟列表
const list = ref([])
const listHeight = ref(0)
const itemSize = ref(50)
const containerHeight = ref(200)
const visibleCount = ref(6)
const data = ref([])
const startOffset = ref(0)
onMounted(() => {
  // console.log(Echarts.value)
  // useMove(dataList1.value,scrollBox2.value)
  getData()
  listHeight.value = dataList1.value.length * itemSize.value //计算高度
  console.log(listHeight.value, '虚拟列表')
  data.value = dataList1 //数据源给data
  list.value = dataList1.value.slice(0, 4) //截6个
  // console.log(list.value)
  // debugger
  console.log(list.value, '虚拟')
  // console.log(useMove)
  const scrollableDiv = document.getElementById('scrollableContainer')
  function smoothScrollToBottom(element) {
    const targetScrollTop = element.scrollHeight
    let currentScrollTop = element.scrollTop
    const step = 5
    const interval = setInterval(() => {
      currentScrollTop += step

      console.log('滚动条高度：', element.scrollHeight, targetScrollTop, currentScrollTop)

      if (currentScrollTop >= targetScrollTop) {
        console.log('进入6')
        element.scrollTop = targetScrollTop
        clearInterval(interval)
        smoothScrollToTop(scrollableDiv)
      } else {
        onScroll()
        element.scrollTop = currentScrollTop
      }
    }, 500)
  }
  setTimeout(() => {
    smoothScrollToBottom(scrollableDiv)
  }, 1000)
})
const listBox = ref(null)
// data就是数据源
const onScroll = () => {
  //当前滚动位置
  let scrollTop = listBox.value.scrollTop
  // 列表开始索引0 0 0 0 0 1 1 2 2 3 4 4 4
  let startIndex = Math.floor(scrollTop / itemSize.value)
  // 列表结束索引
  let endIndex = Math.ceil((scrollTop + containerHeight.value) / itemSize.value) - 1
  // console.log(
  //   '计算',
  //   scrollTop + containerHeight.value,
  //   itemSize.value,
  //   Math.ceil((scrollTop + containerHeight.value) / itemSize.value)
  // )
  console.log('开始和结束', startIndex, endIndex)
  list.value = dataList1.value.slice(startIndex, endIndex)
  // 列表移动距离
  startOffset.value = scrollTop - (scrollTop % itemSize.value)
}
// 向上滑动
// 向上滑动的函数
const smoothScrollToTop = (element) => {
  const targetScrollTop = 0 // 滚动条目标位置是顶部
  let currentScrollTop = element.scrollTop
  const step = 1

  const interval = setInterval(() => {
    currentScrollTop -= step // 每次减少 scrollTop 来向上滚动

    console.log('滚动条高度：', element.scrollHeight, targetScrollTop, currentScrollTop)

    if (currentScrollTop <= targetScrollTop) {
      console.log('已滚动到顶部')
      element.scrollTop = targetScrollTop
      clearInterval(interval)
      console.log('到顶了')
      // 如果需要滚动完之后继续自动滚动，重新开始调用此函数
      // smoothScrollToTop(scrollableDiv)
    } else {
      onScroll()
      element.scrollTop = currentScrollTop
    }
  }, 50)
}

// 虚拟列表
const getData = async () => {
  //   let result = await reqQueryChgOrderData()
  dataList1.value = [
    {
      staname: '山东省图书馆',
      transactionid: '●紧张',
      starttime: '10',
      endtime: '11:00-2:00'
    },
    {
      staname: '省立医院',
      transactionid: '●爆满',
      starttime: '0',
      endtime: '11:00-2:00'
    },
    {
      staname: '齐鲁软件园',
      transactionid: '●爆满',
      starttime: '3',
      endtime: '11:00-2:00'
    },
    {
      staname: '汉峪金谷',
      transactionid: '●紧张',
      starttime: '15',
      endtime: '11:00-2:00'
    },
    {
      staname: '洪家楼',
      transactionid: '●紧张',
      starttime: '20',
      endtime: '11:00-2:00'
    },
    {
      staname: '大明湖',
      transactionid: '●紧张',
      starttime: '25',
      endtime: '11:00-2:00'
    },
    {
      staname: '济南站',
      transactionid: '●紧张',
      starttime: '12',
      endtime: '11:00-2:00'
    },
    {
      staname: '千佛山风景区',
      transactionid: '●紧张',
      starttime: '30',
      endtime: '11:00-2:00'
    },
    {
      staname: '何瑞广场',
      transactionid: '●紧张',
      starttime: '10',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中心',
      transactionid: '●爆满',
      starttime: '0',
      endtime: '11:00-2:00'
    },
    {
      staname: '济南动物园',
      transactionid: '●爆满',
      starttime: '2',
      endtime: '11:00-2:00'
    },
    {
      staname: '山东省体育中心',
      transactionid: '●爆满',
      starttime: '3',
      endtime: '11:00-2:00'
    },
    {
      staname: '东方大厦',
      transactionid: '●紧张',
      starttime: '7',
      endtime: '11:00-2:00'
    },
    {
      staname: '济南恒隆广场',
      transactionid: '●紧张',
      starttime: '6',
      endtime: '11:00-2:00'
    }
  ]
  //   if (result.code == 0) {
  //     dataList1.value = result.chgOrderData
  //     console.log('获取充电订单', dataList1)
  // timer.startTimer({
  //   DataSource: dataList1.value, //必填
  //   Dom: scrollBox22.value, //必填
  //   // duration: 10
  //   Count: 3
  //   // Height: 41
  // })

  //   }
}
const OutTimer = () => {
  // setTimeout(() => {
  // timer.startTimer({
  //   DataSource: dataList1.value, //必填
  //   Dom: scrollBox22.value //必填
  //   // duration: 10
  //   // Count: 3,
  //   // Height: 41
  // })
  timer.resumeTimer()
  // }, 500)
}
const useStopTimer = () => {
  timer.stopTimer()
  console.log('触发定时器清除', timer.stopTimer)
  // useMove(dataList1.value, scrollBox22.value, true, 2, 42)
}
</script>

<style lang="less" scoped>
/*chrome 和Safari*/
.scrollView::-webkit-scrollbar {
  // width: 0 !important;
}
/*IE 10+*/
.scrollView {
  // -ms-overflow-style: none;
}
/*Firefox*/
.scrollView {
  // overflow: -moz-scrollbars-none;
}
// 祖先
.scrollView {
  // width: 200px;
  height: 200px;
  // background-color: red;
  overflow-y: scroll;
  position: relative;
}
// 父组件
.scrollable-div {
  width: 370px;
  height: 200px;
  overflow-y: auto;
  // border: 1px solid #000;
  position: sticky;
  top: 0px;
}

.leftThree {
  padding-top: 10px;
  height: 315px;
  //   border: 1px solid #acb3bd;
  // background: #0049ac;
  background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  background-size: 100% 100%;
  margin-bottom: -5px;
  overflow: hidden;
  .text1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/images/PageOne/title.png) 100% no-repeat;
    background-size: 100% 100%;
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

    .bbb {
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
        overflow:;
        //height: 40px;
        //line-height: 40px;
        //display: flex;
        &:hover {
          // border: 1px solid #fff;
          box-shadow:
            inset 0 0 5px rgba(0, 204, 255, 0.8),
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
