import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

// 样式表
/*eslint-disable*/
import './styles/minimal.css'
// import './styles/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/bootstrap-checkbox.css'
import '../../static/assets/css/vendor/animate/animate.min.css'
import '../../static/assets/js/vendor/mmenu/css/jquery.mmenu.all.css'
import '../../static/assets/js/vendor/videobackground/css/jquery.videobackground.css'
import '../../static/assets/js/vendor/rickshaw/css/rickshaw.min.css'
import '../../static/assets/js/vendor/morris/css/morris.css'
import '../../static/assets/js/vendor/tabdrop/css/tabdrop.css'
import '../../static/assets/js/vendor/summernote/css/summernote.css'
import '../../static/assets/js/vendor/summernote/css/summernote-bs3.css'
import '../../static/assets/js/vendor/chosen/css/chosen.min.css'
import '../../static/assets/js/vendor/chosen/css/chosen-bootstrap.css'
// js依赖
import '../../static/assets/js/jquery.js'
import '../../static/assets/js/vendor/bootstrap/bootstrap.min.js'
import '../../static/assets/js/vendor/mmenu/js/jquery.mmenu.min.js'
import '../../static/assets/js/vendor/sparkline/jquery.sparkline.min.js'
import '../../static/assets/js/vendor/nicescroll/jquery.nicescroll.min.js'
import '../../static/assets/js/vendor/animate-numbers/jquery.animateNumbers.js'
import '../../static/assets/js/vendor/videobackground/jquery.videobackground.js'
// import './assets/js/vendor/blockui/jquery.blockUI.js'
import '../../static/assets/js/vendor/flot/jquery.flot.min.js'
import '../../static/assets/js/vendor/flot/jquery.flot.time.min.js'
import '../../static/assets/js/vendor/flot/jquery.flot.selection.min.js'
import '../../static/assets/js/vendor/flot/jquery.flot.animator.min.js'
import '../../static/assets/js/vendor/flot/jquery.flot.orderBars.js'
import '../../static/operation'
// import './assets/js/vendor/easypiechart/jquery.easypiechart.min.js'
// import './assets/js/vendor/rickshaw/raphael-min.js'
// import './assets/js/vendor/rickshaw/d3.v2.js'
// import './assets/js/vendor/rickshaw/rickshaw.min.js'
import '../../static/assets/js/vendor/morris/morris.min.js'
import '../../static/assets/js/vendor/tabdrop/bootstrap-tabdrop.min.js'
import '../../static/assets/js/vendor/summernote/summernote.min.js'
import '../../static/assets/js/vendor/chosen/chosen.jquery.min.js'
import '../../static/assets/js/minimal.min.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
