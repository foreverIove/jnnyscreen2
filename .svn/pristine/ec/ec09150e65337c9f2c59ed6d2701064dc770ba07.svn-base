<template>
  <div>
    <div class="map">
      <!-- <muen :menus="menuData" @selectMenu="selectData"></muen> -->
      <div v-if="MapSure == 'SmartLighting'" class="searchBox" style="
          width: 457px;
          height: 105px;
          position: absolute;
          top: 100px;
          left: 30px;
          z-index: 999;
          display: flex;
          align-items: center;
          padding-left: 30px;
        ">
        <div style="color: #fff; margin-right: 20px">月份选择</div>
        <div style="width: 172px; height: 40px; margin-right: 20px; margin-top: 7px">
          <el-select v-model="value" class="m-2" placeholder="请选择">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <button style="
            color: #fff;
            background: linear-gradient(270deg, #177ede 0%, #17c0de 100%);
            width: 120px;
            height: 34px;
            border-radius: 5px;
          ">
          搜索
        </button>
      </div>
      <!-- 筛选框 -->
      <div v-if="MapSure == 'OperationalAnalysis'" class="searchBox" style="
          width: 657px;
          height: 105px;
          position: absolute;
          top: 100px;
          left: 30px;
          z-index: 999;
          display: flex;
          align-items: center;
          padding-left: 30px;
        ">
        <!-- <div style="color: #fff; margin-right: 20px">月份选择</div> -->
        <div style="width: 172px; height: 40px; margin-right: 20px; margin-top: 7px">
          <el-select v-model="value" class="m-2" placeholder="请选择">
            <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div style="width: 172px; height: 40px; margin-right: 20px; margin-top: 7px">
          <el-select v-model="value2" class="m-2" placeholder="请选择">
            <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div style="width: 172px; height: 40px; margin-right: 20px; margin-top: 7px">
          <el-select v-model="value3" class="m-2" placeholder="请选择">
            <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <!-- <button style="
            color: #fff;
            background: linear-gradient(270deg, #177ede 0%, #17c0de 100%);
            width: 120px;
            height: 34px;
            border-radius: 5px;
          ">
          搜索
        </button> -->
      </div>
      <!-- 筛选框 -->
      <div v-if="MapSure == 'ParkingComprehensive'" class="searchBox" style="
          width: 457px;
          height: 105px;
          position: absolute;
          top: 100px;
          left: 30px;
          z-index: 999;
          display: flex;
          align-items: center;
          padding-left: 30px;
        ">
        <div style="color: #fff; margin-right: 20px">日期选择</div>
        <div style="width: 172px; height: 40px; margin-right: 20px; margin-top: 7px">
          <el-select v-model="value" class="m-2" placeholder="请选择">
            <el-option v-for="item in optionsrq" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <button style="
            color: #fff;
            background: linear-gradient(270deg, #177ede 0%, #17c0de 100%);
            width: 120px;
            height: 34px;
            border-radius: 5px;
          ">
          搜索
        </button>
      </div>
      <!-- 筛选框2 -->
      <Map :boundary="false" :MapSure="MapSure" :dataFB="dataFB" :RLData="RLData"></Map>
      <div class="bootomDiv">
        <div class="itemD" @click="changeMap(item)" :class="{ active: item.id == activeId }" v-for="item in menuData"
          :key="item.id">
          {{ item.name }}
        </div>
      </div>

      <!-- <Loading></Loading> -->
      <!-- <bubble v-if="getPhoto.map4"></bubble> -->
      <!-- <info v-if="getPhoto.map3"></info> -->
      <!-- <mapList @IfShow="IfShow"></mapList> -->
      <!-- <ball v-show="getPhoto.map1"></ball> -->
      <!-- <Area v-if="getPhoto.map2"></Area> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Map from '@/components/Map/index.vue'
import info from '@/components/info/index.vue'
import ball from '@/components/3DEcharts/index.vue'
import mapList from '@/views/test_cxs/mapList.vue'
import Area from '@/components/Area/index.vue'
import bubble from '@/components/bubble/index.vue'
import { ronglaing } from './rongliang'
import { reactive, ref, onMounted } from 'vue'
import {
  reqOfflineAndFault,
  reqTerminalUsageRate,
  reqChargingCapacity,
  reqStationDistribution
} from '@/api/frontpage'
import { cdl } from './cdl'
import { storeToRefs } from 'pinia'
interface mapPhoto {
  map1: boolean
  map2: boolean
  map3: boolean
  map4: boolean
}

const getPhoto = reactive<mapPhoto>({
  map1: true,
  map2: false,
  map3: false,
  map4: false
})
const IfShow = (type: number) => {
  if (type == 1) {
    getPhoto.map1 = true
    getPhoto.map2 = false
    getPhoto.map3 = false
    getPhoto.map4 = false
  } else if (type == 2) {
    getPhoto.map1 = false
    getPhoto.map2 = true
    getPhoto.map3 = false
    getPhoto.map4 = false
  } else if (type == 3) {
    getPhoto.map3 = true
  } else if (type == 4) {
    getPhoto.map1 = false
    getPhoto.map2 = false
    getPhoto.map3 = false
    getPhoto.map4 = true
  }
  console.log(type)
}
const activeId = ref('ParkingComprehensive')

const menuData = [
  { name: '30天充电量网格图', id: 'ParkingComprehensive' },
  { name: '电站分布', id: 'OperationalAnalysis' },
  { name: '电站容量分布', id: 'Dianzhanrongliang' },
  // { name: '充电量热力图', id: 'SafetySupervision' },
  { name: '终端利用率热力图', id: 'EquipmentMonitoring' },
  { name: '实时功率热力图', id: 'SmartInspection' },
  // { name: '实时故障热力图', id: 'SmartSecurity' },
  { name: '充电终端数量网格图', id: 'SmartLighting' }
]
const MapSure = ref('ParkingComprehensive')
const RLData = ref([])
import { ssgl } from './ssgl'
const getSmartInspection = async () => {
  // let res = await reqOfflineAndFault('')
  // console.log('实时功率', res)
  // if (res.code == 0) {
  //   RLData.value = res.list
  // }
  RLData.value = ssgl
}
import { zdlyl } from './zdlyl'
const getTerminalUsageRate = async () => {
  RLData.value = zdlyl
  //   [
  //   {
  //     lng: 117.02511,
  //     lat: 36.725643,
  //     name: '达达充电站1站',
  //     id: 323,
  //     terminal_count: 18,
  //     totalchargetime: 1551175.42,
  //     count: 1.1788,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.22053,
  //     lat: 36.857327,
  //     name: '济南机场19号廊桥充电站',
  //     id: 401,
  //     terminal_count: 7,
  //     totalchargetime: 365.49,
  //     count: 0.0007,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.22053,
  //     lat: 36.857327,
  //     name: '济南机场13号廊桥充电站',
  //     id: 402,
  //     terminal_count: 4,
  //     totalchargetime: 79.46,
  //     count: 0.0003,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.13202,
  //     lat: 36.6878,
  //     name: '一飞能源喜悦东方充电站',
  //     id: 432,
  //     terminal_count: 4,
  //     totalchargetime: 87.41,
  //     count: 0.0003,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.29503,
  //     lat: 36.695065,
  //     name: '个人充电站',
  //     id: 433,
  //     terminal_count: 19,
  //     totalchargetime: 477210.98,
  //     count: 0.3436,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.2315,
  //     lat: 36.379,
  //     name: '济南热电有限公司金鸡岭分公司',
  //     id: 447,
  //     terminal_count: 22,
  //     totalchargetime: 13.2,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 116.9084,
  //     lat: 36.673088,
  //     name: '省会文化艺术中心三馆二期项目充电站',
  //     id: 458,
  //     terminal_count: 118,
  //     totalchargetime: 1.25,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 116.98146,
  //     lat: 36.614388,
  //     name: '济南樾府项目充电站',
  //     id: 459,
  //     terminal_count: 25,
  //     totalchargetime: 8764.63,
  //     count: 0.0048,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.81717,
  //     lat: 36.07255,
  //     name: '华诚丽都充电站',
  //     id: 472,
  //     terminal_count: 50,
  //     totalchargetime: 0.0,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.522835,
  //     lat: 36.69228,
  //     name: '银龙快充（龙盘山公园充电站）',
  //     id: 474,
  //     terminal_count: 10,
  //     totalchargetime: 127.77,
  //     count: 0.0002,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.535446,
  //     lat: 36.684204,
  //     name: '银龙快充（新时代文明实践主题公园充电站）',
  //     id: 475,
  //     terminal_count: 13,
  //     totalchargetime: 824.71,
  //     count: 0.0009,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.00498,
  //     lat: 36.647438,
  //     name: '节水办充电站',
  //     id: 579,
  //     terminal_count: 8,
  //     totalchargetime: 10.87,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.37591,
  //     lat: 36.815376,
  //     name: '山东高速济南东零碳服务区充电站',
  //     id: 613,
  //     terminal_count: 4,
  //     totalchargetime: 0.1,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 116.79705,
  //     lat: 36.520733,
  //     name: '观山悦',
  //     id: 643,
  //     terminal_count: 86,
  //     totalchargetime: 1.45,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 116.98957,
  //     lat: 36.64546,
  //     name: '济南市三箭如意苑公共充电站',
  //     id: 645,
  //     terminal_count: 10,
  //     totalchargetime: 12.91,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 118.98982,
  //     lat: 36.52223,
  //     name: '济青高速昌乐南服务区（马宋）充电站(济南方向)',
  //     id: 705,
  //     terminal_count: 2,
  //     totalchargetime: 6.54,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 116.69967,
  //     lat: 36.377377,
  //     name: '济南绕城高速双泉服务区充电站(外环方向)',
  //     id: 711,
  //     terminal_count: 2,
  //     totalchargetime: 0.23,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 116.69867,
  //     lat: 36.380756,
  //     name: '济南绕城高速双泉服务区充电站(内环方向)',
  //     id: 728,
  //     terminal_count: 2,
  //     totalchargetime: 1.59,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.02835,
  //     lat: 36.681854,
  //     name: '华为互联互通测试电站',
  //     id: 1966,
  //     terminal_count: 12,
  //     totalchargetime: 0.16,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.187164,
  //     lat: 36.65485,
  //     name: '莲花山充电驿站',
  //     id: 1967,
  //     terminal_count: 64,
  //     totalchargetime: 14.76,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.060646,
  //     lat: 36.738728,
  //     name: '华山外国语充电站',
  //     id: 1969,
  //     terminal_count: 2,
  //     totalchargetime: 3.16,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.0977,
  //     lat: 36.69479,
  //     name: '直连',
  //     id: 1970,
  //     terminal_count: 2,
  //     totalchargetime: 0.25,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 117.14642,
  //     lat: 37.29617,
  //     name: '济南能源商河恒泰充电站',
  //     id: 1979,
  //     terminal_count: 18,
  //     totalchargetime: 2.13,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 119.97409,
  //     lat: 31.850977,
  //     name: '桩群-hfy31',
  //     id: 1987,
  //     terminal_count: 2,
  //     totalchargetime: 1.8,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   },
  //   {
  //     lng: 1.0,
  //     lat: 1.0,
  //     name: '安富测试站01',
  //     id: 1991,
  //     terminal_count: 3,
  //     totalchargetime: 9.1,
  //     count: 0.0,
  //     offline_terminal_count: null
  //   }
  // ]

  // let res = await reqTerminalUsageRate({
  //   mixingcondition: '',
  //   time: ''
  // })
  // console.log('终端利用率', res)
  // if (res.code == 0) {
  //   RLData.value = res.list
  // }
}
const getChargingCapacity = async () => {
  // let res = await reqChargingCapacity({
  //   mixingcondition: '',
  //   time: ''
  // })
  // console.log('充电量热力图', res)
  // if (res.code == 0) {
  //   RLData.value = res.list
  // }
  console.log('充电量热力图', cdl)
  RLData.value = cdl
}
const dataFB = ref([])
import { dzfb } from './dzfb'
const getStationDistribution = async () => {
  // let res = await reqStationDistribution({
  //   mixingcondition: ''
  // })
  // console.log('电站分布', res)
  // if (res.code == 0) {
  //   dataFB.value = res.data
  // }
  dataFB.value = dzfb
}
import useType from '@/stores/counter'
let changeType = useType()
const storeItem = storeToRefs(changeType)
onMounted(() => {
  storeItem.visibleA.value = true
  storeItem.visibleB.value = true
})
const changeMap = (item) => {
  activeId.value = item.id
  MapSure.value = item.id
  if (item.id == 'SmartInspection') {
    storeItem.zoompinia.value = 9
    getSmartInspection()
  } else if (item.id == 'EquipmentMonitoring') {
    storeItem.zoompinia.value = 9
    // reqTerminalUsageRate
    getTerminalUsageRate()
  } else if (item.id == 'SafetySupervision') {
    storeItem.zoompinia.value = 9
    // reqChargingCapacity
    getChargingCapacity()
  } else if (item.id == 'OperationalAnalysis') {
    storeItem.zoompinia.value = 9
    // reqStationDistribution
    getStationDistribution()
  } else if (item.id == 'Dianzhanrongliang') {
    storeItem.zoompinia.value = 9
  } else if (item.id == 'SmartLighting') {
    // 修改视角
    storeItem.zoompinia.value = 11
  } else if (item.id == 'ParkingComprehensive') {
    storeItem.zoompinia.value = 11
  }
  // IfShow(menuData.indexOf(item) + 1)
}
const value = ref('1')
const value2 = ref('1')
const value3 = ref('1')
const options2 = [
  {
    value: '1',
    label: '一月'
  },
  {
    value: '2',
    label: '二月'
  },
  {
    value: '3',
    label: '三月'
  },
  {
    value: '4',
    label: '四月'
  },
  {
    value: '5',
    label: '五月'
  },
  {
    value: '6',
    label: '六月'
  },
  {
    value: '7',
    label: '七月'
  },
  {
    value: '8',
    label: '八月'
  },
  {
    value: '9',
    label: '九月'
  },
  {
    value: '10',
    label: '十月'
  },
  {
    value: '11',
    label: '十一月'
  },
  {
    value: '12',
    label: '十二月'
  }
]
const optionsrq = [
  {
    value: '1',
    label: '10.14'
  },
  {
    value: '2',
    label: '10.15'
  },
  {
    value: '3',
    label: '10.16'
  },
  {
    value: '4',
    label: '10.17'
  },
  {
    value: '5',
    label: '10.18'
  },
  {
    value: '6',
    label: '10.19'
  },
  {
    value: '7',
    label: '10.20'
  },
  {
    value: '8',
    label: '10.21'
  },
  {
    value: '9',
    label: '10.22'
  },
  {
    value: '10',
    label: '10.23'
  },
  {
    value: '11',
    label: '10.24'
  },
  {
    value: '12',
    label: '10.25'
  }
]
const options3 = [
  {
    value: '1',
    label: '运营商'
  },
  {
    value: '2',
    label: '电站'
  }
]
const options4 = [
  {
    value: '1',
    label: '达达充电站'
  },
  {
    value: '2',
    label: '舜德路充电站'
  }
]
const options5 = [
  {
    value: '1',
    label: '全市'
  },
  {
    value: '2',
    label: '历城区'
  },
  {
    value: '3',
    label: '历下区'
  }
]
const changeD = () => {
  debugger
}
</script>
<style>
.el-scrollbar__wrap {
  background: #051a32 !important;
  z-index: 999999;
}
.el-select-dropdown {
  z-index: 999999 !important;
}
</style>
<style scoped lang="less">
/deep/.el-select__placeholder {
  color: #fff !important;
}
/deep/.el-select-dropdown {
  z-index: 999999 !important;
}
.el-select-dropdown__item {
  color: #fff;
}
.is-hovering {
  background: rgba(255, 255, 255, 0.5);
}
/deep/ .el-select-dropdown__wrap {
  // background: #206ca7 !important;
}

/deep/ .el-select__wrapper {
  background: #0c2650 !important;
  // color: #fff;
}
.searchBox {
  background: url(@/assets/frontpage/search1.png) 100% no-repeat;
  background-size: 100% 100%;
}
.active {
  color: #00ffff;
  font-weight: bold;
  // background: rgb(186, 88, 8);
  // width: 68px;
  // height: 198px;
  background: linear-gradient(0deg, #08999e 0%, rgba(8, 115, 158, 0) 100%);
  border-radius: 0px 0px 0px 0px;
}
.map {
  width: 100%;
  height: 1080px;
  .bootomDiv {
    width: 100%;
    height: 114px;
    // border: 1px solid red;
    position: absolute;
    bottom: 0;
    background: url(@/assets/frontpage/bootombg.png) 100% no-repeat;
    background-size: 100% 100%;
    // margin-left: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .itemD {
      color: #fff;
      line-height: 50px;
      padding: 0 40px;
    }
  }
}
</style>
