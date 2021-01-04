// import 'babel-polyfill';
// import '../components/style.js';
// import './index.less';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import './components';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  fallback: false,
  routes,
});

window.cc = new Vue({
  el: '#app',
  router
});
