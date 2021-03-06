import Vue from 'vue';
import App from './App';
import { router } from './router';

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
