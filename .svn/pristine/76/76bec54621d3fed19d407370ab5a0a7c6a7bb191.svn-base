import { ref, onUnmounted } from 'vue'

export function useTimer() {
  const timerId = ref(null)
  const index = ref(0)
  const direction = ref('positive')
  const paused = ref(false) // 添加暂停状态
  let lastTime = 0 // 用于存储上一次的时间
  let animate: any // 声明动画函数

  interface model {
    DataSource: any
    Dom: any
    Count?: number
    Height?: number
    duration: number
  }

  function startTimer(options: model) {
    // clearInterval(timerId.value)
    console.log(options, 'xxx')
    const { DataSource, Dom, Count = 4, Height = 42, duration = 50 } = options

    lastTime = performance.now() // 初始化时间

    animate = () => {
      if (paused.value) {
        requestAnimationFrame(animate)
        return
      }

      const currentTime = performance.now()
      const deltaTime = currentTime - lastTime

      if (deltaTime >= duration) {
        lastTime = currentTime

        const Maxlong = (DataSource.length - Count) * Height
        index.value++

        const currentMarginTop =
          parseInt(Dom.style.transform.replace(/translateY\((.*?)px\)/, '$1')) || 0

        if (direction.value === 'positive') {
          if (currentMarginTop > -Maxlong) {
            Dom.style.transform = `translateY(${-index.value}px)`
            // console.log('进入', Dom.style.transform)
          } else {
            index.value = 1
            direction.value = 'negative'
          }
        } else {
          if (currentMarginTop < 0) {
            Dom.style.transform = `translateY(${currentMarginTop + 1}px)`
          } else {
            index.value = 1
            direction.value = 'positive'
          }
        }
      }

      requestAnimationFrame(animate) //
    }

    animate() //
  }

  function stopTimer() {
    // clearInterval(timerId.value)
    timerId.value = null
    paused.value = true //
  }

  function pauseTimer() {
    paused.value = true //
  }

  function resumeTimer() {
    if (paused.value) {
      paused.value = false
      lastTime = performance.now() //
      animate()
    }
  }

  onUnmounted(() => {
    stopTimer()
  })

  return {
    startTimer,
    stopTimer,
    pauseTimer,
    resumeTimer
  }
}
