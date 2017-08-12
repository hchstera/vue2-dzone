<template>
    <div>
        <vue-dzone ref="mydzone" @dropzone-init="catchDropzone" :options="options" :url="'/photo/upload'" :id="'mydzone'"></vue-dzone>
    </div>
</template>

<script>
    import Vue2Dzone from '../dist/vue2-dzone';
    import _ from 'lodash';
    export default {
		data() {
            return {
                dz:null,
                options:{dictDefaultMessage: '請上傳BLABLABLA'}
            }
		},
		methods: {
		    catchDropzone(dropzone) {
		        this.dz = dropzone;
            }
		},
		mounted() {
		    console.log(Vue2Dzone);
		},
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import url('~dropzone/dist/dropzone.css');
</style>