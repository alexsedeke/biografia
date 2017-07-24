module.exports = (ctx) => ({
    plugins: {
        'postcss-import': { root: ctx.file.dirname },
        'postcss-nested': {},
        'postcss-cssnext': {},
        'postcss-discard-comments': { removeAll: true },
        'cssnano': ctx.env === 'production' ? {} : false
    }
})
