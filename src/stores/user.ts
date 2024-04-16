import { defineStore } from 'pinia'

//  1.Store 名稱
//  2. 屬性參數 null 
export default defineStore('User Store', {
  // Date
  state: () => ({
    name: 'null',
    wallet: 300
  }),

  // Computed
  getters: {
    getUserName: (state) => `我的名稱叫做 ${state.name}`
  },

  // Methods
  actions: {
    // 可以用 this
    updateName(name:string) {
      if (name != '杰倫') {
        this.name = '300'
      } else {
        this.name = '卡斯柏'
      }
    }
  }
})

/*
export const UserStore = defineStore('user', {
  // Data
  state: () => ({
    name: '測試中',
    products: [
      {
        id: 1,
        title: '多色餅乾',
        imageUrl:
          'https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: 80
      },
      {
        id: 2,
        title: '綠色馬卡龍',
        imageUrl:
          'https://images.unsplash.com/photo-1623066463831-3f7f6762734d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80',
        price: 120
      },
      {
        id: 3,
        title: '甜蜜左擁右抱',
        imageUrl:
          'https://images.unsplash.com/photo-1558312657-b2dead03d494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: 200
      },
      {
        id: 4,
        title: '巧克力心連心',
        imageUrl:
          'https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: 160
      },
      {
        id: 5,
        title: '粉係馬卡龍',
        imageUrl:
          'https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: 120
      }
    ]
  }),

  // Computed
  getters: {
    // 要呼叫資料
    getProductsData: (state) => {
      ;`呼叫方法${state.products[0].title}`
    }
  },

  // Methods
  actions: {
    upProductsData() {
      this.products[0].title = '測試中'
    }
  }
})
*/
