import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 路由懒加载
const Login = () => import("components/Login.vue")
const Home = () => import("components/Home.vue")

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/Home',
    component: Home,
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next) => {
  if (to.path === '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
