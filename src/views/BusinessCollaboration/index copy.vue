<template>
  <div style="padding: 100px 20px 0 20px" class="PageOne">
    <div class="left-all">
      <leftOne></leftOne>
      <br />
      <leftTwo></leftTwo>
      <br />
      <leftThree></leftThree>
    </div>
    <div class="center-all">
      <div class="map">
        <muen :menus="menuData" @selectMenu="selectData"></muen>
        <!-- <Map :isShowArea="true"></Map> -->
      </div>
      <div class="map-bootom">
        <mapBootom></mapBootom>
      </div>
    </div>
    <div class="right-all">
      <rightOne></rightOne>
      <rightTwo></rightTwo>
      <rightThree></rightThree>
    </div>
  </div>
</template>

<script setup>
import leftOne from './leftOne.vue'
import leftThree from './leftThree.vue'
import leftTwo from './leftTwo.vue'
import rightOne from './rightOne.vue'
import rightTwo from './rightTwo.vue'
import rightThree from './rightThree.vue'
import mapBootom from './map-bootom.vue'
import Map from '@/components/Map/index.vue'
import muen from './muen.vue'
import { reqAreaData } from '@/api/areaData'
import { onMounted, ref } from 'vue'
const menuData = ref([])
const getAreaData = async () => {
  // let result = await reqAreaData({ code: '1' })
  // console.log(result)
  // menuData.value = result.data
}
onMounted(() => {
  getAreaData()
})
</script>

<style scoped lang="less">
.PageOne {
  display: flex;
  justify-content: space-around;
}
.left-all {
  // float: left;
  width: 454px;
  height: 1000px;
  // background: #0049ac;
}
.right-all {
  // float: right;
  width: 454px;
  height: 1000px;
  // background: red;
}
.center-all {
  position: relative;
  width: 900px;
  height: 100%;
  // float: left;
  .map {
    width: 100%;
    height: 650px;
  }
  .map-bootom {
    width: 900px;
    height: 330px;
    // background: blue;
  }
}
</style>
