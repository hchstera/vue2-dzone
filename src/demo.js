window._ = require('lodash');

window.Vue = require('vue');
Vue.component('app-demo', require('./App.vue'));

const app = new Vue({
    el: '#app',
});