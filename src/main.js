// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Axios from 'Axios'

Vue.config.productionTip = false

//安装vue-router插件
Vue.use(VueResource);
//如果其他组件中使用axios命令，需要改写为vue原型属性
Vue.prototype.$axios = Axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})