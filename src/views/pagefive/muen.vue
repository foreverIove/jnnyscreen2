<template>
  <!-- animate__backInLeft -->
  <div class="center-top-left" ref="boxAll">
    <div
      v-show="menuShow"
      class="menus-container animate__animated"
      :class="menuShow ? 'animate__zoomInUp' : 'animate__zoomOut'"
      @mouseleave="hideSubmenu()"
    >
      <div class="first-menus">
        <div
          class="menus-item"
          v-for="(item, index) in firstMenus"
          @click.stop="selectFirst(item, index)"
          @mouseover="overMenus(item, index)"
        >
          {{ item.name }}
        </div>
        <div
          style="color: #fff; margin: 0 auto; position: absolute; bottom: 50px; left: 40px"
          @click="upmenu()"
        >
          收起
        </div>
      </div>
      <!-- " -->
      <div class="second-menus" v-if="showSecond">
        <div
          class="menus-item"
          v-for="(item, index) in firstMenus[overFirstIndex]['children']"
          :key="index"
          @mouseover="overSecondMenus(item, index)"
          @click.stop="selectSecond(item, index)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="second-menus" v-if="showThree">
        <div
          class="menus-item"
          v-for="(item, index) in firstMenus[overFirstIndex]['children'][overSecondIndex][
            'children'
          ]"
          :key="index"
          @click.stop="selectThree(item, index)"
        >
          <el-tooltip
            v-if="item.name"
            :content="item.name"
            placement="right"
            style="width: 100%; overflow: hidden"
          >
            <el-text truncated style="color: white; width: 100%; overflow: hidden">{{
              item.name
            }}</el-text>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- v-for="c2 in c1.c2" :key="c2.id">
        {{ c2.name }} -->
<script setup lang="ts">
import 'animate.css'
import { computed, onMounted, ComputedRef, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'

import { storeToRefs } from 'pinia'
import useType from '@/stores/counter'
let changeType = useType()

let props = defineProps({
  menus: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['selectMenu'])
onMounted(() => {})
const firstMenus: ComputedRef<[]> = computed(() => props.menus)

let overFirstIndex = ref(0)
let overSecondIndex = ref(0)
let showSecond = ref(false)
let showThree = ref(false)
const overMenus = (item, index) => {
  // console.log(item, index)
  overFirstIndex.value = index
  showSecond.value = item.hasChildren
  showThree.value = false
}
const selectFirst = (item, index) => {
  // console.log(item, index)
  overFirstIndex.value = -1
  showSecond.value = false
  showThree.value = false
  emit('selectMenu', firstMenus.value[index].name, firstMenus.value[index].code + '')
  ElMessage({
    message: '你选择了：' + firstMenus.value[index].name + firstMenus.value[index].adcode
  })
  // 传值给map
  // store.changeAdcode(firstMenus.value[index].adcode)

  const storeItem = storeToRefs(changeType)
  storeItem.adcode.value = firstMenus.value[index].adcode
  storeItem.zoompinia.value = firstMenus.value[index].zoom
  console.log(firstMenus.value[index].coordinate)
  changeType.moveMap2(firstMenus.value[index].coordinate)
  console.log('999', firstMenus.value[index])
  changeType.putname(firstMenus.value[index].list, firstMenus.value[index].name)
}
//鼠标移开菜单区域时，隐藏二三级菜单
const hideSubmenu = () => {
  showSecond.value = false
  showThree.value = false
}
const overSecondMenus = (item, index) => {
  // console.log(item, index)
  overSecondIndex.value = index
  showThree.value = item.hasChildren
}
const selectSecond = (item, index) => {
  // console.log(item, index)
  emit(
    'selectMenu',
    firstMenus.value[overFirstIndex.value].name + '-' + item.name,
    firstMenus.value[overFirstIndex.value].code + '-' + item.code
  )
  ElMessage({
    message: '你选择了：' + firstMenus.value[overFirstIndex.value].name + '-' + item.name
  })
  showSecond.value = false
  showThree.value = false
}
const selectThree = (item, index) => {
  // console.log(item, index)
  emit(
    'selectMenu',
    firstMenus.value[overFirstIndex.value].name +
      '-' +
      firstMenus.value[overFirstIndex.value]['children'][overSecondIndex.value].name +
      '-' +
      item.name,
    firstMenus.value[overFirstIndex.value].code +
      '-' +
      firstMenus.value[overFirstIndex.value]['children'][overSecondIndex.value].code +
      '-' +
      item.code
  )
  ElMessage({
    message:
      '你选择了：' +
      firstMenus.value[overFirstIndex.value].name +
      '-' +
      firstMenus.value[overFirstIndex.value]['children'][overSecondIndex.value].name +
      '-' +
      item.name
  })
  showSecond.value = false
  showThree.value = false
}
// const leaveSecond = (item, index) => {
//   // overSecondIndex.value = 0
//   // showThree.value = false
// }
// const onSecondMove = (ev) => {
// }
// 收起
let menuShow = ref(true)
const upmenu = () => {
  // menuShow.value = false
  menuShow.value = !menuShow.value
}
const boxAll = ref(null)
</script>

<style scoped lang="less">
.menus-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  box-shadow: inset 0 0 5px rgb(252, 250, 250);
  // background: url(@/assets/images/PageOne/menu.png) 100% no-repeat;
  // background-size: 100% 100%;
}

.first-menus {
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100%;
  padding-top: 20px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

.menus-item {
  width: 100%;
  height: 40px;
  color: white;
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  justify-content: center;
  text-align: center;
  line-height: 40px;

  &:hover {
    // background-color: rgb(83, 128, 248);
    background: url(@/assets/images/PageOne/menu-active.png) 100% no-repeat;
    background-size: 100% 100%;
  }
}

.second-menus {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 100%;
  overflow: scroll;
  // background-color: rgba(9, 20, 120, 0.83);
  background: #000;
  // background: url(@/assets/images/PageOne/menu.png) 100% no-repeat;
  // background-size: 100% 100%;
  box-shadow: inset 0 0 5px rgb(252, 250, 250);
  z-index: 9999;

  &::-webkit-scrollbar {
    display: none;
  }
}
.center-top-left {
  width: 120px;
  height: 620px;
  // background: #154899;
  // background: url(@/assets/images/pageOne/menu.png) 100% no-repeat;
  // background-size: 100% 100%;
  position: absolute;
  z-index: 6;
  left: 10px;
  top: 13px;
  padding: 10px;
  // overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  .muen-item {
    line-height: 40px;
    // background: #fff;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    &:hover {
      // background: rgba(63, 80, 230, 0.7);
      background: url(@/assets/images/PageOne/menu-active.png) 100% no-repeat;
      background-size: 100% 100%;
    }
  }
  .muen2-item {
    line-height: 40px;
    // background: #fff;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    &:hover {
      // background: rgba(63, 80, 230, 0.7);
      background: url(@/assets/images/PageOne/menu-active.png) 100% no-repeat;
      background-size: 100% 100%;
    }
  }
  .menu2 {
    width: 100px;
    height: 500px;
    border: 1px solid red;
    position: absolute;
    left: 117px;
    background: #17489a;
  }
}
</style>
