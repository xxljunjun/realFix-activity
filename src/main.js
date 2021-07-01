import Vue from 'vue'
import App from './App.vue'
import "@/style/common.scss"//引入全局样式
import "@/style/vant.scss"
import router from './router'//配置路由
import { Lazyload } from 'vant';//配置懒加载
Vue.use(Lazyload);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
