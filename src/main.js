import Vue from 'vue'
import App from './App.vue'
import router from './router' // 引入 vue-router
import ElementUI from 'element-ui'  //引入 element-ui
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts' //引入 echarts
import layer from "layui-layer"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(echarts)
Vue.prototype.$layer = layer;
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
