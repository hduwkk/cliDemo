// import 'babel-polyfill';
// import '../components/style.js';
// import './index.less';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import wDesign from 'w-design';
import 'w-design/style.js';

// const cc = require('w-design/style.js')

// console.log(wDesign, 'wDesign...')
// console.log(cc, 'wDesign style ...')

Vue.use(wDesign)
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
