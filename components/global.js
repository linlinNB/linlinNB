export default {
  install(Vue) {
    // 使用webpack的方法
    // require.context(文件路径, 是否深层次查找, 正则表达式)
    const requireComponent = require.context('./', true, /\.vue$/)
    // requireComponent.keys() 会找到各个组件文件的路径 包含在一个数组里面
    requireComponent.keys().forEach((ele) => {
      if (ele.includes('/demos/')) {
        const moduleObj = requireComponent(ele).default
        Vue.component(moduleObj.name, moduleObj)
      }
    })
  }
}