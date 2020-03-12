import Vue from 'vue'
import { Button , Form , FormItem , Input , Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use( Button )
Vue.use( Form )
Vue.use( FormItem )
Vue.use( Input )
// 弹窗组件需要全局挂载
Vue.prototype.$message = Message
