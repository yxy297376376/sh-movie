import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false  

Vue.use(VueLazyLoad,{
  loading:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1602473363&di=10cdc981e4077cc4955547d892f7e477&src=http://hbimg.b0.upaiyun.com/bf6f63a7ef21797e259ef1242d3bf59bf64b7a2847dba-LRxBDW_fw658"
})

//引入vuex
import store from '@/store/vuex'
//定义事件中心
Vue.prototype.EventBus=new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
