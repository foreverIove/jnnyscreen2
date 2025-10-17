import { ref, onUnmounted, onMounted } from 'vue'

export function virtualList() {
  const itemSize = ref(50) // 单个元素高度
  const list = ref([]) // 可视区域数据源
  const containerHeight = ref(200) // 可视区域高度
  const visibleCount = ref(6)
  const data = ref([]) // 数据源
  const startOffset = ref(0) // 列表移动的距离
  const listHeight = ref(0)
  // 记录上下
  const Newduration = ref(true) //true代表正向，下

  // dom暂时存储
  const Domelement = ref(null)

  // 是否暂停滚动
  const isPaused = ref(false)

  // 上一个滚动位置
  const lastScrollTop = 0

  // 请求动画帧 ID
  let animationFrameId: number | null = null

  interface model {
    Dom: any
    DataSource: any
    Height?: number
    Count: number
    duration: number
  }

  onMounted(() => {
    // 初始化滚动容器的事件监听
    const container = document.querySelector('#scrollableContainer')
    if (container) {
      container.addEventListener('mouseover', onMouseOver)
      container.addEventListener('mouseout', onMouseOut)
    }
  })

  // 启动平滑滚动
  function startTimer(options: model) {
    const { Dom, DataSource, Height = 50, duration } = options
    Domelement.value = Dom
    data.value = DataSource

    // 如果已经暂停，先不启动新的滚动定时器
    if (isPaused.value) return
    if (Newduration.value) {
      smoothScroll(Dom, DataSource, Height)
    } else {
      smoothScrollToTop(Dom, DataSource, Height)
    }
    // 开始滚动
  }

  // 平滑滚动函数
  function smoothScroll(Dom, DataSource, Height) {
    const targetScrollTop = Dom.scrollHeight
    let currentScrollTop = Dom.scrollTop
    const step = 1

    // 如果暂停，则不继续滚动
    if (isPaused.value) return

    // 使用requestAnimationFrame进行平滑滚动
    function scroll() {
      if (isPaused.value) return

      // 每次更新滚动位置
      currentScrollTop += step

      if (currentScrollTop >= targetScrollTop) {
        Dom.scrollTop = targetScrollTop
        onScroll(Dom, DataSource, Height)
        Newduration.value = false
        console.log('到底反弹')
        return smoothScrollToTop(Dom, DataSource, Height)
      }

      Dom.scrollTop = currentScrollTop
      onScroll(Dom, DataSource, Height)

      // 继续下一帧动画
      animationFrameId = requestAnimationFrame(scroll)
    }

    // 开始滚动
    animationFrameId = requestAnimationFrame(scroll)
  }

  // 向上滚动的函数
  function smoothScrollToTop(Dom, DataSource, Height) {
    const targetScrollTop = 0
    let currentScrollTop = Dom.scrollTop
    const step = 1

    // 如果暂停，则不继续滚动
    if (isPaused.value) return

    // 使用requestAnimationFrame进行平滑滚动
    function scrollUp() {
      if (isPaused.value) return

      // 每次更新滚动位置
      currentScrollTop -= step

      if (currentScrollTop <= targetScrollTop) {
        Newduration.value = true
        Dom.scrollTop = targetScrollTop
        onScroll(Dom, DataSource, Height)
        return smoothScroll(Dom, DataSource, Height)
      }

      Dom.scrollTop = currentScrollTop
      onScroll(Dom, DataSource, Height)

      // 继续下一帧动画
      animationFrameId = requestAnimationFrame(scrollUp)
    }

    // 开始滚动
    animationFrameId = requestAnimationFrame(scrollUp)
  }

  // 处理滚动事件，更新列表项
  const onScroll = (listBox, DataSource, Height) => {
    const scrollTop = listBox.scrollTop
    const startIndex = Math.floor(scrollTop / Height)
    let endIndex

    if (Math.ceil((scrollTop + containerHeight.value) / Height) - startIndex > 4) {
      endIndex = Math.ceil((scrollTop + containerHeight.value) / Height) - 1
    } else {
      endIndex = Math.ceil((scrollTop + containerHeight.value) / Height)
    }

    list.value = DataSource.slice(startIndex, endIndex)
    startOffset.value = scrollTop - (scrollTop % Height)
  }

  // 鼠标悬浮滚动条暂停滚动
  function onMouseOver() {
    console.log(Newduration.value)
    isPaused.value = true
    // 取消当前动画帧
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
  }

  // 鼠标移出滚动条恢复滚动
  function onMouseOut() {
    isPaused.value = false
    // 恢复滚动
    if (Domelement.value) {
      startTimer({
        Dom: Domelement.value,
        DataSource: data.value,
        Count: visibleCount.value,
        Height: itemSize.value,
        duration: 500
      })
    }
  }

  function stopTimer() {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
  }

  onUnmounted(() => {
    stopTimer()
  })

  return {
    startTimer,
    containerHeight,
    itemSize,
    list
  }
}
