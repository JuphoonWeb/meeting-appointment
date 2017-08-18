// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'sweetalert/dist/sweetalert.css'
import 'sweetalert/dist/sweetalert.min.js'
import 'animate.css/animate.min.css'
import './index.js'

import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template:'<App/>',
  components: { App },
  
})
