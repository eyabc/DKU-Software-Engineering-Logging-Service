import Vue from 'vue'
import App from './App.vue'
import { router, store } from './middleware'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './filter'
import './middleware/icon'

Vue.config.productionTip = false

const locale = require('element-ui/lib/locale/lang/ko')

Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
