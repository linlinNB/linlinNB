function registerDemoComp(Vue) {
  const requireComponent = require.context('./', true, /\.vue$/)
  requireComponent.keys().forEach((ele) => {
    if (ele.includes('/demos/')) {
      const moduleObj = requireComponent(ele).default
      Vue.component(moduleObj.name, moduleObj)
    }
  })
}

function registerGlobComp(Vue) {
  const requireComponent = require.context('./', true, /register\.js$/)
  requireComponent.keys().forEach((ele) => {
    const { register } = requireComponent(ele)
    register(Vue)
  })
}

export default {
  install(Vue) {
    registerGlobComp(Vue)
    registerDemoComp(Vue)
  }
}