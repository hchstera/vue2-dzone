var mixLib = require('laravel-mix');
var mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Manage javascripts
 |--------------------------------------------------------------------------
 */

// build the demo bundle with Vue instance
mix.js('src/demo.js', 'dist/bundle.js');

// build dropzone and vue2-dzone to single js
mixLib.webpackConfig({
    output: {
        library: 'Vue2Dzone',
        libraryTarget: 'umd'
    }
});
mixLib.js('src/main.js', 'dist/vue2-dzone.js');


