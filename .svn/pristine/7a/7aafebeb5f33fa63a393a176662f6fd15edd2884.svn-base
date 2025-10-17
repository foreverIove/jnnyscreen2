import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
interface State {
  center: [number, number]
  staid: string
  pathMain: string
  idMove: number
  allMaplist: any[] // 地图
  center1: [number, number] | []
  adcode: any
  zoompinia: any
  name: any
  listpoint: any
  nameArea: any
  visibleA: boolean
  visibleB: boolean
}
const useType = defineStore('counter', {
  state: () => ({
    center: [117.006, 36.8],
    staid: '',
    pathMain: '--p-',
    idMove: 0,
    allMaplist: [], //地图，
    center1: [],
    adcode: '370100',
    zoompinia: 11, //越大视角越大9
    listpoint: [
      { id: 0, lnglat: [117.064288, 36.683698], msg: '信息窗体2' },
      { id: 1, lnglat: [117.053655, 36.715506], msg: '信息窗体3' },
      { id: 1, lnglat: [116.978849, 36.715506], msg: '信息窗体4' }
    ],
    nameArea: '',
    visibleA: true,
    visibleB: true
  }),

  getters: {},

  actions: {
    moveMap(id: number) {
      this.idMove = id
      console.log('触发action', this.center, id)
      let center1 = {}
      center1 = this.allMaplist.filter((item) => {
        return id == item.id
      })[0]

      this.center = [center1.longitude, center1.latitude]
    },
    moveMap2(area: any) {
      console.log(area, '坐标')
      this.center = area
    },
    changeAdcode(citycode: number) {
      console.log(citycode, 'citycode')
    },
    putname(data, name) {
      this.listpoint = data
      this.nameArea = name
    }
  }
})

//暴露这个useCounter模块
export default useType
