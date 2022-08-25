import Vue from 'vue';
import App from './App.vue';
import { i18n } from './plugins/i18n';
import clickOutside from './directives/click-outside';

import './assets/css/normalize.css';

Vue.config.productionTip = false;

Vue.directive('click-outside', clickOutside);

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app');
