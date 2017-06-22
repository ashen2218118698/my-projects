// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.min'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import aSide from './components/aside.vue'
import tabPanel from './components/tabpanel.vue'
import courseCollection from './components/courseCollection.vue'
import homepageAside from './components/homepageAside.vue'

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

Vue.use(VueAwesomeSwiper);

Vue.component('icon', Icon);
Vue.component('aSide', aSide);
Vue.component('tabPanel', tabPanel);
Vue.component('courseCollection', courseCollection);
Vue.component('homepageAside', homepageAside);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
