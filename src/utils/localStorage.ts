export const getType = (): string | null => {
  // 获取本地数据类型
  return sessionStorage.getItem('type')
}
export const setType = (type: any) => {
  // 仅限在浏览器打开时有效
  sessionStorage.setItem('type', type)
}
