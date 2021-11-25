import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history',
})

new Vue({
  render: h => h(App),
  vuetify,
  router: router
}).$mount('#app')
