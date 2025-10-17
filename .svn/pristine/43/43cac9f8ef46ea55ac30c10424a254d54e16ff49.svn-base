const useImageUrl = (folder='', name, type = 'png') => {
  /**
   * @method vite动态引入图片
   * @params folder 文件夹名称 name 文件名称 type 文件格式 一般为png/jpg/webp/gif等...
   * @returns 图片
   */
  return new URL(`../assets/images/${folder}/${name}.${type}`, import.meta.url).href
}
export default useImageUrl