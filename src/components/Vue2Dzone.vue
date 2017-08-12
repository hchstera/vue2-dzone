<!--suppress CssUnknownTarget -->
<template>
    <div>
        <form :id="id" action="/file-upload" :class="dropzoneClass">
            <slot name="form"></slot>
        </form>
        <div ref="previewTemplate" style="visibility: hidden;position: absolute;">
            <slot name="previewTemplate"></slot>
        </div>
    </div>
</template>

<script>
    import Dropzone from 'dropzone';

    export default {
        name: 'vue-dzone',
        props: {
            id: {
                type: String,
                required: true,
            },
            dropzoneClass: {
                type: String,
                default: 'dropzone dash-dropzone'
            },
            // Dropzone option props see http://www.dropzonejs.com/#config-url
            url: {
                type: String,
                required: true,
            },
            method: {
                type: String,
                default: 'post',
            },
            timeout: {
                type: Number,
                default: 3000,
            },
            parallelUploads: {
                type: Number,
                default: 2,
            },
            uploadMultiple: {
                type: Boolean,
                default: false,
            },
            maxFilesize: {
                type: Number,
                default: 256,
            },
            paramName: {
                type: String,
                default: 'file'
            },
            createImageThumbnails: {
                type: Boolean,
                default: true,
            },
            maxThumbnailFilesize: {
                type: Number,
                default: 10,
            },
            thumbnailWidth: {
                type: Number,
                default: 120,
            },
            thumbnailHeight: {
                type: Number,
                default: 120,
            },
            thumbnailMethod: {
                type: String,
                default: 'crop',
            },
            resizeWidth: {
                type: Number,
                default: null,
            },
            resizeHeight: {
                type: Number,
                default: null,
            },
            resizeMimeType: {
                type: String,
                default: null,
            },
            resizeQuality: {
                type: Number,
                default: 0.8,
            },
            resizeMethod: {
                type: String,
                default: 'contain',
            },
            filesizeBase: {
                type: Number,
                default: 1000,
            },
            maxFiles: {
                type: Number,
                default: null,
            },
            params: {
                type: Object,
                default() {

                }
            },
            headers: {
                type: Object,
                default() {

                }
            },
            clickable: {
                type: Boolean,
                default: true,
            },
            ignoreHiddenFiles: {
                type: Boolean,
                default: true,
            },
            acceptedFiles: {
                type: String,
                default: null,
            },
            autoProcessQueue: {
                type: Boolean,
                default: true,
            },
            autoQueue: {
                type: Boolean,
                default: true,
            },
            addRemoveLinks: {
                type: Boolean,
                default: false,
            },
            previewsContainer: {
                type: [Object, String],
                default: null,
            },
            hiddenInputContainer: {
                type: String,
                default: 'body',
            },
            capture: {
                type: String,
                default: null,
            },
            renameFile: {
                type: String,
                default: null,
            },
            forceFallback: {
                type: Boolean,
                default: false,
            },
            languages: {
                type: Object,
                default() {

                }
            },
            // override option props
            options: {
                type: Object,
                default() {

                }
            }

        },
        data() {
            return {
                dropzone: null,
                isOverrideOptions: false,
            };
        },
        computed: {
            mergeLanuages() {
                let defaultLang = {
                    dictDefaultMessage: 'Drop files here to upload',
                    dictFallbackMessage: 'Your browser does not support drag and drop file uploads.',
                    dictFallbackText: 'Please use the fallback form below to upload your files like in the olden days.',
                    dictFileTooBig: 'File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.',
                    dictInvalidFileType: `You can't upload files of this type.`,
                    dictResponseError: 'Server responded with {{statusCode}} code.',
                    dictCancelUpload: 'Cancel upload',
                    dictCancelUploadConfirmation: 'Are you sure you want to cancel this upload?',
                    dictRemoveFile: 'Remove',
                    dictRemoveFileConfirmation: null,
                    dictMaxFilesExceeded: 'You can not upload any more files. (max: {{maxFiles}})',
                    dictFileSizeUnits: '{ tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" }',
                };

                return _.merge(defaultLang, this.languages);
            },
        },
        methods: {
            initDropzone() {
                Dropzone.autoDiscover = false;
                let formDOM = document.getElementById(this.id);
                let options = this.parseOptions();

                this.dropzone = new Dropzone(formDOM, options);

                this.emitDropzoneInstance(this.dropzone);
            },
            parseOptions() {
                // get options from pors
                let options = {
                    url: this.url,
                    method: this.method,
                    timeout: this.timeout,
                    parallelUploads: this.parallelUploads,
                    uploadMultiple: this.uploadMultiple,
                    maxFilesize: this.maxFilesize,
                    paramName: this.paramName,
                    createImageThumbnails: this.createImageThumbnails,
                    maxThumbnailFilesize: this.maxThumbnailFilesize,
                    thumbnailWidth: this.thumbnailWidth,
                    thumbnailHeight: this.thumbnailHeight,
                    thumbnailMethod: this.thumbnailMethod,
                    resizeWidth: this.resizeWidth,
                    resizeHeight: this.resizeHeight,
                    resizeMimeType: this.resizeMimeType,
                    resizeQuality: this.resizeQuality,
                    resizeMethod: this.resizeMethod,
                    filesizeBase: this.filesizeBase,
                    maxFiles: this.maxFiles,
                    params: this.params,
                    headers: this.headers,
                    clickable: this.clickable,
                    ignoreHiddenFiles: this.ignoreHiddenFiles,
                    acceptedFiles: this.acceptedFiles,
                    autoProcessQueue: this.autoProcessQueue,
                    autoQueue: this.autoQueue,
                    addRemoveLinks: this.addRemoveLinks,
                    previewsContainer: this.previewsContainer,
                    hiddenInputContainer: this.hiddenInputContainer,
                    capture: this.capture,
                    renameFile: this.renameFile,
                    forceFallback: this.forceFallback,
                };
                // merge slot preview template
                if (!_.isEmpty(this.$refs.previewTemplate.innerHTML)) {
                    options = _.merge(options, {previewTemplate: this.$refs.previewTemplate.innerHTML});
                }

                // merge language option from computed
                options = _.merge(options, this.mergeLanuages);

                // merge override options from props
                if (this.isOverrideOptions) {
                    options = _.merge(options, this.options);
                }

                return options;
            },
            emitDropzoneInstance(dropzone) {
                this.$emit('dropzone-init', dropzone);
            },
            registerEvents() {

            },
            checkOverrideOptions() {
                if (_.size(this.options) > 0) {
                    return this.isOverrideOptions = true;
                }

                return this.isOverrideOptions = false;
            }
        },
        mounted() {
            this.checkOverrideOptions();
            this.initDropzone();
            this.registerEvents();
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import url('~dropzone/dist/dropzone.css');

    .dash-dropzone {
        border: 2px dashed #0087F7;
        border-radius: 5px;
        background: white;
    }
</style>