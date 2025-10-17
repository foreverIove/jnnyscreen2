export const setToken = (token: string) => {
  localStorage.setItem('token', token)
}
export const getToken = () => {
  return localStorage.getItem('token')
}
export const setInfo = (Info: string) => {
  localStorage.setItem('Info', Info)
}
export const getInfo = () => {
  return localStorage.getItem('Info')
}
