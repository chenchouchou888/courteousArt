import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
function debounce(fn) {
  console.log("enter debounce");
  let time = null;
  return function () {
    console.log(time)
    if (time) {
      clearTimeout(time);
    }

    time = setTimeout(() => {
      fn();
    }, 1000);
  }
}
Vue.prototype.debounce = debounce

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
