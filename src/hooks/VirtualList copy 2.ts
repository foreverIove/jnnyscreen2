import { ref, onUnmounted, onMounted, nextTick } from 'vue'

export function virtualList() {
  // 定义变量区
  const itemSize = ref(50) // 单个元素高度
  const list = ref([]) // 可视区域数据源
  const containerHeight = ref(200) // 可视区域高度
  const data = ref([]) // 原始数据源
  const startOffset = ref(0) // 列表的滚动偏移量

  let animationFrameId: number | null = null // 用来保存请求的动画帧 ID，用于暂停和恢复
  const isPaused = ref(false) // 用于标识当前是否处于暂停状态
  const currentScrollTop = ref(0) // 当前的滚动位置，作为恢复滚动时的参考

  // 定义滚动相关的参数类型
  interface model {
    Dom: any
    DataSource: any
    Height?: number
    Count: number
    duration: number
  }

  // 初始化加载滚动效果
  onMounted(() => {})

  // 启动滚动逻辑
  function startTimer(options: model) {
    const { Dom, DataSource, Count, Height = 50, duration } = options
    data.value = DataSource // 将数据源赋给 data

    // 等待 DOM 渲染完成后启动滚动
    nextTick(() => {
      smoothScrollToBottom(Dom.value, DataSource, Height)
    })
  }

  // 平滑滚动到底部
  const smoothScrollToBottom = (Dom: HTMLElement, DataSource: any, Height: number) => {
    const targetScrollTop = Dom.scrollHeight
    currentScrollTop.value = Dom.scrollTop // 更新当前滚动位置
    let currentScroll = currentScrollTop.value
    const step = 10

    // 使用 requestAnimationFrame 替代 setInterval，提供平滑滚动效果
    const scroll = () => {
      currentScroll += step
      if (currentScroll >= targetScrollTop) {
        Dom.scrollTop = targetScrollTop
        updateList(Dom.scrollTop, Height) // 更新可视区域的数据
        smoothScrollToTop(Dom, DataSource, Height) // 滚动到底部后，启动向上滚动
      } else {
        Dom.scrollTop = currentScroll
        updateList(Dom.scrollTop, Height) // 更新可视区域的数据
        animationFrameId = requestAnimationFrame(scroll)
      }
    }

    animationFrameId = requestAnimationFrame(scroll)
  }

  // 向上滚动的函数
  const smoothScrollToTop = (Dom: HTMLElement, DataSource: any, Height: number) => {
    const targetScrollTop = 0 // 目标位置是顶部
    let currentScroll = Dom.scrollTop
    const step = 1

    const scroll = () => {
      currentScroll -= step
      if (currentScroll <= targetScrollTop) {
        Dom.scrollTop = targetScrollTop
        updateList(Dom.scrollTop, Height) // 更新可视区域的数据
        smoothScrollToBottom(Dom, DataSource, Height) // 滚动到顶部后，启动向下滚动
      } else {
        Dom.scrollTop = currentScroll
        updateList(Dom.scrollTop, Height) // 更新可视区域的数据
        animationFrameId = requestAnimationFrame(scroll)
      }
    }

    animationFrameId = requestAnimationFrame(scroll)
  }

  // 更新可视区域的数据
  const updateList = (scrollTop: number, Height: number) => {
    const startIndex = Math.floor(scrollTop / Height)
    const endIndex = Math.ceil((scrollTop + containerHeight.value) / Height)

    list.value = data.value.slice(startIndex, endIndex)
    startOffset.value = scrollTop - (scrollTop % Height)
  }

  // 滚动事件处理，触发数据更新
  const onScroll = (listBox: HTMLElement, DataSource: any, Height: number) => {
    updateList(listBox.scrollTop, Height)
  }

  // 暂停滚动
  const stopScroll = () => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
    isPaused.value = true
  }

  // 恢复滚动
  const resumeScroll = (Dom: HTMLElement, DataSource: any, Height: number) => {
    if (isPaused.value && animationFrameId === null) {
      // 恢复之前的滚动位置
      Dom.scrollTop = currentScrollTop.value // 恢复之前的滚动位置
      smoothScrollToBottom(Dom, DataSource, Height) // 恢复滚动
      isPaused.value = false
    }
  }

  // 鼠标进入事件，暂停滚动
  const onMouseEnter = () => {
    stopScroll()
  }

  // 鼠标移出事件，恢复滚动
  const onMouseLeave = (Dom: HTMLElement, DataSource: any, Height: number) => {
    resumeScroll(Dom, DataSource, Height)
  }

  // 在组件卸载时停止定时器
  onUnmounted(() => {
    stopScroll()
  })

  return {
    startTimer,
    containerHeight,
    itemSize,
    list,
    onMouseEnter,
    onMouseLeave
  }
}
