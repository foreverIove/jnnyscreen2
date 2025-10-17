# vue3_base_template

基于vue3实现的大屏便捷开发模板，本模版样式粗糙，但是尽量五脏俱全。兼顾性能与开发效率。

## 使用技术栈：

```
Vue :3.3
pinia:2.1.7
vue-router:4.2.5
less
...
```

本框架主要用于便捷构建大屏项目，功能点如下：

### 数字翻牌器

动态数字滚动增加

### 样式统一管理

使用less变量控制全局，让你从光明与黑暗中随时切换

### 高德地图Map组件

包含热力图与海量地图标识点，信息窗体...

### Loding的炫酷效果

在这里建议您使用时，请为每个大屏的效果都增加Loding，由于查询数据量大，接口返回结果比较慢

### 干净的main.ts

大量的引入全局组件和组件库，让main.ts更乱？那就分出去吧

### 代码校验

代码的校验规则让你的代码更符合规范

### 接口和仓库的统一管理

让.vue文件中不再出现接口逻辑，让数据集中在仓库中，以便组件之间共享数据。

### 三维echarts

3D echarts立体展示

### 集中式管理字体

让你随时随地的引入你想要的现有字体样式（免费）

*优设标题黑*、**庞门正道**、数字液晶字体、思源黑体

### 可自定义颜色的半扇图

你可以自定义文字、数值以及展示的颜色，组件将自动渲染成你想要的样子。

### 3D地球echarts

### 列表滚动组件

触底反弹，可接收任意长度数组对象，你只负责传递数据，其他交给封装体。

### api接口的统一管理

### 登录

带有表单验证的登录，mock模拟数据。

### 生产环境

更干净的生产环境，在生产环境中，永不出现console控制台打印 ^_^

### 建议：

建议使用anvG2，它比echarts要灵活，不需要考虑实例是否已经创建的问题。
### changxushi



### Digital Flipper

Dynamic number scrolling increase.

### Unified Style Management

Use less variables to control the global style, allowing you to switch between light and dark modes at any time.

### AMap Map Component

Includes heatmap and massive map markers, info windows…

### Cool Loading Effects

It is recommended to add loading effects for each screen. Due to the large amount of data queried, the API returns results relatively slowly.

### Clean main.ts

A large number of global components and component libraries are imported. Making main.ts messy? Then split it up.

### Code Validation

Code validation rules make your code more compliant.

### Unified Management of Interfaces and Repositories

Do not let interface logic appear in .vue files, keep data centralized in repositories for data sharing between components.

### 3D Echarts

3D echarts for stereoscopic display.

### Centralized Font Management

Allows you to easily import existing font styles (free) whenever you want.

*You Shei Title Black*, **Pangmen Zhengdao**, Digital LCD font, Source Han Sans.

### Semi-circle Graph with Customizable Colors

You can customize text, values, and displayed colors. The component will automatically render as you wish.

### 3D Earth Echarts

### List Scroll Component

Bottom bounce, can accept arrays of any length objects, you only need to pass data, the rest is handled by the encapsulation.

### Unified Management of API Interfaces

### Login

Login with form validation, mock data simulation.

### Production Environment

A cleaner production environment, where console console printing never appears ^_^.

### Suggestion:

It is recommended to use anvG2, which is more flexible than echarts and does not require consideration of whether the instance has been created.


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
