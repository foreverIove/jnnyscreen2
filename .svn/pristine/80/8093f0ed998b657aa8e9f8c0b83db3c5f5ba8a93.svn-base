// share.js
// url - 需要分享的页面地址（当前页面地址）
// title - 分享的标题（文章标题）
import router from '@/router'
// QQ空间
export function toQQzone(url, title) {
  url = encodeURIComponent(url)
  title = encodeURIComponent(title)
  window.open(
    `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&desc=${title}&summary=${title}&site=${url}`
  )
}

//QQ
export function toQQ(url, title) {
  url = encodeURIComponent(url)
  title = encodeURIComponent(title)
  window.open(
    `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&source=${url}&desc=${title}&pics=`
  )
}

//微博
export function toWeibo(url, title) {
  url = encodeURIComponent(url)
  title = encodeURIComponent(title)
  window.open(
    `https://service.weibo.com/share/share.php?url=${url}&title=${title}&pic=&appkey=&sudaref=`
  )
}

// 豆瓣
// export function toDouban(url, title) {
// 	url = encodeURIComponent(url)
// 	title = encodeURIComponent(title)
// 	window.open(`http://www.douban.com/recommend?url=${url}&title=${title}`);
// }

//微信  需要单独写个页面展示二维码，使用微信扫描，点击右上角...分享
export function toWechat(url, title) {
  url = encodeURIComponent(url)
  title = encodeURIComponent(title)
  console.log('share.js', process.env)
  let page = router.resolve({
    name: 'sailSoft',
    query: { newId: newId }
  })
  window.open(page.href, '_blank')
  // window.open(`${process.env.NUXT_ENV_APISERVER}/sharetoWechat?url=${url}&title=${title}`)
}
