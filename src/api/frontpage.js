import request from '@/utils/request'
// 实时故障热力图/localhost:8041/statistic/largescreenV3/getOfflineAndFault
export const reqOfflineAndFault = (mixingcondition) =>
  request({
    url: `statistic/largescreenV3/getOfflineAndFault?mixingcondition=${mixingcondition}`
  })
// 终端利用率热力图/localhost:8041/statistic/largescreenV3/monthTerminalUsageRate
export const reqTerminalUsageRate = (data) => {
  // console.log(data, '参数？？')
  return request({
    url: `statistic/largescreenV3/monthTerminalUsageRate`,
    params: data,
    method: 'get'
  })
}
// 充电量热力图/localhost:8041/statistic/largescreenV3/getChargingCapacity
export const reqChargingCapacity = (data) => {
  // console.log(data, '参数？？')
  return request({
    url: `statistic/largescreenV3/getChargingCapacity`,
    params: data,
    method: 'get'
  })
}
//电站分布图/localhost:8041/statistic/largescreenV3/getStationDistribution
export const reqStationDistribution = (data) => {
  // console.log(data, '参数？？')
  return request({
    url: `statistic/largescreenV3/getStationDistribution`,
    params: data,
    method: 'get'
  })
}
