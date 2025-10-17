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
      <div class="infinite-rotation2" style="
          position: absolute;
          left: 400px;
          top: 145px;
          width: 330px;
          height: 327px;

          z-index: 1;
        ">
        <img src="../../assets/pagefive/bgBIG01.png" style="width: 100%; height: 100%" alt="" srcset="" />
      </div>
      <div class="map" style="padding-top: 100px">
        <div style="width: 800px; height: 74px; margin: 0 auto; display: flex">
          <div style="flex-grow: 1">
            <div style="display: flex; float: left">
              <div style="position: relative">
                <img class="infinite-rotation" src="../../assets/pagefive/logo1.png" alt=""
                  style="width: 74px; height: 74px" />

                <div style="
                    width: 32px;
                    height: 32px;

                    position: absolute;
                    left: 22px;
                    top: 20px;
                  ">
                  <img style="width: 100%; height: 100%" src="../../assets/pagefive/logo11.png" alt="" />
                </div>
              </div>
              <div style="
                  font-weight: bold;
                  font-size: 17px;
                  color: #bfbfbf;
                  padding-top: 10px;
                  margin-left: 10px;
                ">
                <div style="">离线终端数量</div>
                <div style="font-size: 35px">3922</div>
              </div>
            </div>
          </div>
          <div style="flex-grow: 1">
            <div style="display: flex; float: right">
              <div style="position: relative">
                <img class="infinite-rotation" src="../../assets/pagefive/logo2.png" alt=""
                  style="width: 74px; height: 74px" />
                <div style="
                    width: 32px;
                    height: 32px;

                    position: absolute;
                    right: 22px;
                    top: 20px;
                  ">
                  <img style="width: 100%; height: 100%" src="../../assets/pagefive/logo11.png" alt="" />
                </div>
              </div>
              <div style="
                  font-weight: bold;
                  font-size: 17px;
                  color: #e8cc41;
                  padding-top: 10px;
                  margin-left: 10px;
                ">
                <div style="">故障终端数量</div>
                <div style="font-size: 35px">773</div>
              </div>
            </div>
          </div>
        </div>
        <div style="
            width: 950px;
            height: 74px;

            margin: 100px auto;
            display: flex;
          ">
          <div style="flex-grow: 1; position: relative">
            <div style="display: flex; float: left">
              <div style="position: relative">
                <img class="infinite-rotation" src="../../assets/pagefive/logo3.png" alt=""
                  style="width: 74px; height: 74px" />
                <div style="
                    width: 32px;
                    height: 32px;

                    position: absolute;
                    left: 22px;
                    top: 20px;
                  ">
                  <img style="width: 100%; height: 100%" src="../../assets/pagefive/logo11.png" alt="" />
                </div>
              </div>
              <div style="
                  font-weight: bold;
                  font-size: 17px;
                  color: #ffdc2a;
                  padding-top: 10px;
                  margin-left: 10px;
                ">
                <div style="">异常订单数量</div>
                <div style="font-size: 35px">0</div>
              </div>
            </div>
          </div>
          <div style="flex-grow: 1; position: relative">
            <div style="display: flex; float: right">
              <div style="position: relative">
                <img class="infinite-rotation" src="../../assets/pagefive/logo4.png" alt=""
                  style="width: 74px; height: 74px" />
                <div style="
                    width: 32px;
                    height: 32px;

                    position: absolute;
                    left: 22px;
                    top: 20px;
                  ">
                  <img style="width: 100%; height: 100%" src="../../assets/pagefive/logo11.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div style="
              font-weight: bold;
              font-size: 17px;
              color: #11fffb;
              padding-top: 10px;
              margin-left: 10px;
            ">
            <div style="">在线终端数量</div>
            <div style="font-size: 35px">9600</div>
          </div>
        </div>
        <div style="width: 800px; height: 74px; margin: 0 auto; display: flex">
          <div style="flex-grow: 1; position: relative">
            <div style="display: flex; float: left">
              <img class="infinite-rotation" src="../../assets/pagefive/logo5.png" alt=""
                style="width: 74px; height: 74px" />
              <div style="
                  width: 32px;
                  height: 32px;

                  position: absolute;
                  left: 22px;
                  top: 20px;
                ">
                <img style="width: 100%; height: 100%" src="../../assets/pagefive/logo11.png" alt="" />
              </div>
              <div style="
                  font-weight: bold;
                  font-size: 17px;
                  color: #f60b58;
                  padding-top: 10px;
                  margin-left: 10px;
                ">
                <div style="">警告次数</div>
                <div style="font-size: 35px">1</div>
              </div>
            </div>
          </div>
          <div style="flex-grow: 1; position: relative">
            <div style="display: flex; float: right">
              <div style="position: relative">
                <img class="infinite-rotation" src="../../assets/pagefive/logo6.png" alt=""
                  style="width: 74px; height: 74px" />
                <div style="
                    width: 32px;
                    height: 32px;

                    position: absolute;
                    left: 22px;
                    top: 20px;
                  ">
                  <img style="width: 100%; height: 100%" src="../../assets/pagefive/logo11.png" alt="" />
                </div>
              </div>
              <div style="
                  font-weight: bold;
                  font-size: 17px;
                  color: #6bf02a;
                  padding-top: 10px;
                  margin-left: 10px;
                ">
                <div style="">充电成功率</div>
                <div style="font-size: 35px">97%</div>
              </div>
            </div>
          </div>
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
/* 无限旋转动画 */
.infinite-rotation {
  animation: infiniteRotate 3s linear infinite;
}

@keyframes infiniteRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.infinite-rotation2 {
  animation: infiniteRotate2 3s linear infinite;
}

@keyframes infiniteRotate2 {
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0;
  }
}
.PageOne {
  display: flex;
  justify-content: space-between;
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
  width: 1103px;
  height: 100%;
  // float: left;
  .map {
    width: 100%;
    height: 648px;
    // background: red;
    background: url(@/assets/pagefive/bgBIG.png) 100% no-repeat;
    background-size: 100% 100%;
  }
  .map-bootom {
    width: 900px;
    height: 330px;
    margin: 0 auto;
    // background: blue;
  }
}
</style>
