import { MockMethod } from 'vite-plugin-mock'

const cityData = [
  {
    name: '历下区',
    code: 1,
    level: 2,
    adcode: 370102,
    coordinate: [117.095, 36.65],
    list: [
      { id: 0, lnglat: [117.045374, 36.63623], ceshi: 'xxx' },
      { id: 1, lnglat: [117.042869, 36.635301], ceshi: 'xxx' }
    ],
    zoom: 12,
    hasChildren: true,
    children: [
      {
        name: '趵突泉街道',
        code: 101,
        level: 3,
        hasChildren: false,
        children: []
      },
      {
        name: '千佛山街道',
        code: 102,
        level: 3,
        hasChildren: false,
        children: [
          { name: '西园路停车场', code: 102001, level: 4 },
          { name: '千佛山停车场', code: 102002, level: 14 },
          { name: '荔枝停车场', code: 102003, level: 14 },
          { name: '万象城', code: 102004, level: 4 },
          { name: '惠民停车场', code: 102005, level: 4 }
        ]
      }
    ]
  },
  {
    name: '历城区',
    code: 1,
    level: 2,
    coordinate: [117.2, 36.65],
    list: [{ id: 0, lnglat: [117.256491, 36.579141], ceshi: 'xxx' }],
    zoom: 10,
    adcode: 370112,
    hasChildren: true,
    children: [
      {
        name: '王舍人街道',
        code: 101,
        level: 3,
        hasChildren: false,
        children: []
      }
    ]
  },
  {
    name: '天桥区',
    code: 1,
    level: 2,
    adcode: 370105,
    hasChildren: true,
    coordinate: [116.97, 36.77],

    list: [
      { id: 0, lnglat: [116.993583, 36.691097], ceshi: 'xxx' },
      { id: 1, lnglat: [116.991782, 36.69653], ceshi: 'xxx' }
    ],
    zoom: 11.5,
    children: [
      {
        name: 'xxx街道',
        code: 101,
        level: 3,
        hasChildren: false,
        children: []
      }
    ]
  },
  {
    name: '市中区',
    code: 2,
    level: 2,
    adcode: 370103,
    coordinate: [116.97, 36.6],

    list: [
      { id: 0, lnglat: [116.989491, 36.655455], ceshi: 'xxx' },
      { id: 1, lnglat: [116.999396, 36.653733], ceshi: 'xxx' }
    ],
    zoom: 11.5,
    hasChildren: true,
    children: [
      {
        name: '舜耕街道',
        code: 201,
        level: 3,
        hasChildren: false,
        children: [
          { name: '舜耕小区停车场1', code: 201001, level: 4 },
          { name: '舜耕小区停车场2', code: 201002, level: 4 },
          { name: '舜耕小区停车场3', code: 201003, level: 4 },
          { name: '舜耕小区停车场4', code: 201004, level: 4 },
          { name: '舜耕小区停车场5', code: 201005, level: 4 }
        ]
      },
      {
        name: '杆石桥街道',
        code: 202,
        level: 3,
        hasChildren: false,
        children: []
      }
    ]
  },
  {
    name: '长清区',
    code: 1,
    level: 2,
    adcode: 370113,
    coordinate: [116.78, 36.5],

    list: [
      { id: 3, lnglat: [116.804904, 36.598089], ceshi: 'xxx', weight: 100 },

      { id: 0, lnglat: [116.804904, 36.598189], ceshi: 'xxx', weight: 7 },
      { id: 1, lnglat: [116.752237, 36.560184], ceshi: 'xxx', weight: 1 }
    ],
    zoom: 10.5,
    hasChildren: true,
    children: [
      {
        name: 'xxxx街道',
        code: 101,
        level: 3,
        hasChildren: false,
        children: []
      }
    ]
  },
  {
    name: '章丘区',
    code: 1,
    level: 2,
    adcode: 370114,
    coordinate: [117.4, 36.76],
    list: [{ id: 0, lnglat: [117.51553, 36.678795], ceshi: 'xxx' }],
    zoom: 10,
    hasChildren: true,
    children: [
      {
        name: 'xxxx街道',
        code: 101,
        level: 3,
        hasChildren: false,
        children: []
      }
    ]
  },
  {
    name: '槐荫区',
    code: 3,
    level: 2,
    adcode: 370104,
    coordinate: [116.888, 36.68],

    list: [
      { id: 0, lnglat: [116.975475, 36.654018], ceshi: 'xxx' },
      { id: 1, lnglat: [116.969478, 36.660308], ceshi: 'xxx' }
    ],
    zoom: 12,
    hasChildren: true,
    children: [
      {
        name: '段店镇街道',
        code: 301,
        level: 3,
        hasChildren: false,
        children: []
      },
      {
        name: '张庄路街道',
        code: 302,
        level: 3,
        hasChildren: false,
        children: []
      }
    ]
  },
  {
    name: '莱芜区',
    adcode: 370116,
    code: 1,
    level: 2,
    coordinate: [117.5, 36.35],
    zoom: 10,

    list: [
      { id: 0, lnglat: [117.716321, 36.198732], ceshi: 'xxx' },
      { id: 1, lnglat: [117.675754, 36.214238], ceshi: 'xxx' }
    ],
    hasChildren: true,
    children: [
      {
        name: 'xxxx街道',
        code: 101,
        level: 3,
        hasChildren: false,
        children: []
      }
    ]
  },
  {
    name: '钢城区',
    code: 1,
    adcode: 370117,
    level: 2,
    coordinate: [117.8, 36.15],

    list: [{ id: 0, lnglat: [117.811604, 36.059393], ceshi: 'xxx' }],
    zoom: 11,
    hasChildren: true,
    children: [
      {
        name: 'xxx街道',
        code: 101,
        level: 3,
        hasChildren: false,
        children: []
      }
    ]
  },
  {
    name: '高新区',
    code: 1,
    level: 2,
    adcode: 370102,
    coordinate: [117.095, 36.65],
    list: [{ id: 2, lnglat: [116.998417, 36.704947], ceshi: 'xxx' }],
    zoom: 12,
    hasChildren: true
  }
]
const areaData = [
  {
    name: '趵突泉街道',
    code: 101,
    hasChildren: false
  },
  {
    name: '千佛山街道',
    code: 102,
    hasChildren: false
  }
]
const streetData = [
  [
    { name: '趵突泉公园停车场', code: 102001 },
    { name: '泉城广场停车场', code: 102002 },
    { name: '五龙潭公园停车场', code: 102003 },
    { name: '大明湖停车场', code: 102004 }
  ]
]
export default [
  {
    url: '/api/area/data', //请求地址
    method: 'post', //请求方式
    response: ({ body }) => {
      const { code } = body
      if (code === '1') {
        return {
          code: 200,
          data: cityData
        }
      } else if (code === '2') {
        return {
          code: 201,
          data: areaData
        }
      } else if (code === '3') {
        return {
          code: 200,
          data: streetData
        }
      }
    }
  }
] as MockMethod[]
