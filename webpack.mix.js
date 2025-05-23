require('dotenv').config();
const { plugins } = require('chart.js');
const webpack = require('webpack');
const mix = require('laravel-mix');

mix.babelConfig({
   plugins: ['@babel/plugin-syntax-dynamic-import'],
});

mix.js('resources/js/app.js', 'public/js').
    extract(['vue'])
    .webpackConfig({
        plugins: [
            new webpack.DefinePlugin({
                'process.env':{
                    PG_LATAM_URL:JSON.stringify(process.env.PG_LATAM_URL)
                }
            })
        ]
    });

if (mix.inProduction()) {
   mix.version();
}
//mix.sass('resources/sass/fonts.scss', 'public/css');
//mix.sass('resources/sass/app.scss', 'public/css');
