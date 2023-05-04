import Vue from 'vue';
import App from './App.vue';
// 引入 AntV 组件库
// import { Chart } from '@antv/g2';
// import DataSet from '@antv/data-set';


Vue.config.productionTip = false;

// Vue.prototype.$Chart = Chart;
// Vue.prototype.$DataSet = DataSet;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

