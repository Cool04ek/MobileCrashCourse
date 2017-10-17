const babelOptions = require('./package.json').babel.env.test;
module.exports = function (wallaby) {
    return {
        env: {
            type: 'node',
            runner: 'node'
        },

        testFramework: 'jest',

        files: [
            './package.json',
            'src/**/*.js',
            '!src/**/*.test.js'
        ],

        tests: [
            'src/**/*.test.js'
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel(babelOptions)
        },

        setup: (w) => {
            w.testFramework.configure(require('./package.json').jest);
        }
    };
};
