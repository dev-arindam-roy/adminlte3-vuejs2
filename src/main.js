import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
  confirmButtonColor: '#0d6efd',
  cancelButtonColor: '#cc1f00',
};
Vue.use(VueSweetalert2, options)

import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
var toastrConfigs = {
  position: 'top right',
  showDuration: 1000,
  timeOut: 5000,
  closeButton: true,
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
  progressBar: true
}
Vue.use(CxltToastr, toastrConfigs)

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      pageLoading: false
    }
  },
  beforeCreate()  {
  
  },
  created() {
  
  },
  beforeUpdate() {
  
  },
  updated() {
  
  },
  methods: {
    
  },
  router,
  //render: h => h(App)
  render: function (h) {
    return h(App, { props: { isPageLoading: this.pageLoading } });
  }
}).$mount('#app') // public/index => app (id)
