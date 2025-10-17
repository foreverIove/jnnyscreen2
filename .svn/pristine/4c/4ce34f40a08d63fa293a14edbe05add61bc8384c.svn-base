import { themes } from './color'

interface ThemeConfig {
  primaryColor: string
  primaryTextColor: string
}

// 修改页面中的样式变量值
const changeStyle = (obj: ThemeConfig) => {
  for (const key in obj) {
    document.body.style.setProperty(`--${key}`, obj[key])
  }
}
// 改变主题的方法
export const setTheme = (themeName: string) => {
  console.log('themeName-----', themeName, '---=', themes)

  const themeConfig = themes[themeName]
  changeStyle(themeConfig)
}

// 自定义主题颜色
export const customTheme = () => {
  const themeConfig = {
    primaryColor: `0,0,0`,
    primaryTextColor: `49,49,49`
  }
  changeStyle(themeConfig)
}
