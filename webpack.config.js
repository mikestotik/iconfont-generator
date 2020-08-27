const path = require('path');

const DIST_PATH = 'dist';

module.exports = {
    entry: {
        'iconfont-generator': './src/main.ts',
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, DIST_PATH)
    },
    mode: 'production',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
};
