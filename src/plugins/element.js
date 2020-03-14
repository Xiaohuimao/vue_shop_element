import Vue from 'vue'
import { 
  Button , Form , FormItem , Input  , Container , Header , Aside , Main ,
Menu, Submenu, MenuItem , Breadcrumb, BreadcrumbItem ,Card ,Row,Col,Table,TableColumn,
Switch,Tooltip,Pagination,Dialog,MessageBox} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'

import {message} from './restMessage.js'

locale.use(lang)

Vue.use( Button )
Vue.use( Form )
Vue.use( FormItem )
Vue.use( Input )
Vue.use( Container )
Vue.use( Header )
Vue.use( Aside )
Vue.use( Main )
Vue.use( Menu )
Vue.use( Submenu )
Vue.use( MenuItem )
Vue.use( Breadcrumb )
Vue.use( BreadcrumbItem )
Vue.use( Card )
Vue.use( Row )
Vue.use( Col )
Vue.use( Table )
Vue.use( TableColumn )
Vue.use( Switch )
Vue.use( Tooltip )
Vue.use( Pagination )
Vue.use( Dialog )
// 弹窗组件需要全局挂载
Vue.prototype.$message = message
Vue.prototype.$confirm = MessageBox.confirm
