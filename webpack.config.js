const path = require('path');
// The `entry` option specifies where webpack should start crawling
// our dependency graph
const entry = [ './source/index' ];
// The `output` option specifies where the final bundled js file will be
// placed, and how it will be called.
const output = {  
    path: path.resolve(__dirname, 'public/js'),  
    filename: 'app.js',};
// The `resolve` option let's webpack know which file extensions should it
// be looking at. Note that the empty string has to be included, otherwise
// referencing external libraries (Eg: `import React form 'react'`) would
// not work.
const resolve = {  extensions: [ '', '.js', '.jsx' ],};
// webpack has a concept of loaders, which allow you to preprocess
// files before webpack bundles them. By default, webpack only works with
// ES5, so we will use Babel to transpile our code before letting webpack
// do its thing.
const scriptLoader = {  
    loader: 'babel',  
    include: path.resolve(__dirname, 'source'),  
    test: /\.jsx$|\.js$/,};
// The `devtool` option helps us debug our code by enabling various
// ways in which we can map the original source code to the bundled file.
// 'eval' is the simplest and fastest option which, in case of an error,
// will simply point you towards the module in which the error occurred.
const devtool = 'source-maps';
// Finally, we export the entire config so that webpack can actually
// use it!
module.exports = {  
    entry,  
    output,  
    resolve,  
    module: { loaders: [ scriptLoader ] },  
    devtool,};