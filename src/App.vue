<template>
    <div> hello world
        <vue-dzone></vue-dzone>
    </div>
</template>

<script>
    import Vue2Dzone from '../dist/vue2-dzone';

    export default {
		data() {
            return {

            }
		},
		methods: {
		
		},
		mounted() {
		    console.log(Vue2Dzone);
		},
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>