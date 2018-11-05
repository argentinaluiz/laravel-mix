let mix = require('laravel-mix');
let webpack = require('webpack');

/* mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.copy('node_modules/font-awesome/fonts', 'public/fonts');
mix.copy('node_modules/font-awesome/css/font-awesome.min.css', 'public/css/font-awesome.min.css');
mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js/jquery.min.js'); */

mix.copy('node_modules/font-awesome/fonts', 'public/fonts')
   .copy('node_modules/jquery/dist/jquery.min.js', 'public/js');
mix.styles([
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
], 'public/css/style.css');

mix.scripts([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'resources/assets/js/app.js'
], 'public/js/scripts.js');

mix.autoload({
    jquery: ['$', 'window.jQuery']
});