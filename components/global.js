function transformComToComp(comp) {
  return {
    name: comp.name,
    render(h) {
      return h(comp)
    }
  }
}

function registerDemoComp(Vue) {
  const requireComponent = require.context('./', true, /\.vue$/)
  requireComponent.keys().forEach((ele) => {
    if (ele.includes('/demos/')) {
      const moduleObj = requireComponent(ele).default
      const comp = transformComToComp(moduleObj)
      Vue.component(moduleObj.name, comp)
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