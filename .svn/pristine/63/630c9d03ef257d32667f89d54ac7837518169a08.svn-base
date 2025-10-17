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
        <el-tooltip class="box-item" effect="dark" content="济南市市民已使用充电补贴的分布情况" placement="right">
          <div class="falseAct" :class="isShowS ? 'activeS' : ''" style="
              width: 200px;
              line-height: 68px;
              position: absolute;
              top: 50px;
              font-size: 24px;

              text-align: center;
            " @click="changeState()">
            补贴使用分布
          </div>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="市民在济南市充电费用分布情况" placement="right">
          <div class="falseAct" :class="isShowS ? '' : 'activeS'" style="
              width: 200px;
              line-height: 68px;
              position: absolute;
              top: 130px;
              font-size: 24px;

              text-align: center;
            " @click="changeState()">
            充电消费分布
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
          1272310.08元
        </div>
        <div :style="{ color: isShowS ? '#10FFFC' : '#fff ' }" style="
            position: absolute;
            top: 140px;
            left: 240px;
            font-size: 40px;
            background-color: #061b31;
          ">
          226535207.38元
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
const menuData = ref([])
const getAreaData = async () => {
  // let result = await reqAreaData({ code: '1' })
  // console.log(result)
  // menuData.value = result.data
}
onMounted(() => {
  getAreaData()
})
const FenBu = ref([])
FenBu.value = cdl
const isShowS = ref(true)
const changeState = () => {
  isShowS.value = !isShowS.value
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
