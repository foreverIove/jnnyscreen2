<script setup lang="ts">
import { ref } from 'vue'

const serviceNumber = ref(23344)
</script>

<template>
  <div class="middle-top-data">
    <div class="top-data-title">
      <div style="margin-left: 50px">车场数据</div>
    </div>
    <div class="data-container">
      <div class="left-container">
        <div class="detail-data">
          <img src="@/assets/images/business/dailuru.png" alt="" style="width: 40px;height: 45px" />
          <div class="number-container">
            <count-to :start="200" :end="368" :autoPlay="true" :duration="2000" style="color: #41DDFF"/>
            <div class="sub-text">
              待录入车场数
            </div>
          </div>
        </div>
        <div class="detail-data" style="margin-top: 15px">
          <img src="@/assets/images/business/daishenhe.png" alt="" style="width: 40px;height: 45px" />
          <div class="number-container">
            <count-to :start="34" :end="103" :autoPlay="true" :duration="2000" style="color: #FFB220" />
            <div class="sub-text">
              待审核车场
            </div>
          </div>
        </div>
      </div>
      <div class="left-container">
        <div class="detail-data">
          <img src="@/assets/images/business/yiluru.png" alt="" style="width: 40px;height: 45px" />
          <div class="number-container">
            <count-to :start="898" :end="1092" :autoPlay="true" :duration="2000" style="color: #23FF9B"/>
            <div class="sub-text">
              已录入车场
            </div>
          </div>
        </div>
        <div class="detail-data" style="margin-top: 15px">
          <img src="@/assets/images/business/yifabu.png" alt="" style="width: 40px;height: 45px" />
          <div class="number-container">
            <count-to :start="345" :end="433" :autoPlay="true" :duration="2000" style="color: #FF874D"/>
            <div class="sub-text">
              待发布车场
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

.middle-top-data {
  display: flex;
  width: 630px;
  flex-direction: column;
  background-color: rgba(10, 76, 173, 0.5);
  border-radius: 6px;
  color: white;
  padding: 20px 20px;
  justify-content: space-between;
  overflow: hidden;

  &:hover {
    // border: 1px solid #fff;
    box-shadow: inset 0 0 5px rgba(0, 204, 255, 0.8),
    inset 0 0 10px rgba(0, 204, 255, 0.6),
    inset 0 0 15px rgba(0, 204, 255, 0.4),
    inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
  }
}

.top-data-title {
  background: url(@/assets/images/PageOne/title.png) 100% no-repeat;
  background-size: 100% 100%;
}

.vertical-flex {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  flex: 1;
  width: 50%;
}

.top-data-text {
  display: flex;
  font-size: 40px;
  font-weight: bolder;

  span {
    font-size: 40px;
    font-weight: bolder;
  }
}
.data-container{
  display: flex;
  padding: 30px 0;
}
.left-container{
  display: flex;
  flex-direction: column;
  flex: 1;
}
.detail-data {
  display: flex;
  align-items: center;
  justify-content: center;
}
.number-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  span {
    font-size: 50px;
  }

  .sub-text {
    display: flex;
    font-size: 14px;
    font-weight: bolder;
    margin-top: 10px;
  }
}

</style>