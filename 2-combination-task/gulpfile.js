const { series, parallel } = require('gulp')

const taskl = done => {
    setTimeout(()=> {
        console.log('taskl')
        done()
    }, 1000)
}

const task2 = done => {
    setTimeout(()=> {
        console.log('task2')
        done()
    }, 1000)
}

const task3 = done => {
    setTimeout(()=> {
        console.log('task3')
        done()
    }, 1000)
}
//  series 顺序执行
exports.foo = series(taskl,  task2, task3)

//  parallel 顺序执行
exports.bar = parallel(taskl,  task2, task3)