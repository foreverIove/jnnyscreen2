<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { useTimer } from 'scroll_cxs_v3'
const props = defineProps({
  column:{
    type:Number,
    required: true
  },
  scrollRow:{
    type:Number,
    required: true
  },
  news: {
    type: Array,
    default: () => []
  }
})

const timer = useTimer()
let scrollBox2 = ref(null)
onMounted(()=>{
  nextTick(()=>{
    getData()
  })
})
const getData = async () => {
  timer.startTimer({DataSource:props.news, Dom:scrollBox2.value, duration:80, Count:props.scrollRow,Height: 42})
}
const OutTimer = () => {
  timer.startTimer({DataSource:props.news, Dom:scrollBox2.value, duration:80, Count:props.scrollRow,Height: 42})
}
const useStopTimer = () => {
  timer.stopTimer()
}
</script>

<template>
  <div style="display: flex;flex-direction: column">
    <div
      class="scroll-box"
      ref="scrollBox2"
      data-id="fff"
      @mouseenter="useStopTimer"
      @mouseleave="OutTimer"
    >
      <div v-for="(item,index) in news" class="news-item">
        <div :class="item.time==='已处理'?'news-time':'news-time-no'" v-if="item.time">{{ item.time }}</div>
        <el-tooltip v-if="item.content" :content="item.content" placement="top">
          <el-text class="news-content" :style="{width:column === 2?'70%':'60%'}" truncated>{{ item.content }}</el-text>
        </el-tooltip>
        <div class="department" :style="{'background-color':index%3===0?'#027e79':index%3===1?'#0060b3':'#4b9fe6'}" v-if="item.department">{{ item.department }}</div>

      </div>
    </div>


  </div>

</template>

<style scoped lang="less">
.news-item {
  display: flex;
  color: white;
  box-sizing: content-box;
  overflow: hidden;
  padding: 10px 20px;
  &:hover {
    // border: 1px solid #fff;
    box-shadow:
      inset 0 0 5px rgba(0, 204, 255, 0.8),
      inset 0 0 10px rgba(0, 204, 255, 0.6),
      inset 0 0 15px rgba(0, 204, 255, 0.4),
      inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
  }
}
.news-content {
  color: white;
  margin-left: 20px;
}

.news-time {
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: wrap;
  font-size: 14px;
  text-align: right;
  padding-left: 10px;
  margin-left: 10px;
  background: url("@/assets/images/business/yichuli.png") no-repeat;
}
.news-time-no{
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: wrap;
  font-size: 14px;
  text-align: right;
  padding-left: 10px;
  margin-left: 10px;
  background: url("@/assets/images/business/daichuli.png") no-repeat;
}
.department{
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: wrap;
  font-size: 14px;
  text-align: right;
  padding: 2px 10px;
  margin-left: 40px;
  border-radius: 3px;
  background-color: #00b6bb;
}
</style>