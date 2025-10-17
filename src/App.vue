<script setup lang="ts">
import { onMounted } from 'vue'
const a = 1
onMounted(() => {
  console.log(a)
})
</script>

<template>
  <div style="width: 1920px; height: 1080px; background: #061b31; overflow-x: hidden">
    <RouterView />
  </div>
</template>
<style>
canvas {
  /* cursor: none !important; */
}
body {
  /* overflow-x: hidden !important; */
}
* {
  /* cursor: none !important; */
}

#app {
  /* width: 1920px; */
  height: 1080px;
  /* overflow-x: hidden !important; */
}
</style>
<style lang="less" scoped>
// 字体样式
@font-face {
  font-family: YouSheBiaoTiHei;
  src: url('@/assets/font/YouSheBiaoTiHei-2.ttf');
}
@font-face {
  font-family: PangMenZhengDao;
  src: url('@/assets/font/pangmenzhengdao.ttf');
}
@font-face {
  font-family: CountFont;
  src: url('@/assets/font/DS-DIGIT-4.ttf');
}
@font-face {
  font-family: SourceHanSansCN-Regular;
  src: url('@/assets/font/SourceHanSansCN-Regular.otf');
}
// 字体样式
* {
  margin: 0;
  padding: 0;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none; /* 标准语法 */
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // width: 100%;

  overflow: hidden;
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
// 通用
/*通用外框样式*/
/*通用外框样式*/
.general-container {
  width: 440px;
  .general-header {
    // background: url(./assets/images/components/short_title_bg.png);
    // width: 440px;
    height: 40px;
    padding-left: 38px;
    font-size: 22px;
    line-height: 40px;
    font-weight: bold;
    color: #ffffff;
    position: relative;
    &:before {
      content: '';
      width: 18px;
      height: 18px;
      position: absolute;
      left: 10px;
      // background: url(./assets/images/components/tilte_left_icon.png);
      top: 10px;
    }
  }

  .header-short {
    // background: url(./assets/images/components/short_title_bg.png) !important;
  }

  .header-medium {
    // background: url(./assets/images/components/medium_title_bg.png) !important;
  }

  .header-long {
    // background: url(./assets/images/components/long_title_bg.png) !important;
  }

  .header-fill {
    // background: url(./assets/images/components/fill_title_bg.png) !important;
  }

  .header-super-long {
    // background: url(./assets/images/components/super_long_title_bg.png) !important;
  }

  .header-thin-medium {
    // background: url(./assets/images/components/thin_medium_title_bg.png) !important;
  }

  .header-medium-long {
    // background: url(./assets/images/components/medium_long_title_bg.png) !important;
  }

  .general-header-center {
    // background: url(./assets/images/components/center_title_bg.png);
    width: 440px;
    height: 40px;
    font-size: 22px;
    line-height: 40px;
    font-weight: bold;
    color: #ffffff;
    position: relative;
    text-align: center;
  }

  .general-body {
    height: 260px;
    // width: 440px;
    background: linear-gradient(0deg, #040d2a 0%, #091d53 100%);
    border: 1px solid #224370;
  }
}
// 滚动条整体样式
// .cdk-virtual-scroll-viewport::-webkit-scrollbar {
//   /*滚动条整体样式*/
//   width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
//   // scrollbar-arrow-color: red;
// }

// .cdk-virtual-scroll-viewport::-webkit-scrollbar-thumb {
//   /*滚动条里面小方块*/
//   border-radius: 5px;
//   // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
//   background: #4d7aad;
//   // scrollbar-arrow-color: red;
// }

// .cdk-virtual-scroll-viewport::-webkit-scrollbar-track {
//   /*滚动条里面轨道*/
//   // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
//   border-radius: 0;
//   background: rgba(0, 0, 0, 0.1);
// }
::-webkit-scrollbar {
  display: none;
  /* background-color:transparent; */
}
@font-face {
  font-family: YouSheBiaoTiHei;
  src: url('@/assets/font/YouSheBiaoTiHei-2.ttf');
}
@font-face {
  font-family: PangMenZhengDao;
  src: url('@/assets/font/pangmenzhengdao.ttf');
}
@font-face {
  font-family: CountFont;
  src: url('@/assets/font/DS-DIGIT-4.ttf');
}
@font-face {
  font-family: SourceHanSansCN-Regular;
  src: url('@/assets/font/SourceHanSansCN-Regular.otf');
}
.ant-select-selection-search-input {
  height: 32px;
}
.header-medium {
  // background: url(@/assets/images/components/medium_title_bg.png) !important;
}
</style>
