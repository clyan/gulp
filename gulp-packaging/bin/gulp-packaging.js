#!/usr/bin/env node
process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
// require.resolve() 找到这个模块所对应的路径
process.argv.push(require.resolve('..'))
console.log(process.argv)
require('gulp/bin/gulp')