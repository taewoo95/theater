import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'



/*import axios from '.axios' // import axios*/

Vue.prototype.$axios = axios; // prototype에 axios 추가



Vue.config.productionTip = false
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')