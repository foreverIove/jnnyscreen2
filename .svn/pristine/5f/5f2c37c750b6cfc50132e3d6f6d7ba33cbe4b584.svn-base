import { reactive, ref } from 'vue'

export const useActive = (num: any, name: any) => {
  const obj = reactive({})
  let counter = 1
  // 获取所有状态数量,根据数量创建变量
  for (let index = 1; index <= num; index++) {
    // 添加响应式属性
    // obj.type[index]=ref(false)
    const propertyName = `type${counter}` // 组合属性名，可以使用计数器作为后缀
    obj[propertyName] = ref(false) // 添加属性到对象中
    counter++
  }

  // 现在属性出来了，但是不知道我点击的是那个，所以需要传递一个当前点击的对象，字符串,只需要后缀一样就行
  // 判断最后name的最后一个数字是几如果是1，那么就是咱们的属性1
  const newpropertyName = `type${name[name.length - 1]}`
  // 所有的都要变false
  for (const key in obj) {
    obj[key] = false
  }
  obj[newpropertyName] = true

  // console.log(obj)
  return obj
}
