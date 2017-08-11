let Vue2DzoneComponent = require('./components/Vue2Dzone.vue');

window.Vue2Dzone = {
    DzoneComponent: Vue2DzoneComponent,
    install(Vue) {
        Vue.component(Vue2DzoneComponent.name, Vue2DzoneComponent)
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Vue2Dzone);
}

module.exports = Vue2Dzone;

