import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Home from '../view/Home'
import Login from '../view/Login'
import Register from '../view/Register'
import Cart from '../view/Cart'
import Details from '../view/Details'
// import Details1 from '../view/Details1'
import Errors from '../view/Errors'

import store from '../store'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
Vue.use(Vuex)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      // redirect: '/home'
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      // component: (resolve) => require('../view/Home.vue')
    },
    {
      path: '/login',
      component: Login,
      afterEach:(to,from) => {
        to:'/home'
      }
    },
    {
      path: '/register',
      // component: () => import('../view/Register')
      component: Register
    },
    {
      path: '/cart',
      component: Cart,
      meta:{auth:true},
      beforeEnter:(to,from,next) => {
        if (store.state.isLogin===1 ) {
             next()
        }
        else{
                alert('还没有登录，请先登录！')
                next('/login')
              }
            }
      // to.matched.some( m => m.meta.auth)
    //   beforeEach:(to,from,next) => {
    //     if(to.matched.some( m => m.meta.auth)){
    //         // 对路由进行验证
    //         if(store.state.isLogin===1) { // 已经登陆
    //             next()     // 正常跳转到你设置好的页面
    //         }else{
    //           alert('还没有登录，请先登录！')
    //             // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
    // 　　 　　　　next({path:'/login',query:{ Rurl: to.fullPath} })
    //  　　　　　} 
    // 　　　　}else{ 
    // 　　　　　　next() 
    // 　　} 
    // }
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/details/:id',
    component: Details
  },
  {
    path:'/404',
    component:Errors
  }
  ]
})
