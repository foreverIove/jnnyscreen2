import request from '@/utils/request'
import { getInfo } from '@/utils/setToken'
enum API {
  AREA_DATA_URL = '/area/data'
}
interface areaForm {}
export const reqAreaData = async (data: any) => {
  if (getInfo() == 'system') {
    data.code = '2'
  }
  console.log(data, 'data')
  return request.post<any>(API.AREA_DATA_URL, data)
}
