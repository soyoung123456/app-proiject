import Vue from 'vue'
import Vuex from 'vuex'

// import { getFilterArray } from '../utils/array.js'
import phone_data from '../utils/phone.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],
    cartCount: 0,
    phoneList: []
    
  },
  mutations: {
    // 添加笔记本商品列表
    setPhoneList (state, data) {
      state.phoneList = data
    },
    // 添加到购物车
    addCart (state, id) {
      // 先判断购物车是否已有，如果有，数量+1
      const isAdded = state.cartList.find(item => item.id === id)
      if (isAdded) {
        isAdded.count ++
      } else {
        state.cartList.push({
          id: id,
          count: 1
        })
      }
    },
    // 修改商品数量
    editCartCount (state, payload) {
      const phone = state.cartList.find(item => item.id === payload.id)
      phone.count += payload.count
    },
    // 删除商品
    deleteCart (state, id) {
      const index = state.cartList.findIndex(item => item.id === id)
      state.cartList.splice(index, 1)
    },
    // 清空购物车
    emptyCart (state) {
      state.cartList = []
    }
  },
  actions: {
    // 请求商品列表
    getPhoneList (context) {
      // 真实环境通过 ajax 获取，这里用异步模拟
      setTimeout(() => {
        context.commit('setPhoneList', phone_data)
      }, 500)
    },
    // 购买
    buy (context) {
      // 真实环境应通过 ajax 提交购买请求后再清空购物列表
      return new Promise(resolve=> {
        setTimeout(() => {
          context.commit('emptyCart')
          resolve()
        }, 500)
      })
    }
  }
})

export default store
