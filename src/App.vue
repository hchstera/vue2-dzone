<template>
    <div>
        <section class="demo-section">
            <h1 class="demo-h1">Try it out!</h1>
            <vue-dzone ref="mydzone" @dropzone-init="catchDropzone" :url="'/photo/upload'" :defaultTheme="true" :id="'mydzone'">
                <div class="dz-message" slot="form"><span>Hey drop here</span></div>
            </vue-dzone>
        </section>
    </div>
</template>

<script>
    import Vue2Dzone from '../dist/vue2-dzone';
    import _ from 'lodash';
    export default {
		data() {
            return {
                dz:null,
            }
		},
		methods: {
		    catchDropzone(dropzone) {
		        this.dz = dropzone;
		        console.log(this.dz);
            }
		},
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import url('~dropzone/dist/dropzone.css');

    .demo-section {
        background: #E8E9EC;
        padding: 1.4rem 1.4rem 2.8rem 1.4rem;
        display: block;
    }
    .demo-h1 {
        font-size: 1.8rem;
        color: #0087F7;
        -webkit-font-smoothing: antialiased;
        line-height: 2.2rem;
    }
</style>