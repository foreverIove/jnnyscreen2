import request from '@/utils/request'
// 用户注册分析/localhost:8041/statistic/largescreenV3/getRegisterUser
export const reqRegisterUser = (type) =>
  request({
    url: `statistic/largescreenV3/getRegisterUser?type=${type}`
  })
//   活跃度/localhost:8041/statistic/largescreenV3/getRetentionRate
export const reqRetentionRate = () =>
  request({
    url: `statistic/largescreenV3/getRetentionRate`
  })
// 漏斗/localhost:8041/statistic/largescreenV3/getUserConversionRate
export const reqUserConversionRate = () =>
  request({
    url: `statistic/largescreenV3/getUserConversionRate`
  })
// 时长分析/localhost:8041/statistic/largescreenV3/getPeriodDurationCount
export const reqPeriodDurationCount = () =>
  request({
    url: `statistic/largescreenV3/getPeriodDurationCount`
  })
// 充电时段行为分析/localhost:8041/statistic/largescreenV3/getPeriodSartAndStop
export const reqPeriodSartAndStop = () =>
  request({
    url: `statistic/largescreenV3/getPeriodSartAndStop`
  })
// 首次充电区域排行/localhost:8041/statistic/largescreenV3/getMonthAdminDistrictNewUser
export const reqMonthAdminDistrictNewUser = () =>
  request({
    url: `statistic/largescreenV3/getMonthAdminDistrictNewUser`
  })
// 分析下面三个接口/localhost:8041/statistic/largescreenV3/getUserData
export const reqUserData = () =>
  request({
    url: `statistic/largescreenV3/getUserData`
  })
// 获取热力图数据/localhost:8041/statistic/largescreenV3/getUserChargingMap
export const reqUserChargingMap = () =>
  request({
    url: `statistic/largescreenV3/getUserChargingMap`
  })
