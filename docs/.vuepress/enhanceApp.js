import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import WatrixComponent from '../../components/global.js'
import InnerComponent from './components/register.js'
export default ({ Vue }) => {
  Vue.use(Antd)
  Vue.use(WatrixComponent)
  Vue.use(InnerComponent)
}