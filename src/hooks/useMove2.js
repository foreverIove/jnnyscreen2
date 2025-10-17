import { reactive, ref, onUnmounted } from 'vue'
let timer = reactive({})
let index = ref(0)
let direction = ref('positive')
export const useStopTimer = () => {
  clearTimeout(timer)
  clearInterval(timer)
}
export const useMove = (list, obj) => {
  const move = (list, obj) => {
    clearInterval(timer)
    const Maxlong = (list.length - 4) * 42
    timer = setInterval(() => {
      index.value++
      obj.style.marginTop = obj.style.marginTop + 0
      const a = Math.abs(parseInt(obj.style.marginTop))
      const b = parseInt(obj.style.marginTop)
      if (direction.value === 'positive') {
        if (a < Maxlong) {
          obj.style.marginTop = -1 * index.value + 'px'
        } else {
          index.value = 1
          direction.value = 'negative'
        }
      } else {
        if (a > 0) {
          let index1 = 0
          index1++
          obj.style.marginTop = b + index1 + 'px'
        } else {
          index.value = 1
          direction.value = 'positive'
        }
      }
    }, 100)
  }

  onUnmounted(() => {
    console.log('组件卸载')
    clearTimeout(timer)
  })
  move(list, obj)
}
