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
        <div class="centerbg1" style="width: 800px; margin: 0 auto; height: 80px; display: flex">
          <div style="width: 50%; color: #fff; font-size: 20px; padding-top: 10px">
            <div style="width: 100%; text-align: center">用户总数</div>
            <div style="width: 100%; text-align: center">
              <count-to :start="10000" :end="132339" :autoPlay="true" :duration="2000" style="color: #41ddff" />人
            </div>
          </div>
          <div style="width: 50%; color: #fff; font-size: 20px; padding-top: 10px">
            <div style="width: 100%; text-align: center">总充电次数</div>
            <div style="width: 100%; text-align: center">
              <count-to :start="10000" :end="45649635" :autoPlay="true" :duration="2000" style="color: #41ddff" />次
            </div>
          </div>
        </div>
        <div class="centerbg2" style="margin-top: 50px; width: 800px; margin: 10px auto; height: 80px; display: flex">
          <div style="width: 50%; color: #fff; font-size: 20px; padding-top: 10px">
            <div style="width: 100%; text-align: center">总充电量</div>
            <div style="width: 100%; text-align: center">
              <count-to :start="10000" :end="1387462252" :autoPlay="true" :duration="2000" style="color: #41ddff" />
            </div>
          </div>
          <div style="width: 50%; color: #fff; font-size: 20px; padding-top: 10px">
            <div style="width: 100%; text-align: center">总容量</div>
            <div style="width: 100%; text-align: center">
              <count-to :start="10000" :end="2511" :autoPlay="true" :duration="2000" style="color: #41ddff" />
            </div>
          </div>
        </div>
        <div class="big" style="margin-top: 80px; width: 1065px; height: 668px; padding-top: 30px">
          <div style="
              width: 550px;
              height: 60px;

              margin: -50px auto;
              display: flex;
              justify-content: space-between;
            ">
            <div style="width: 176px; height: 60px; position: relative">
              <div style="font-size: 24px; color: #fff; margin-bottom: 5px">
                <count-to :start="0" :end="39" :autoPlay="true" :duration="2000" style="color: #fff" />
              </div>
              <!-- <div style="position: absolute; width: 150px; height: 150px; top: 100px; left: -30px">
                <img src="../../assets/pageone/bg.png" style="width: 100%; height: 100%" alt="" srcset="" />
              </div> -->
              <div style="color: #fff">平台商数量</div>
              <div style="
                  top: 92px;
                  left: 2px;
                  position: absolute;

                  width: 60px;
                  height: 60px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pageone/left1.png" alt="" srcset="" />
              </div>
              <div style="
                  top: 70px;
                  left: -20px;
                  position: absolute;

                  width: 100px;
                  height: 100px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pageone/bg.png" alt="" srcset="" />
              </div>
            </div>
            <div style="width: 176px; height: 60px; text-align: right; position: relative">
              <!-- <div style="font-size: 24px; color: #fff; margin-bottom: 5px">203</div> -->
              <count-to :start="0" :end="203" :autoPlay="true" :duration="2000" style="color: #fff" />
              <div style="color: #fff">运营商数量</div>
              <div style="
                  top: 90px;
                  right: 20px;
                  position: absolute;

                  width: 60px;
                  height: 60px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pageone/right1.png" alt="" srcset="" />
              </div>
              <div style="
                  top: 70px;
                  right: 0px;
                  position: absolute;

                  width: 100px;
                  height: 100px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pageone/bg.png" alt="" srcset="" />
              </div>
            </div>
          </div>
          <div style="
              width: 800px;
              height: 60px;
              position: relative;
              margin: 210px auto;
              display: flex;
              justify-content: space-between;
            ">
            <div style="width: 176px; height: 60px">
              <!-- <div style="font-size: 24px; color: #fff; margin-bottom: 5px">14167</div> -->
              <count-to :start="0" :end="14167" :autoPlay="true" :duration="2000" style="color: #fff" />

              <div style="color: #fff">充电终端</div>
            </div>
            <div style="
                top: 92px;
                left: 2px;
                position: absolute;

                width: 60px;
                height: 60px;
              ">
              <img style="width: 100%; height: 100%" src="../../assets/pageone/pagelogo1.png" alt="" srcset="" />
            </div>
            <div style="
                top: 70px;
                left: -20px;
                position: absolute;

                width: 100px;
                height: 100px;
              ">
              <img style="width: 100%; height: 100%" src="../../assets/pageone/bg.png" alt="" srcset="" />
            </div>
            <div style="width: 176px; height: 60px; text-align: right; position: relative">
              <!-- <div style="font-size: 24px; color: #fff; margin-bottom: 5px">10380</div> -->
              <count-to :start="0" :end="10380" :autoPlay="true" :duration="2000" style="color: #fff" />
              <div style="color: #fff">充电桩数量</div>
              <div style="
                  top: 90px;
                  right: 20px;
                  position: absolute;

                  width: 60px;
                  height: 60px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pageone/right2.png" alt="" srcset="" />
              </div>
              <div style="
                  top: 70px;
                  right: 0px;
                  position: absolute;

                  width: 100px;
                  height: 100px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pageone/bg.png" alt="" srcset="" />
              </div>
            </div>
          </div>
          <div style="
              width: 720px;
              height: 60px;

              margin: -20px auto;
              display: flex;
              justify-content: space-between;
            ">
            <div style="width: 176px; height: 60px; position: relative">
              <!-- <div style="font-size: 24px; color: #fff; margin-bottom: 5px">833</div> -->
              <count-to :start="0" :end="833" :autoPlay="true" :duration="2000" style="color: #fff" />

              <div style="color: #fff">充电站数量</div>
              <div style="
                  top: 92px;
                  left: 2px;
                  position: absolute;

                  width: 60px;
                  height: 60px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pageone/left3.png" alt="" srcset="" />
              </div>
              <div style="
                  top: 70px;
                  left: -20px;
                  position: absolute;

                  width: 100px;
                  height: 100px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pageone/bg.png" alt="" srcset="" />
              </div>
            </div>
            <div style="width: 176px; height: 60px; text-align: right; position: relative">
              <!-- <div style="font-size: 24px; color: #fff; margin-bottom: 5px">37305000</div> -->
              <count-to :start="0" :end="37305000" :autoPlay="true" :duration="2000" style="color: #fff" />
              <div style="color: #fff">下发补贴金额</div>
              <div style="
                  top: 90px;
                  right: 20px;
                  position: absolute;

                  width: 60px;
                  height: 60px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pageone/right3.png" alt="" srcset="" />
              </div>
              <div style="
                  top: 70px;
                  right: 0px;
                  position: absolute;

                  width: 100px;
                  height: 100px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pageone/bg.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="map-bootom">
        <mapBootom></mapBootom>
      </div> -->
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
const ceshi1 = () => {
  console.log(123)
}
// 定义函数

onMounted(() => {
  getAreaData()
})
</script>

<style scoped lang="less">
.centerbg1 {
  background: url(@/assets/pageone/centerbg1.png) 100% no-repeat;
  background-size: 100% 100%;
}
.centerbg2 {
  background: url(@/assets/pageone/centerbg2.png) 100% no-repeat;
  background-size: 100% 100%;
}
.PageOne {
  display: flex;
  justify-content: space-around;
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
.big {
  background: url(@/assets/pageone/big.png) 100% no-repeat;
  background-size: 100% 100%;
  // animation: brightnessCycle 1s linear infinite;
}
@keyframes brightnessCycle {
  0% {
    filter: brightness(0.6);
  }
  50% {
    filter: brightness(1);
  }
  100% {
    filter: brightness(0.6);
  }
}
.center-all {
  position: relative;
  width: 1065px;
  height: 100%;
  //
  // float: left;
  .map {
    width: 100%;
    height: 980px;
  }
  .map-bootom {
    width: 900px;
    height: 330px;
    // background: blue;
  }
}
</style>
