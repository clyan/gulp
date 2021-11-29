exports.foo = function(done) {
    console.log("foo task")
    done()
}
exports.default = function(done) {
    console.log("default task")
    done() // 标识任务完成
}
const gulp = require('gulp')
gulp.task('bar', done => {
    console.log('bar task')
    done()
})