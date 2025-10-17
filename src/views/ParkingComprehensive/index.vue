<template>
  <div style="padding: 50px 20px 0 20px" class="PageOne">
    <div class="left-all">
      <leftOne></leftOne>
      <br />
      <leftTwo></leftTwo>
      <br />
      <leftThree></leftThree>
    </div>
    <div class="center-all">
      <div class="map" style="position: relative">
        <!-- <muen :menus="menuData" @selectMenu="selectData"></muen> -->
        <div style="
            width: 200px;
            line-height: 68px;
            position: absolute;
            top: 50px;
            font-size: 24px;
            color: #fff;
            z-index: 99999999;
            text-align: center;
          ">
          实时充电人数：-
        </div>
        <Map :isShowArea="true" :RLData="RLData" :MapSure="'SSCDuser'"></Map>
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
import { reqUserChargingMap } from '@/api/ParkingComprehensive'
const RLData = ref([])
const getAreaData = async () => {
  // let result = await reqUserChargingMap()

  // if (result.code == 0) {
  //   RLData.value = result.list
  //   console.log(RLData.value, '热力图啊')
  // }
  RLData.value = [
    {
      lng: 116.91362762451172,
      lat: 36.643836975097656,
      name: '特来电济南腊山北路大正出租车充电站',
      id: 11,
      terminal_count: null,
      totalchargetime: null,
      count: 10,
      offline_terminal_count: null
    },
    {
      lng: 116.88983917236328,
      lat: 36.665470123291016,
      name: '济南市槐荫区高铁西站充电站（东区雨棚）',
      id: 161,
      terminal_count: null,
      totalchargetime: null,
      count: 5,
      offline_terminal_count: null
    },
    {
      lng: 117.02323150634766,
      lat: 36.63610076904297,
      name: '济南市市中区舜耕山庄充电站',
      id: 171,
      terminal_count: null,
      totalchargetime: null,
      count: 5,
      offline_terminal_count: null
    },
    {
      lng: 117.17325592041016,
      lat: 36.66972351074219,
      name: '济南市历下区省环保厅停车场充电站',
      id: 177,
      terminal_count: null,
      totalchargetime: null,
      count: 5,
      offline_terminal_count: null
    },
    {
      lng: 116.94096374511719,
      lat: 36.65163040161133,
      name: '济南市槐荫区腊山立交充电站',
      id: 239,
      terminal_count: null,
      totalchargetime: null,
      count: 6,
      offline_terminal_count: null
    },
    {
      lng: 117.5240478515625,
      lat: 36.68059158325195,
      name: '济南市章丘区政府停车场充电站',
      id: 330,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    },
    {
      lng: 117.64091491699219,
      lat: 36.70399856567383,
      name: '济南市章丘区普集供电所充电站',
      id: 339,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    },
    {
      lng: 116.93634796142578,
      lat: 36.68635177612305,
      name: '特来电济南润华汽车匡山凯迪拉克充电站',
      id: 503,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    },
    {
      lng: 116.95215606689453,
      lat: 36.68849182128906,
      name: '济南市天桥区黄岗工业园充电站',
      id: 571,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    },
    {
      lng: 117.01779174804688,
      lat: 36.60606002807617,
      name: '舜德路充电站',
      id: 634,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    },
    {
      lng: 117.66954040527344,
      lat: 36.24547576904297,
      name: '特来电中国石化济南莱芜第44加油站充电站',
      id: 649,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    },
    {
      lng: 117.20500946044922,
      lat: 36.64522933959961,
      name: '智能交通产业园L1地下停车区',
      id: 726,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    },
    {
      lng: 116.98410034179688,
      lat: 36.670257568359375,
      name: '特来电济南国铁天龙宝华街充电站',
      id: 749,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    },
    {
      lng: 117.1373062133789,
      lat: 36.675270080566406,
      name: '高新奥盛大厦充电站',
      id: 869,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    },
    {
      lng: 117.05915832519531,
      lat: 36.64989471435547,
      name: '特来电济南中宇（经十路齐源大厦东）充电站',
      id: 945,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    },
    {
      lng: 117.10334014892578,
      lat: 36.839569091796875,
      name: '济南起步区绿色低碳车网互动充换电示范站',
      id: 1092,
      terminal_count: null,
      totalchargetime: null,
      count: 1,
      offline_terminal_count: null
    }
  ]
  // menuData.value = result.data
}
onMounted(() => {
  getAreaData()
})
</script>

<style scoped lang="less">
.PageOne {
  display: flex;
  justify-content: center;
}
.left-all {
  // float: left;
  width: 352px;
  height: 1000px;
  // background: #0049ac;
}
.right-all {
  // float: right;
  width: 352px;
  height: 1000px;
  // background: red;
}
.center-all {
  position: relative;
  width: 1100px;
  height: 100%;
  // float: left;
  .map {
    width: 100%;
    height: 750px;
  }
  .map-bootom {
    width: 900px;
    height: 330px;
    // background: blue;
    margin: 0 auto;
  }
}
</style>
