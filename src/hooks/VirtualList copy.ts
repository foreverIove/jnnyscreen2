import { ref, onUnmounted, onMounted } from 'vue'

export function virtualList() {
  const itemSize = ref(50) //单个元素高度
  const list = ref([]) //可视区域数据源
  const containerHeight = ref(200) //可视区域高度
  const visibleCount = ref(6)
  const data = ref([]) //暂时没有看到具体的作用
  const startOffset = ref(0) //列表移动的距离
  const listHeight = ref(0)
  // dom暂时存储
  const Domelement = ref(null)

  // 保存定时器ID
  let scrollTimer: NodeJS.Timeout | null = null
  const isPaused = ref(false) // 是否暂停滚动

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

  function startTimer(options: model) {
    const { Dom, DataSource, Count, Height = 50, duration } = options //解构参数
    Domelement.value = Dom
    data.value = DataSource //数据源给data

    // 如果已经暂停，先不启动新的滚动定时器
    if (isPaused.value) return

    // 启动定时器进行滚动
    scrollTimer = setTimeout(() => {
      // console.log('排查2', Dom, DataSource, Height)
      smoothScrollToBottom(Dom, DataSource, Height)
    }, 100)
  }

  function smoothScrollToBottom(Dom, DataSource, Height) {
    const targetScrollTop = Dom.scrollHeight
    let currentScrollTop = Dom.scrollTop
    const step = 20

    // 如果暂停，则不继续滚动
    if (isPaused.value) return

    scrollTimer = setInterval(() => {
      currentScrollTop += step
      if (currentScrollTop >= targetScrollTop) {
        Dom.scrollTop = targetScrollTop
        clearInterval(scrollTimer!)
        smoothScrollToTop(Dom, DataSource, Height)
      } else {
        onScroll(Dom, DataSource, Height)
        Dom.scrollTop = currentScrollTop
      }
    }, 500)
  }

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

  const smoothScrollToTop = (Dom, DataSource, Height) => {
    const targetScrollTop = 0
    let currentScrollTop = Dom.scrollTop
    const step = 1

    if (isPaused.value) return

    scrollTimer = setInterval(() => {
      currentScrollTop -= step
      if (currentScrollTop <= targetScrollTop) {
        Dom.scrollTop = targetScrollTop
        clearInterval(scrollTimer!)
        smoothScrollToBottom(Dom, DataSource, Height)
      } else {
        onScroll(Dom, DataSource, Height)
        Dom.scrollTop = currentScrollTop
      }
    }, 50)
  }

  // 鼠标悬浮滚动条暂停滚动
  function onMouseOver() {
    isPaused.value = true
    if (scrollTimer) {
      clearInterval(scrollTimer)
      scrollTimer = null
    }
  }

  // 鼠标移出滚动条恢复滚动
  function onMouseOut() {
    isPaused.value = false
    // 恢复滚动
    // const container = document.querySelector('#scrollableContainer')
    if (Domelement.value) {
      console.log(Domelement.value, 'dom2')
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
    if (scrollTimer) {
      clearInterval(scrollTimer)
      scrollTimer = null
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
