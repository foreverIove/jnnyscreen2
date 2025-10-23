<template>
  <div style="padding: 70px 20px 0 20px" class="PageOne">
    <div class="left-all">
      <leftOne></leftOne>
      <br />
      <leftTwo></leftTwo>
      <br />
      <leftThree></leftThree>
    </div>
    <div class="center-all">
      <div class="map" style="position: relative">
        <Map :boundary="false" :MapSure="'BusinessCollaboration'" :dataFB="dataFB" :RLData="RLData"
          :FenBu="FenBu"></Map>
        <!-- <Map :boundary="false" :MapSure="'BusinessCollaboration'" :dataFB="dataFB" :RLData="RLData"
          :FenBu="FenBu"></Map> -->
        <el-tooltip class="box-item" effect="dark" content="本月的电费+服务费的分布情况" placement="right">
          <div class="falseAct" :class="isShowS ? 'activeS' : ''" style="
              width: 200px;
              line-height: 68px;
              position: absolute;
              top: 50px;
              font-size: 24px;

              text-align: center;
            " @click="changeState()">
            本月收入分布图
          </div>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="本月服务费分布情况" placement="right">
          <div class="falseAct" :class="isShowS ? '' : 'activeS'" style="
              width: 200px;
              line-height: 68px;
              position: absolute;
              top: 130px;
              font-size: 24px;

              text-align: center;
            " @click="changeState()">
            利润分布图
          </div>
        </el-tooltip>
        <div :style="{ color: isShowS ? '#fff' : '#10FFFC ' }" style="
            position: absolute;
            top: 60px;
            left: 240px;
            font-size: 40px;
            background-color: #061b31;
            padding: 0;
          ">
          {{ qh1 }}元
        </div>
        <div :style="{ color: isShowS ? '#10FFFC' : '#fff ' }" style="
            position: absolute;
            top: 140px;
            left: 240px;
            font-size: 40px;
            background-color: #061b31;
          ">
          {{ qh2 }}元
        </div>
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
import { cdl } from '../frontpage/cdl'
import { cdl2 } from '../frontpage/cdl2'
const menuData = ref([])
const getAreaData = async () => {
  // let result = await reqAreaData({ code: '1' })
  // console.log(result)
  // menuData.value = result.data
}
onMounted(() => {
  getAreaData()
  qh1.value = cdl.reduce((sum, item) => sum + item.count, 0).toFixed(2)
  qh2.value = cdl2.reduce((sum, item) => sum + item.count, 0).toFixed(2)
})
const FenBu = ref([])

FenBu.value = cdl
const isShowS = ref(true)
const qh1 = ref(0)
const qh2 = ref(0)
const changeState = () => {
  isShowS.value = !isShowS.value
  if (isShowS.value) {
    // 收入
    FenBu.value = cdl
    // qh1.value = cdl.reduce((sum, item) => sum + item.count, 0).toFixed(2)
  } else {
    // 利润
    FenBu.value = cdl2
    // qh2.value = cdl2.reduce((sum, item) => sum + item.count, 0).toFixed(2)
    // cdlzj.value = geoJsonData.value.features.reduce((sum, item) => sum + item.properties.rank, 0)
  }
}
</script>

<style scoped lang="less">
.falseAct {
  background: url(@/assets/Business/trueActive.png) 100% no-repeat;
  background-size: 100% 100%;
  color: #10fffc;
}
.activeS {
  // background: red;
  // Business
  background: url(@/assets/Business/falseActive.png) 100% no-repeat;
  background-size: 100% 100%;
  color: #fff;
}
.PageOne {
  display: flex;
  justify-content: space-between;
}
.left-all {
  // float: left;
  width: 352px;
  height: 1000px;
  // border: 1px solid red;
  overflow: hidden;
  // background: #0049ac;
}
.right-all {
  // float: right;
  width: 352px;
  height: 1000px;
  overflow: hidden;
  // background: red;
}
.center-all {
  position: relative;
  width: 1103px;
  height: 100%;
  // float: left;
  .map {
    width: 100%;
    height: 668px;
    // background: red;
    background: url(@/assets/pagefive/bgBIG.png) 100% no-repeat;
    background-size: 100% 100%;
  }
  .map-bootom {
    width: 1103px;
    height: 300px;
    margin: 0 auto;
    // background: blue;
  }
}
</style>
