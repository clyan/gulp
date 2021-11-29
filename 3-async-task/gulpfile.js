const { time } = require("console")
const fs = require("fs")
exports.callback = done => {
    console.log("callback")
    done()
}

// 执行任务中报出一个错误，阻止剩下的任务执行, 如果是多个任务同时执行，后续任务不会再执行
exports.callback_error = done => {
    console.log("callback")
    done(new Error("task failed"))
}

exports.promise = ()=> {
    console.log("promise")
    return Promise.reject(new Error("promise task"));
}

exports.promise_error = ()=> {
    console.log("promise_error")
    return Promise.reject(new Error("promise_error task failed"));
}

const timeout = (time)=> {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}
exports.async = async ()=> {
    await timeout(time)
    console.log("async task")
}
// 返回readStream, gulp 会通过readStream 的end事件结束该任务，
exports.stream = async ()=> {
    const readStream = fs.createReadStream('package.json')
    const writeStream = fs.createWriteStream('temp.txt')
    readStream.pipe(writeStream)
    // readStream.on('end', ()=> {done()})
    return readStream
}