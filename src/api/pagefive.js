import request from '@/utils/request'
// 24时/30天/12个月故障次数折线图
export const reqFaultCountLineDataByType = (type) =>
  request({
    url: `statistic/largescreenV3/queryFaultCountLineDataByType?type=${type}`
  })
// 近12个月异常订单
export const reqAbnormalTransLineyearData = () =>
  request({
    url: `statistic/largescreenV3/queryAbnormalTransLineyearData`
  })
// 各区县故障排行
export const reqAreaRankByFault = () =>
  request({
    url: `statistic/largescreenV3/queryAreaRankByFault`
  })
// 故障运营商排名
export const reqTopTenOperatorByFault = () =>
  request({
    url: `statistic/largescreenV3/queryTopTenOperatorByFault`
  })
// 故障电站排名
export const reqStationTopDataByFault = () =>
  request({
    url: `statistic/largescreenV3/queryStationTopDataByFault`
  })
// 故障类型排行
export const reqFaultTypeTopData = () =>
  request({
    url: `statistic/largescreenV3/queryFaultTypeTopData`
  })
// 故障事项
export const reqFaultMatterList = () =>
  request({
    url: `statistic/largescreenV3/queryFaultMatterList`
  })
