// webpack.config.js
//const path = require('path');
//import mainImage from './images/main.png';
//img.src = mainImage;

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
}