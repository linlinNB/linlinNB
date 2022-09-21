import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import WatrixComponent from '../../packages/components/global.js'
import InnerComponent from './components/register.js'
import './styles/themes/index.less'
import VueCompositionAPI from '@vue/composition-api'

export default ({ Vue }) => {
  Vue.use(Antd)
  Vue.use(WatrixComponent)
  Vue.use(InnerComponent)
  Vue.use(VueCompositionAPI)
}