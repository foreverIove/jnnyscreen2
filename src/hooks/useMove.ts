import { ref, onUnmounted } from 'vue'

// 封装定时器
class Timer {
  timers: object
  constructor() {
    this.timers = {}
    console.log(this.timers, 1111)
  }

  startTimer(componentId: any, duration: any, callback: any) {
    console.log('清除定时器')
    this.clearTimer(componentId) // 清除之前的定时器
    const timerId = setInterval(() => {
      callback()
    }, duration)

    this.timers[componentId] = timerId // 存储定时器 ID
    console.log('来来来:', this.timers) // 调试输出
  }

  clearTimer(componentId) {
    console.log('啦啦啦', this.timers, this) // 检查当前 timers 的状态
    // console.log('Attempting to clear timer for componentId:', componentId, this.timers[componentId])

    if (this.timers[componentId]) {
      console.log('进入')
      console.log('清除定时器:', componentId, this.timers[componentId])
      clearInterval(this.timers[componentId]) // 清除定时器
      delete this.timers[componentId] // 删除定时器记录
    } else {
      console.warn(`No timer found for componentId: ${componentId}`) // 如果未找到定时器，发出警告
    }

    console.log('Current timers after clearing:', this.timers) // 检查清除后的状态
  }
}

export const useStopTimer = (timer: any, componentId: any) => {
  // console.log('触发暂停')
  if (timer) {
    console.log('触发1', timer, componentId)
    timer.clearTimer(componentId) // 确保传入的组件 ID 是有效的
    // console.log('触发2已清除:', timer)
  } else {
    console.error('Timer is undefined or null')
  }
}
let index = 0
let direction = 'positive'
export const useMove = (list: any, obj: any, isMove: any, count: any, height: any) => {
  console.log('移出来Index', index)
  // const timer = useMove.timerInstance || (useMove.timerInstance = new Timer()) // 保持单一的 Timer 实例

  const move = (list: any, obj: any, isMove: any, count: any, height: any) => {
    const componentId = obj.getAttribute('data-id')
    useStopTimer(timer, componentId) // 清除定时器

    console.log('Found component ID:', componentId)

    const Maxlong = (list.length - count) * height
    timer.startTimer(componentId, 100, () => {
      // console.log(index.value)
      index++
      obj.style.marginTop = obj.style.marginTop + 0 // 可删除，未改变值

      const a = Math.abs(parseInt(obj.style.marginTop))

      const b = parseInt(obj.style.marginTop)

      if (direction === 'positive') {
        if (a < Maxlong) {
          obj.style.marginTop = -1 * index + 'px'
        } else {
          console.log('直接跳1', componentId, '---Maxlong', a < Maxlong, a, Maxlong)
          index = 1

          direction = 'negative'
        }
      } else {
        if (a > 0) {
          let index1 = 0
          index1++
          obj.style.marginTop = b + index1 + 'px'

          // console.log('逆向：', componentId, '---Maxlong', a < Maxlong, a, Maxlong)
        } else {
          console.log('直接跳12', componentId, '---Maxlong', a < Maxlong, a, Maxlong)
          index = 1
          direction = 'positive'
        }
      }
    })
    console.log(timer, '===', timer.timers)
    if (isMove) {
      useStopTimer(timer, componentId) // 清除定时器
      // return // 如果是移动状态，直接返回
      console.log('直接清除定时器')
    }
  }

  move(list, obj, isMove, count, height)

  onUnmounted(() => {
    console.log('Component unmounted,定时器销毁', obj.getAttribute('data-id'))
    timer.clearTimer(obj.getAttribute('data-id')) // 确保在组件卸载时清除定时器
  })
}
export const stopMove = () => {}
