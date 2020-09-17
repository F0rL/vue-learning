import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

let HAS_LOGINED = true

// 全局前置守卫
// 登录
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'Login') {
    if (HAS_LOGINED) next()
    else next({ name: 'Login' })
  } else {
    if (HAS_LOGINED) next({ name: 'Home' })
    else next()
  }
})

// 全局后置钩子
router.afterEach((to, from) => {
  // 做加载取消
  // loading = false
})

// 全局解析守卫 beforeResolve
// 和 router.beforeEach 类似，区别是在导航被确认之前
// 同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。

export default router
