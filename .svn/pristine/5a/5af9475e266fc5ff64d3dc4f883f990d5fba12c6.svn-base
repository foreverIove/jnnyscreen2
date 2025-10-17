<template>
  <div>
    <div class="scrollView" @scroll="onScroll" ref="list">
      <!-- 虚拟列表 -->
      <div class="virtualScroller" :style="{ height: listHeight + 'px' }"></div>
      <div class="list" :style="{ transform: `translateY(${this.startOffset}px)` }">
        <div
          class="item"
          v-for="item in list"
          :key="item"
          style="border: 1px solid black; box-sizing: border-box; width: 150px"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      listHeight: 0,
      itemSize: 50,
      containerHeight: 300,
      visibleCount: 6,
      data: [],
      startOffset: 0
    }
  },
  mounted() {
    // const total = 100000
    const list = [
      { name: 'name1', value: 'value' },
      { name: 'name2', value: 'value' },
      { name: 'name3', value: 'value' },
      { name: 'name4', value: 'value' },
      { name: 'name5', value: 'value' },
      { name: 'name6', value: 'value' },
      { name: 'name7', value: 'value' },
      { name: 'name8', value: 'value' },
      { name: 'name9', value: 'value' },
      { name: 'name10', value: 'value' },
      { name: 'name11', value: 'value' },
      { name: 'name12', value: 'value' },
      { name: 'name13', value: 'value' },
      { name: 'name14', value: 'value' }
    ]
    // for (let i = 0; i < total; i++) {
    //   list.push(i)
    // }
    this.listHeight = list.length * this.itemSize
    this.data = list
    this.list = list.slice(0, 6)
  },
  methods: {
    onScroll() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop
      // 列表开始索引
      let startIndex = Math.floor(scrollTop / this.itemSize)
      // 列表结束索引
      let endIndex = Math.ceil((scrollTop + this.containerHeight) / this.itemSize)
      this.list = this.data.slice(startIndex, endIndex)
      console.log('===========', startIndex - endIndex)
      // 列表移动距离
      // 列表移动距离
      if (this.list.length == 6) {
        this.startOffset = scrollTop - (scrollTop % this.itemSize)
      } else {
        this.startOffset = scrollTop - (scrollTop % this.itemSize) - 25
      }
    }
  }
}
</script>
<style>
.scrollView {
  width: 200px;
  height: 300px;
  background-color: red;
  overflow-y: scroll;
  position: relative;
}
.item {
  height: 50px;
}
.list {
  position: absolute;
  top: 0;
  left: 0;
}
/*chrome 和Safari*/
.scrollView::-webkit-scrollbar {
  width: 0 !important;
}
/*IE 10+*/
.scrollView {
  -ms-overflow-style: none;
}
/*Firefox*/
.scrollView {
  overflow: -moz-scrollbars-none;
}
/* 但是不兼容IE */
</style>
