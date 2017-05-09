const kit = require('nokit')

module.exports = (task, option) => {
    option('--fix', 'lint auto fix')

    task('default', ['dev'], 'default task', () => {
        kit.log('\n>>>>>>> start >>>>>>>\n')
    })

    task('tsc-w', 'watch typescript', (opt) => {
        const args = [
            '-w',
            '*.ts',
            './node_modules/.bin/tsc',
            '--',
            '-w',
            '-p',
            'tsconfig.json'
        ]
        kit.spawn('./node_modules/.bin/noe', args, {
            prefix: 'TSC | :blue'
        })
    })

    task('template-dev', 'render-template-dev', kit.async(function * () {
        yield kit.exec('node ./config/template.config.js development')
    }))

    task('template-prod', 'render-template-prod', kit.async(function * () {
        yield kit.exec('node ./config/template.config.js production')
    }))

    task('tsc-p', 'typescript compile', kit.async(function * (opt) {
        const args = [
            '-p',
            './tsconfig.json'
        ]
        yield kit.spawn('./node_modules/.bin/tsc', args, {
            prefix: 'TSC | :blue'
        })
    }))

    task('lint', 'lint whole project', function (opts) {
        let conf = [
            '--force',

            '-t', 'stylish',
            '-c', 'tslint.json',

            'src/**/*.ts',
            '*.ts'
        ]

        if (opts.fix)
            conf.unshift('--fix')

        return kit.spawn('tslint', conf)
    })

    task('dev', ['template-dev', 'tsc-w'], 'webpack-dev-server', (opt) => {
        kit.spawn('./node_modules/.bin/webpack-dev-server', [
            '--hot',
            '--info',
            'false',
            '--config',
            './config/dev.config.js'
        ], {
            prefix: 'WEB | :green'
        })
    })

    task('build', ['lint', 'template-prod', 'tsc-p'], 'build', kit.async(function * (opt) {
        const config = opt.config || 'prod'
        kit.log(`\n>>>>>>>> build >>>>>>>>>>>\n`)
        yield kit.spawn('./node_modules/.bin/webpack', [
            '--progress',
            '--config',
            './config/prod.config.js'
        ], {
            prefix: 'BUILD | :black'
        })
    }))
}
